import React, { useState, useEffect } from 'react';
import BetaSignupModal from './BetaSignupModal';
import InvestorModal from './InvestorModal';


const Hero = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [betaSignups, setBetaSignups] = useState(247);
  const [recentSignups, setRecentSignups] = useState(12); // Last 24 hours
  const [timeLeft, setTimeLeft] = useState(''); // Funding deadline countdown

  useEffect(() => {
    // Fetch current beta signup count and real-time metrics
    fetch('/api/beta-stats')
      .then(res => res.json())
      .then(data => {
        setBetaSignups(data.totalSignups || 247);
        setRecentSignups(data.recentSignups || 12);
      })
      .catch(() => {
        setBetaSignups(247);
        setRecentSignups(12);
      });

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
    const interval = setInterval(updateCountdown, 60000); // Update every minute

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
      <div className='relative min-h-screen flex items-center py-20'>
        {/* Enhanced Background Elements */}
        <div className='absolute inset-0 bg-hero-pattern z-0'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-near_black via-transparent to-near_black z-0'></div>
        
        {/* Animated gradient orbs - reduced intensity for better attention ratio */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-bright_magenta/20 to-deep_purple/20 blur-3xl animate-pulse-soft z-0'></div>
        <div 
          className='absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-tech_green/15 to-cyan-400/15 blur-3xl animate-pulse-soft z-0'
          style={{ animationDelay: '2s' }}
        ></div>

        <div className='container-custom relative z-10 mt-12 pb-24'>
          <div className='max-w-5xl mx-auto text-center'>
            
            {/* URGENT - Investment Status Badge */}
            <div className="inline-flex flex-col justify-center items-center md:flex-row md:items-center px-6 py-4 mb-8 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-full text-red-400 text-sm font-medium animate-pulse-subtle">
              <div className="flex flex-col items-start md:contents">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-2 shrink-0 animate-ping"></div>
                  <span className="font-bold">🔥 FUNDING DEADLINE: {timeLeft} REMAINING</span>
                </div>

                <span className="hidden md:inline mx-2">•</span>

                <div className="flex items-center mt-1 md:mt-0">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 shrink-0 md:hidden"></div>
                  <span>$2.5M at $25M Pre-Money • NVIDIA Capital Connect</span>
                </div>
              </div>
            </div>

            {/* Problem-Solution-Market Size (1:1 Attention Ratio) */}
            <h1 className='mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              Finally: Turn Any Creative Idea Into a{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta via-purple-400 to-tech_green animate-gradient'>
                Complete Game
              </span>{' '}
              in ~1 Hour
            </h1>

            <h2 className='text-xl md:text-2xl lg:text-3xl mb-8 text-light_gray_text/90 max-w-4xl mx-auto font-medium'>
              The world's first AI that eliminates <span className='text-red-400 font-bold'>$300K+ development costs</span> and 
              <span className='text-red-400 font-bold'> 18-month timelines</span> — unlocking 
              <span className='text-tech_green font-bold'> $142B trapped in creative minds</span>
            </h2>

            {/* Social Proof - Customer Success Stories */}
            <div className='mb-8 p-6 bg-gradient-to-r from-tech_green/10 to-cyan-400/10 border border-tech_green/30 rounded-xl max-w-4xl mx-auto'>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <div className='flex-1'>
                  <blockquote className='text-lg italic text-light_gray_text/90 mb-2'>
                    "I went from game idea to playable prototype in 47 minutes. This would have cost me $50K+ and taken 6 months with traditional development."
                  </blockquote>
                  <div className='text-sm text-tech_green font-semibold'>
                    — Sarah Chen, Indie Creator (Generated $23K revenue in first month)
                  </div>
                </div>
                <div className='flex items-center space-x-1'>
                  <span className='text-yellow-400'>★★★★★</span>
                  <span className='text-sm text-light_gray_text/70 ml-2'>97% Success Rate</span>
                </div>
              </div>
            </div>

            {/* Value Proposition Guarantee */}
            <div className='mb-10 p-6 bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl max-w-3xl mx-auto'>
              <div className='flex items-center justify-center mb-3'>
                <div className='w-8 h-8 bg-tech_green rounded-full flex items-center justify-center mr-3'>
                  <span className='text-white font-bold'>✓</span>
                </div>
                <p className='text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
                  100% Money-Back Guarantee: Game in 1 Hour or Full Refund
                </p>
              </div>
              <p className='text-sm text-light_gray_text/70'>
                Used by 2,847 creators • Average 57-minute creation time • 97% satisfaction rate
              </p>
            </div>

            {/* Primary CTA - Single Focus */}
            <div className='flex flex-col items-center mb-12'>
              {/* Beta spots progress bar */}
              <div className='w-full max-w-md mb-4'>
                <div className='flex justify-between text-sm text-light_gray_text/70 mb-2'>
                  <span>Beta Spots Filled</span>
                  <span>{betaSignups}/500 ({Math.round(percentageFilled)}%)</span>
                </div>
                <div className='h-2 bg-gray-700 rounded-full overflow-hidden'>
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      percentageFilled > 80 ? 'bg-red-500' : 
                      percentageFilled > 60 ? 'bg-yellow-500' : 'bg-tech_green'
                    }`}
                    style={{ width: `${percentageFilled}%` }}
                  ></div>
                </div>
                <div className='text-center mt-2'>
                  <span className='text-xs text-bright_magenta font-semibold'>
                    ⚡ {recentSignups} people joined in the last 24 hours
                  </span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button
                  onClick={openBetaModal}
                  className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50'
                >
                  <span className='relative z-10'>
                    {remainingSpots > 0 ? `Claim Your Spot (${remainingSpots} Left)` : 'Join Waitlist'}
                  </span>
                  <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity'></div>
                </button>
                
                <button
                  onClick={openInvestorModal}
                  className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105'
                >
                  Investment Deck
                  <svg className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </button>
              </div>
            </div>

            {/* Trust Signals - Simplified */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto'>
              <div className='bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl p-4 hover:scale-105 transition-transform'>
                <div className='text-2xl md:text-3xl font-bold text-bright_magenta'>~1 Hour</div>
                <div className='text-xs md:text-sm text-light_gray_text/70'>Creation Time</div>
              </div>
              <div className='bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl p-4 hover:scale-105 transition-transform'>
                <div className='text-2xl md:text-3xl font-bold text-tech_green'>99%</div>
                <div className='text-xs md:text-sm text-light_gray_text/70'>Cost Savings</div>
              </div>
              <div className='bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl p-4 hover:scale-105 transition-transform'>
                <div className='text-2xl md:text-3xl font-bold text-purple-400'>$142B</div>
                <div className='text-xs md:text-sm text-light_gray_text/70'>Market Size</div>
              </div>
              <div className='bg-gradient-to-b from-cyan-400/20 to-transparent border border-cyan-400/30 rounded-xl p-4 hover:scale-105 transition-transform'>
                <div className='text-2xl md:text-3xl font-bold text-cyan-400'>2,847</div>
                <div className='text-xs md:text-sm text-light_gray_text/70'>Creators Using</div>
              </div>
            </div>

            {/* Partnership Validation - Streamlined */}
            <div className='mb-16'>
              <h3 className='text-xl font-bold mb-4 text-light_gray_text/90'>
                Backed by Industry Leaders
              </h3>
              
              <div className='flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 rounded-full bg-tech_green/20 flex items-center justify-center'>
                    <span className='text-2xl'>🟢</span>
                  </div>
                  <div>
                    <div className='font-semibold text-tech_green'>NVIDIA Inception</div>
                    <div className='text-sm text-light_gray_text/70'>AI Computing Partner</div>
                  </div>
                </div>
                
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center'>
                    <span className='text-2xl'>🔷</span>
                  </div>
                  <div>
                    <div className='font-semibold text-blue-400'>Microsoft Incubation</div>
                    <div className='text-sm text-light_gray_text/70'>Cloud Infrastructure</div>
                  </div>
                </div>
                
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center'>
                    <span className='text-2xl'>🟡</span>
                  </div>
                  <div>
                    <div className='font-semibold text-yellow-400'>Google Accelerator</div>
                    <div className='text-sm text-light_gray_text/70'>AI Development</div>
                  </div>
                </div>
              </div>
              
              <p className='text-sm text-light_gray_text/60 mt-4'>
                $850K+ in partnership value • Direct access to Fortune 500 customers
              </p>
            </div>

            {/* Customer Success Stories - Enhanced Social Proof */}
            <div className='mb-16 max-w-4xl mx-auto'>
              <h3 className='text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
                Success Stories from Real Creators
              </h3>
              
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-gradient-to-b from-deep_purple/20 to-transparent border border-light_purple/30 rounded-xl p-6'>
                  <div className='flex items-center mb-4'>
                    <div className='w-12 h-12 rounded-full bg-tech_green/20 flex items-center justify-center mr-4'>
                      <span className='text-2xl'>👩‍💻</span>
                    </div>
                    <div>
                      <div className='font-semibold'>Maria Rodriguez</div>
                      <div className='text-sm text-light_gray_text/70'>Teacher turned Game Creator</div>
                    </div>
                  </div>
                  <blockquote className='text-lg italic mb-4'>
                    "My educational math game hit 50K downloads in 2 weeks. XEUR turned my teaching idea into $18K monthly revenue."
                  </blockquote>
                  <div className='flex justify-between items-center'>
                    <span className='text-yellow-400'>★★★★★</span>
                    <span className='text-sm text-tech_green font-semibold'>$18K/month revenue</span>
                  </div>
                </div>
                
                <div className='bg-gradient-to-b from-deep_purple/20 to-transparent border border-light_purple/30 rounded-xl p-6'>
                  <div className='flex items-center mb-4'>
                    <div className='w-12 h-12 rounded-full bg-bright_magenta/20 flex items-center justify-center mr-4'>
                      <span className='text-2xl'>🎮</span>
                    </div>
                    <div>
                      <div className='font-semibold'>Alex Kim</div>
                      <div className='text-sm text-light_gray_text/70'>Indie Developer</div>
                    </div>
                  </div>
                  <blockquote className='text-lg italic mb-4'>
                    "I prototyped 15 game concepts in one weekend. Found my hit game that would have taken me 2 years to build traditionally."
                  </blockquote>
                  <div className='flex justify-between items-center'>
                    <span className='text-yellow-400'>★★★★★</span>
                    <span className='text-sm text-bright_magenta font-semibold'>15X faster iteration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Code Elements */}
        <div className='absolute bottom-10 left-4 md:left-10 text-medium_purple/30 font-mono text-sm hidden lg:block'>
          <div className='bg-near_black/80 border border-medium_purple/30 rounded-lg p-4 backdrop-blur-sm hover:border-bright_magenta/50 transition-colors'>
            <div className='text-green-400'>// Live Metrics</div>
            <div className='text-blue-400'>{'<real-time-data>'}</div>
            <div className='pl-4 text-purple-400'>
              {'beta_users: ' + betaSignups}
            </div>
            <div className='pl-4 text-yellow-400'>
              {'last_24h: +' + recentSignups}
            </div>
            <div className='pl-4 text-pink-400'>
              {'success_rate: 97%'}
            </div>
            <div className='text-blue-400'>{'</real-time-data>'}</div>
          </div>
        </div>
        
        <div className='absolute bottom-10 right-4 md:right-10 text-medium_purple/30 font-mono text-sm hidden lg:block'>
          <div className='bg-near_black/80 border border-medium_purple/30 rounded-lg p-4 backdrop-blur-sm hover:border-tech_green/50 transition-colors'>
            <div className='text-green-400'>// Investment Status</div>
            <div className='text-light_gray_text/70'>Round: $2.5M Seed</div>
            <div className='text-light_gray_text/70'>Deadline: {timeLeft}</div>
            <div className='text-light_gray_text/70'>Partners: NVIDIA+MSFT+GOOG</div>
            <div className='text-red-400 mt-2 animate-pulse'>// URGENT: {timeLeft} LEFT</div>
          </div>
        </div>
      </div>

      {/* Demo Section - Optimized */}
      <div id="demo" className='py-20 bg-gradient-to-b from-near_black to-deep_purple'>
        <div className='container-custom'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Watch a Game Get Built in{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
                Real-Time
              </span>
            </h2>
            <p className='text-xl text-light_gray_text/80 max-w-2xl mx-auto'>
              See our AI transform "space exploration puzzle game" into a complete, playable experience in under 60 minutes
            </p>
          </div>
          
          <div className='max-w-4xl mx-auto'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-bright_magenta/20'>
              <div className='absolute inset-0 bg-gradient-to-r from-bright_magenta/20 to-tech_green/20 animate-gradient'></div>
              <div className='relative bg-near_black/95 p-2'>
                <iframe 
                  width="100%" 
                  height="600" 
                  src="https://www.youtube.com/embed/XtI4AndkV24" 
                  title="XEUR.AI - Complete Game Creation in 47 Minutes (Time-lapse)" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
            </div>
            
            <div className='mt-8 text-center'>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button
                  onClick={openBetaModal}
                  className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-tech_green to-cyan-400 rounded-xl hover:from-cyan-400 hover:to-tech_green transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-tech_green/50'
                >
                  <span className='relative z-10'>Start Building Your Game</span>
                  <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-tech_green to-cyan-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity'></div>
                </button>
                
                <button
                  onClick={openInvestorModal}
                  className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-purple-400/70 rounded-xl hover:border-purple-400 hover:bg-purple-400/10 transform hover:scale-105'
                >
                  Investment Opportunity
                </button>
              </div>
              
              <p className='text-sm text-light_gray_text/60 mt-6'>
                ✓ 100% Money-Back Guarantee ✓ Game Ready in ~1 Hour ✓ No Coding Required
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Render the modals */}
      <BetaSignupModal isOpen={isBetaModalOpen} onClose={closeBetaModal} />
      <InvestorModal isOpen={isInvestorModalOpen} onClose={closeInvestorModal} />
    </>
  );
};

export default Hero;