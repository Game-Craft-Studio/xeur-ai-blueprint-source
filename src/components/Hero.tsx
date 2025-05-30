import React, { useState, useEffect } from 'react';
import BetaSignupModal from './BetaSignupModal';
import InvestorModal from './InvestorModal';
import Link from 'next/link';

const Hero = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [betaSignups, setBetaSignups] = useState(247); // Will be dynamic

  useEffect(() => {
    // Fetch current beta signup count
    fetch('/api/beta-stats')
      .then(res => res.json())
      .then(data => setBetaSignups(data.totalSignups || 247))
      .catch(() => setBetaSignups(247)); // Fallback
  }, []);

  const openBetaModal = () => setIsBetaModalOpen(true);
  const closeBetaModal = () => setIsBetaModalOpen(false);
  const openInvestorModal = () => setIsInvestorModalOpen(true);
  const closeInvestorModal = () => setIsInvestorModalOpen(false);

  return (
    <>
      <div className='relative min-h-screen flex items-center py-20'>
        {/* Enhanced Background Elements */}
        <div className='absolute inset-0 bg-hero-pattern z-0'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-near_black via-transparent to-near_black z-0'></div>
        
        {/* Animated gradient orbs */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-bright_magenta/30 to-deep_purple/30 blur-3xl animate-pulse-soft z-0'></div>
        <div 
          className='absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-tech_green/20 to-cyan-400/20 blur-3xl animate-pulse-soft z-0'
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl animate-pulse-soft z-0'
          style={{ animationDelay: '1s' }}
        ></div>

        <div className='container-custom relative z-10 mt-12 pb-24'>
          <div className='max-w-5xl mx-auto text-center'>
            {/* Investor-Focused Status Badge */}
            <div className="inline-flex flex-col justify-center items-center md:flex-row md:items-center px-6 py-4 mb-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium leading-tight md:leading-normal">
              <div className="flex flex-col items-start md:contents">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 shrink-0"></div>
                  <span className="font-semibold">NVIDIA Inception Member</span>
                </div>

                <span className="hidden md:inline mx-2">•</span>

                <div className="flex items-center mt-1 md:mt-0">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 shrink-0 md:hidden"></div>
                  <span>Raising $2.5M at $25M Pre-Money</span>
                </div>
                
                <span className="hidden md:inline mx-2">•</span>
                
                <div className="flex items-center mt-1 md:mt-0">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 shrink-0 md:hidden"></div>
                  <span className="font-semibold">Round Closes June 30</span>
                </div>
              </div>
            </div>

            {/* Main Value Proposition - Investor Focused */}
            <h1 className='mb-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              Unlock{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta via-purple-400 to-tech_green animate-gradient'>
                $142 Billion
              </span>{' '}
              in Trapped Game Ideas
            </h1>

            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-6 text-light_gray_text/90 max-w-4xl mx-auto font-semibold'>
              Turn 590M+ Creators Into Game Developers in{' '}
              <span className='text-tech_green font-bold'>~1 Hour</span>
            </h2>

            {/* Problem Statement */}
            <div className='mb-8 max-w-4xl mx-auto'>
              <p className='text-lg md:text-xl mb-4 text-light_gray_text/80'>
                The gaming industry loses <span className='text-bright_magenta font-semibold'>$142B annually</span> because only 28M developers can build games. 
                590M+ people have brilliant ideas trapped by <span className='text-tech_green font-semibold'>$300K+ development costs</span> and 18-month timelines.
              </p>
              
              <p className='text-lg md:text-xl text-light_gray_text/80'>
                XEUR.AI eliminates this market dysfunction through proprietary AI trained on{' '}
                <span className='text-purple-400 font-semibold'>78,000 games</span>, enabling complete game creation 
                in ~1 hour with <span className='text-bright_magenta font-semibold'>99% cost reduction</span>.
              </p>
            </div>

            {/* Value Proposition */}
            <div className='mb-10 p-6 bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl max-w-3xl mx-auto'>
              <p className='text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
                This creates a 21X market expansion opportunity validated by NVIDIA, Microsoft, and Google
              </p>
            </div>

            {/* Primary CTAs - Investor Priority */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <button
                onClick={openInvestorModal}
                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50'
              >
                <span className='relative z-10'>Request Investment Deck</span>
                <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity'></div>
              </button>
              
              <button
                onClick={openBetaModal}
                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105'
              >
                Join Beta ({betaSignups}/500 spots)
                <svg className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </button>
            </div>

            {/* Market Metrics Grid - Investor Focused */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto'>
              <div className='bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl p-6 hover:scale-105 transition-transform'>
                <div className='text-3xl md:text-4xl font-bold text-bright_magenta'>$142B</div>
                <div className='text-sm md:text-base text-light_gray_text/70'>Annual Lost Value</div>
              </div>
              <div className='bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl p-6 hover:scale-105 transition-transform'>
                <div className='text-3xl md:text-4xl font-bold text-tech_green'>21X</div>
                <div className='text-sm md:text-base text-light_gray_text/70'>Market Expansion</div>
              </div>
              <div className='bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl p-6 hover:scale-105 transition-transform'>
                <div className='text-3xl md:text-4xl font-bold text-purple-400'>99%</div>
                <div className='text-sm md:text-base text-light_gray_text/70'>Cost Reduction</div>
              </div>
              <div className='bg-gradient-to-b from-cyan-400/20 to-transparent border border-cyan-400/30 rounded-xl p-6 hover:scale-105 transition-transform'>
                <div className='text-3xl md:text-4xl font-bold text-cyan-400'>~1 Hour</div>
                <div className='text-sm md:text-base text-light_gray_text/70'>Creation Time</div>
              </div>
            </div>

            {/* Partnership Validation */}
            <div className='mb-16'>
              <h3 className='text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
                Validated by Industry Leaders
              </h3>
              <p className='text-lg text-light_gray_text/70 mb-8'>
                $850K+ in partnership value demonstrates massive market potential
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
                <div className='bg-gradient-to-b from-tech_green/10 to-transparent border border-tech_green/30 rounded-xl p-6'>
                  <div className='text-4xl mb-3'>🟢</div>
                  <h4 className='font-semibold mb-2 text-tech_green'>NVIDIA Inception</h4>
                  <p className='text-sm text-light_gray_text/70 mb-2'>Capital Connect VC access</p>
                  <p className='text-xs text-tech_green font-semibold'>$100K+ DGX Credits</p>
                </div>
                
                <div className='bg-gradient-to-b from-blue-400/10 to-transparent border border-blue-400/30 rounded-xl p-6'>
                  <div className='text-4xl mb-3'>🔷</div>
                  <h4 className='font-semibold mb-2 text-blue-400'>Microsoft Incubation</h4>
                  <p className='text-sm text-light_gray_text/70 mb-2'>Enterprise customer access</p>
                  <p className='text-xs text-blue-400 font-semibold'>$150K+ Azure Credits</p>
                </div>
                
                <div className='bg-gradient-to-b from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-xl p-6'>
                  <div className='text-4xl mb-3'>🟡</div>
                  <h4 className='font-semibold mb-2 text-yellow-400'>Google Accelerator</h4>
                  <p className='text-sm text-light_gray_text/70 mb-2'>AI/ML infrastructure support</p>
                  <p className='text-xs text-yellow-400 font-semibold'>$200K+ GCP Credits</p>
                </div>
              </div>
            </div>

            {/* Founder Quote - Credibility */}
            <div className='max-w-3xl mx-auto'>
              <blockquote className='text-lg md:text-xl italic text-light_gray_text/80 border-l-4 border-bright_magenta pl-6'>
                "We're creating a 21X market expansion by eliminating the technical barriers 
                that trap 590M+ creative minds. The AI democratization wave starts with gaming."
              </blockquote>
              <div className='text-right mt-4 text-light_gray_text/60'>
                — Harshit Verma, CEO & Co-Founder
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Code Elements */}
        <div className='absolute bottom-10 left-4 md:left-10 text-medium_purple/40 font-mono text-sm hidden lg:block'>
          <div className='bg-near_black/80 border border-medium_purple/30 rounded-lg p-4 backdrop-blur-sm hover:border-bright_magenta/50 transition-colors'>
            <div className='text-green-400'>// Market Dynamics</div>
            <div className='text-blue-400'>{'<market-dysfunction>'}</div>
            <div className='pl-4 text-purple-400'>
              {'creators: 590M+'}
            </div>
            <div className='pl-4 text-yellow-400'>
              {'developers: 28M'}
            </div>
            <div className='pl-4 text-pink-400'>
              {'lost_value: $142B/year'}
            </div>
            <div className='text-blue-400'>{'</market-dysfunction>'}</div>
          </div>
        </div>
        <div className='absolute bottom-10 right-4 md:right-10 text-medium_purple/40 font-mono text-sm hidden lg:block'>
          <div className='bg-near_black/80 border border-medium_purple/30 rounded-lg p-4 backdrop-blur-sm hover:border-tech_green/50 transition-colors'>
            <div className='text-green-400'>// Investment Metrics</div>
            <div className='text-light_gray_text/70'>Round: $2.5M Seed</div>
            <div className='text-light_gray_text/70'>Valuation: $25M Pre</div>
            <div className='text-light_gray_text/70'>Partners: NVIDIA + MSFT + GOOG</div>
            <div className='text-green-400 mt-2'>// Status: RAISING 🚀</div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className='py-20 bg-gradient-to-b from-near_black to-deep_purple'>
        <div className='container-custom'>
          <h2 className='text-4xl md:text-6xl font-bold text-center mb-12'>
            See the <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>Technology</span> in Action
          </h2>
          <div className='max-w-4xl mx-auto'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-bright_magenta/20'>
              <div className='absolute inset-0 bg-gradient-to-r from-bright_magenta/20 to-tech_green/20 animate-gradient'></div>
              <div className='relative bg-near_black/95 p-2'>
                <iframe 
                  width="100%" 
                  height="600" 
                  src="https://www.youtube.com/embed/XtI4AndkV24" 
                  title="XEUR.AI Platform Demo - Complete Game Creation in ~1 Hour" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
            </div>
            <div className='mt-8 text-center'>
              <p className='text-lg text-light_gray_text/80 mb-6 max-w-2xl mx-auto'>
                Watch our AI transform a simple text prompt into a complete, playable game. 
                This is the future of content creation.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button
                  onClick={openInvestorModal}
                  className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-tech_green to-cyan-400 rounded-xl hover:from-cyan-400 hover:to-tech_green transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-tech_green/50'
                >
                  <span className='relative z-10'>Discuss Investment</span>
                  <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-tech_green to-cyan-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity'></div>
                </button>
                
                <button
                  onClick={openBetaModal}
                  className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-purple-400/70 rounded-xl hover:border-purple-400 hover:bg-purple-400/10 transform hover:scale-105'
                >
                  Try Beta Access
                </button>
              </div>
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
