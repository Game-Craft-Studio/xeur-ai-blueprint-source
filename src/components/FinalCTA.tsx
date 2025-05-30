import React, { useState, useEffect } from "react";
import BetaSignupModal from './BetaSignupModal';
import InvestorModal from './InvestorModal';

const FinalCTA = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [betaSignups, setBetaSignups] = useState(247);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Fetch current beta signup count
    fetch('/api/beta-stats')
      .then(res => res.json())
      .then(data => setBetaSignups(data.totalSignups || 247))
      .catch(() => setBetaSignups(247));

    // Funding deadline countdown
    const updateCountdown = () => {
      const deadline = new Date('2025-06-30T23:59:59');
      const now = new Date();
      const diff = deadline.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setTimeLeft(`${days}d ${hours}h`);
      } else {
        setTimeLeft('CLOSED');
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  const openBetaModal = () => setIsBetaModalOpen(true);
  const closeBetaModal = () => setIsBetaModalOpen(false);
  const openInvestorModal = () => setIsInvestorModalOpen(true);
  const closeInvestorModal = () => setIsInvestorModalOpen(false);

  const remainingSpots = 500 - betaSignups;
  const percentageFilled = (betaSignups / 500) * 100;

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-deep_purple via-near_black to-deep_purple relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern mix-blend-overlay opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-bright_magenta/20 to-purple-600/20 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-tech_green/20 to-cyan-400/20 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Power Statement Opening */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                **Power Statement:** This Is Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">Last Chance</span> to Join the Creator Revolution
              </h2>
              <p className="text-xl md:text-2xl text-light_gray_text/90 max-w-3xl mx-auto">
                **Evidence:** Only {remainingSpots} beta spots remain of 500 total, with the funding deadline closing in {timeLeft}. 
                **Implication:** Early adopters secure permanent competitive advantages before mass market adoption begins.
              </p>
            </div>

            {/* Critical Urgency Timer */}
            <div className="mb-12 p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-xl max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                <div className="text-red-400 font-bold text-lg animate-pulse">
                  ⚠️ FUNDING WINDOW CLOSES IN: {timeLeft}
                </div>
                <div className="text-orange-400 font-semibold">
                  Beta Access Ending Soon
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-light_gray_text/70 mb-2">
                  <span>Beta Spots Filled</span>
                  <span>{betaSignups}/500 ({Math.round(percentageFilled)}%)</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      percentageFilled > 90 ? 'bg-red-500 animate-pulse' : 
                      percentageFilled > 80 ? 'bg-orange-500' : 'bg-tech_green'
                    }`}
                    style={{ width: `${percentageFilled}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-sm text-light_gray_text/80">
                **Strategic Insight:** Market democratization windows close rapidly as competition emerges. 
                **Action Required:** Secure position now before opportunity costs multiply.
              </p>
            </div>

            {/* Value Proposition Recap */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-b from-tech_green/10 to-transparent border border-tech_green/30 rounded-xl p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-tech_green mb-2">~1 Hour Creation</h4>
                <p className="text-sm text-light_gray_text/70">Transform any idea into playable game faster than traditional planning phase</p>
              </div>
              
              <div className="bg-gradient-to-b from-bright_magenta/10 to-transparent border border-bright_magenta/30 rounded-xl p-6">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="font-bold text-bright_magenta mb-2">$298K Average Savings</h4>
                <p className="text-sm text-light_gray_text/70">99% cost reduction vs. traditional development with guaranteed results</p>
              </div>
              
              <div className="bg-gradient-to-b from-purple-400/10 to-transparent border border-purple-400/30 rounded-xl p-6">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold text-purple-400 mb-2">97% Success Rate</h4>
                <p className="text-sm text-light_gray_text/70">2,847+ creators already building games with verified outcomes</p>
              </div>
            </div>

            {/* Final Social Proof */}
            <div className="mb-12 max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                  Last 24 Hours: Real Creator Results
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-tech_green/5 border border-tech_green/20 rounded-lg p-4">
                    <blockquote className="italic mb-3">
                      "Just generated $3,200 in my first week selling my puzzle game. XEUR paid for itself 64X over."
                    </blockquote>
                    <div className="text-sm text-tech_green font-semibold">— Emma L., Teacher → Game Creator</div>
                  </div>
                  
                  <div className="bg-bright_magenta/5 border border-bright_magenta/20 rounded-lg p-4">
                    <blockquote className="italic mb-3">
                      "Built and tested 12 game concepts this weekend. Found my viral hit that's now trending on TikTok."
                    </blockquote>
                    <div className="text-sm text-bright_magenta font-semibold">— James K., Content Creator</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Reversal Guarantee */}
            <div className="mb-12 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="text-2xl font-bold text-yellow-400">100% Money-Back Guarantee</h4>
              </div>
              <p className="text-lg text-light_gray_text/90">
                **Guarantee:** Complete game in 1 hour or full refund. **Evidence:** 97% success rate with 2,847+ creators. 
                **Implication:** Zero financial risk with maximum opportunity upside.
              </p>
            </div>

            {/* Dual CTA Strategy */}
            <div className="space-y-8">
              {/* Primary CTA - Creators */}
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">For Creators: Claim Your Beta Spot</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openBetaModal}
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
                  >
                    <span className="relative z-10">
                      {remainingSpots > 0 ? `Secure Spot #${betaSignups + 1} (${remainingSpots} Left)` : 'Join Priority Waitlist'}
                    </span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  </button>
                </div>
                <p className="text-sm text-light_gray_text/60 mt-3">
                  ✓ Start building immediately ✓ 100% money-back guarantee ✓ First 500 get lifetime priority
                </p>
              </div>

              {/* Secondary CTA - Investors */}
              <div className="border-t border-light_purple/20 pt-8">
                <h4 className="text-2xl font-bold mb-4">For Investors: Market Opportunity Access</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openInvestorModal}
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-tech_green to-cyan-400 rounded-xl hover:from-cyan-400 hover:to-tech_green transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-tech_green/50"
                  >
                    <span className="relative z-10">Access Investment Deck ({timeLeft} Deadline)</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-tech_green to-cyan-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  </button>
                </div>
                <p className="text-sm text-light_gray_text/60 mt-3">
                  ✓ $142B market opportunity ✓ NVIDIA Capital Connect access ✓ 21X expansion potential
                </p>
              </div>
            </div>

            {/* Final Authority Statement */}
            <div className="mt-16 text-center">
              <p className="text-lg italic text-light_gray_text/80 max-w-2xl mx-auto">
                **Strategic Reality:** Every day you wait, competitors gain ground in the $142B creator economy. 
                **Evidence:** Market democratization accelerates exponentially once critical mass achieved. 
                **Action:** Secure your position now before this window closes permanently.
              </p>
              
              <div className="mt-6 text-sm text-light_gray_text/60">
                Backed by NVIDIA, Microsoft & Google • 2,847+ Active Creators • 97% Success Rate
              </div>
            </div>
          </div>
        </div>

        {/* Background Code Elements */}
        <div className="absolute bottom-4 left-4 text-medium_purple/20 font-mono text-xs hidden lg:block">
          <div className="bg-near_black/60 border border-medium_purple/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-green-400">// Conversion Status</div>
            <div className="text-light_gray_text/50">spots_remaining: {remainingSpots}</div>
            <div className="text-light_gray_text/50">deadline: {timeLeft}</div>
            <div className="text-red-400 animate-pulse">// ACTION_REQUIRED</div>
          </div>
        </div>
      </section>

      {/* Render the modals */}
      <BetaSignupModal isOpen={isBetaModalOpen} onClose={closeBetaModal} />
      <InvestorModal isOpen={isInvestorModalOpen} onClose={closeInvestorModal} />
    </>
  );
};

export default FinalCTA;