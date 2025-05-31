import React, { useState, useEffect } from 'react';
import { Share2, Trophy, Users, Target, ExternalLink, Copy } from 'lucide-react';

interface ReferralDashboardProps {
  userEmail: string;
  isOpen: boolean;
  onClose: () => void;
}

interface UserReferralData {
  referralCode: string;
  rank: number;
  points: number;
  referralCount: number;
  socialShares: number;
  conversionRate: number;
  shareUrl: string;
  createdAt: string;
  email: string;
}

interface LeaderboardEntry {
  rank: number;
  email: string;
  referralCount: number;
  points: number;
  conversionRate: number;
}

const ReferralDashboard: React.FC<ReferralDashboardProps> = ({ userEmail, isOpen, onClose }) => {
  const [userData, setUserData] = useState<UserReferralData | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [sharing, setSharing] = useState(false);

  useEffect(() => {
    if (isOpen && userEmail) {
      loadReferralData();
    }
  }, [isOpen, userEmail]);

  const loadReferralData = async () => {
    setLoading(true);
    try {
      // Load user data
      const userResponse = await fetch(`/api/referrals?email=${encodeURIComponent(userEmail)}`);
      if (userResponse.ok) {
        const userData = await userResponse.json();
        setUserData(userData);
      }

      // Load leaderboard
      const leaderboardResponse = await fetch('/api/referrals?leaderboard=true');
      if (leaderboardResponse.ok) {
        const leaderboardData = await leaderboardResponse.json();
        setLeaderboard(leaderboardData.leaderboard);
      }
    } catch (error) {
      console.error('Failed to load referral data:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyReferralLink = async () => {
    if (!userData) return;

    try {
      await navigator.clipboard.writeText(userData.shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      // Track copy action
      fetch('/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, action: 'copy_link' })
      });
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const shareOnPlatform = async (platform: string) => {
    if (!userData) return;

    setSharing(true);
    
    // Track social share
    try {
      await fetch('/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, action: 'social_share' })
      });
    } catch (error) {
      console.error('Failed to track social share:', error);
    }

    const shareText = generateShareText(platform);
    const shareUrl = userData.shareUrl;

    let platformUrl = '';
    
    switch (platform) {
      case 'twitter':
        platformUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        platformUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('XEUR.AI Beta Access')}&summary=${encodeURIComponent(shareText)}`;
        break;
      case 'facebook':
        platformUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
    }

    if (platformUrl) {
      window.open(platformUrl, '_blank', 'width=600,height=400');
    }

    setSharing(false);
    
    // Reload data to get updated social share count
    setTimeout(loadReferralData, 1000);
  };

  const generateShareText = (platform: string): string => {
    if (!userData) return '';

    const baseText = `🚀 I'm #${userData.rank} on the XEUR.AI beta leaderboard! Join me in the AI gaming revolution - complete games in ~1 hour with just text prompts.`;
    
    const platformTexts = {
      twitter: `${baseText}\n\n${userData.referralCount} referrals and counting! 🎮 #AIGaming #GameDev #XEUR`,
      linkedin: `${baseText}\n\nThis AI democratizes game development - a potential $142B market expansion. Excited to be part of the early community!`,
      facebook: `${baseText}\n\nAmazing technology that lets anyone create games without coding. Check it out!`
    };

    return platformTexts[platform as keyof typeof platformTexts] || baseText;
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return { emoji: '👑', color: 'text-yellow-400', label: 'Beta King' };
    if (rank <= 3) return { emoji: '🥇', color: 'text-yellow-500', label: 'Top 3' };
    if (rank <= 10) return { emoji: '🏆', color: 'text-orange-400', label: 'Top 10' };
    if (rank <= 25) return { emoji: '⭐', color: 'text-purple-400', label: 'Top 25' };
    return { emoji: '🎯', color: 'text-blue-400', label: 'Beta Member' };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-near_black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-near_black/95 to-deep_purple/40 border-2 border-bright_magenta/50 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                Referral Leaderboard
              </h2>
              <p className="text-light_gray_text/70">Share your beta access and climb the rankings</p>
            </div>
            <button
              onClick={onClose}
              className="text-light_gray_text hover:text-bright_magenta transition-colors p-2"
            >
              ✕
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-2 border-bright_magenta/30 border-t-bright_magenta rounded-full mx-auto mb-4"></div>
              <p className="text-light_gray_text/70">Loading your referral data...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Stats */}
              <div className="space-y-6">
                {userData && (
                  <>
                    {/* Rank Card */}
                    <div className="bg-gradient-to-r from-bright_magenta/20 to-purple-600/20 border border-bright_magenta/30 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">Your Rank</h3>
                          <p className="text-sm text-light_gray_text/70">Beta Leaderboard Position</p>
                        </div>
                        <div className="text-4xl">{getRankBadge(userData.rank).emoji}</div>
                      </div>
                      
                      <div className="flex items-baseline space-x-2">
                        <span className={`text-4xl font-bold ${getRankBadge(userData.rank).color}`}>
                          #{userData.rank}
                        </span>
                        <span className={`text-sm ${getRankBadge(userData.rank).color}`}>
                          {getRankBadge(userData.rank).label}
                        </span>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <Users className="w-5 h-5 text-tech_green mr-2" />
                          <span className="text-sm text-light_gray_text/70">Referrals</span>
                        </div>
                        <div className="text-2xl font-bold text-tech_green">{userData.referralCount}</div>
                      </div>
                      
                      <div className="bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <Trophy className="w-5 h-5 text-purple-400 mr-2" />
                          <span className="text-sm text-light_gray_text/70">Points</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-400">{userData.points}</div>
                      </div>
                      
                      <div className="bg-gradient-to-b from-cyan-400/20 to-transparent border border-cyan-400/30 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <Share2 className="w-5 h-5 text-cyan-400 mr-2" />
                          <span className="text-sm text-light_gray_text/70">Shares</span>
                        </div>
                        <div className="text-2xl font-bold text-cyan-400">{userData.socialShares}</div>
                      </div>
                      
                      <div className="bg-gradient-to-b from-orange-400/20 to-transparent border border-orange-400/30 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <Target className="w-5 h-5 text-orange-400 mr-2" />
                          <span className="text-sm text-light_gray_text/70">Conv. Rate</span>
                        </div>
                        <div className="text-2xl font-bold text-orange-400">{userData.conversionRate}%</div>
                      </div>
                    </div>

                    {/* Referral Link */}
                    <div className="bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Your Referral Link</h3>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <input
                          type="text"
                          value={userData.shareUrl}
                          readOnly
                          className="flex-1 bg-near_black/50 border border-light_purple/30 rounded-lg px-3 py-2 text-sm text-light_gray_text"
                        />
                        <button
                          onClick={copyReferralLink}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            copied 
                              ? 'bg-tech_green/20 text-tech_green border border-tech_green/30' 
                              : 'bg-bright_magenta/20 text-bright_magenta border border-bright_magenta/30 hover:bg-bright_magenta/30'
                          }`}
                        >
                          {copied ? (
                            <>✓ Copied</>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 inline mr-1" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>

                      {/* Social Share Buttons */}
                      <div className="space-y-3">
                        <p className="text-sm text-light_gray_text/70">Share on social media to earn points:</p>
                        
                        <div className="flex space-x-3">
                          <button
                            onClick={() => shareOnPlatform('twitter')}
                            disabled={sharing}
                            className="flex-1 bg-[#1da1f2]/20 hover:bg-[#1da1f2]/30 border border-[#1da1f2]/30 text-[#1da1f2] px-4 py-3 rounded-lg font-medium transition-all disabled:opacity-50"
                          >
                            <ExternalLink className="w-4 h-4 inline mr-2" />
                            Twitter
                          </button>
                          
                          <button
                            onClick={() => shareOnPlatform('linkedin')}
                            disabled={sharing}
                            className="flex-1 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/30 text-[#0077b5] px-4 py-3 rounded-lg font-medium transition-all disabled:opacity-50"
                          >
                            <ExternalLink className="w-4 h-4 inline mr-2" />
                            LinkedIn
                          </button>
                          
                          <button
                            onClick={() => shareOnPlatform('facebook')}
                            disabled={sharing}
                            className="flex-1 bg-[#1877f2]/20 hover:bg-[#1877f2]/30 border border-[#1877f2]/30 text-[#1877f2] px-4 py-3 rounded-lg font-medium transition-all disabled:opacity-50"
                          >
                            <ExternalLink className="w-4 h-4 inline mr-2" />
                            Facebook
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Leaderboard */}
              <div className="bg-gradient-to-b from-deep_purple/30 to-transparent border border-light_purple/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                  Top Referrers
                </h3>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                        userData && entry.rank === userData.rank
                          ? 'bg-bright_magenta/20 border border-bright_magenta/30'
                          : 'bg-near_black/30 hover:bg-near_black/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          entry.rank === 1 ? 'bg-yellow-400/20 text-yellow-400' :
                          entry.rank === 2 ? 'bg-gray-300/20 text-gray-300' :
                          entry.rank === 3 ? 'bg-orange-400/20 text-orange-400' :
                          'bg-light_purple/20 text-light_purple'
                        }`}>
                          {entry.rank}
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium text-white">
                            {userData && entry.email === userData.email ? 'You' : entry.email}
                          </div>
                          <div className="text-xs text-light_gray_text/70">
                            {entry.referralCount} referrals • {entry.conversionRate}% rate
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-400">{entry.points}</div>
                        <div className="text-xs text-light_gray_text/70">points</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {leaderboard.length === 0 && (
                  <div className="text-center py-8 text-light_gray_text/70">
                    <Trophy className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Be the first to start referring!</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Points System Explanation */}
          <div className="mt-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-yellow-400 mb-2">📈 Points System</h4>
            <div className="text-xs text-light_gray_text/70 space-y-1">
              <p>• <span className="text-tech_green">10 points</span> per successful referral</p>
              <p>• <span className="text-purple-400">5 bonus points</span> for every 5th referral milestone</p>
              <p>• <span className="text-bright_magenta">20 bonus points</span> for every 10th referral milestone</p>
              <p>• Rankings update in real-time based on total points and conversion rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralDashboard;
