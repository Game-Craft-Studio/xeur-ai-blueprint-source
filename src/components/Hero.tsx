import React, { useState } from 'react';
import BetaSignupModal from './BetaSignupModal';
import InvestorModal from './InvestorModal';

const Hero = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);

  const closeBetaModal = () => setIsBetaModalOpen(false);
  const closeInvestorModal = () => setIsInvestorModalOpen(false);

  return (
    <>
      <div className='relative min-h-screen flex items-center py-20'>
        {/* Background Elements */}
        <div className='absolute inset-0 bg-gradient-to-b from-near_black via-transparent to-near_black z-0'></div>
        
        {/* Subtle gradient orbs */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-bright_magenta/10 to-deep_purple/10 blur-3xl animate-pulse-soft z-0'></div>
        <div 
          className='absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-tech_green/8 to-cyan-400/8 blur-3xl animate-pulse-soft z-0'
          style={{ animationDelay: '2s' }}
        ></div>

        <div className='container-custom relative z-10 mt-12 pb-24'>
          <div className='max-w-5xl mx-auto text-center'>
            
            {/* Partnership Validation Badge */}
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-tech_green/20 to-cyan-400/20 border border-tech_green/40 rounded-full text-tech_green text-sm font-medium">
              <div className="w-2 h-2 bg-tech_green rounded-full mr-2 animate-pulse"></div>
              <span>Validated by Microsoft, NVIDIA & Google</span>
            </div>

            {/* Hero Headline */}
            <h1 className='mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta via-purple-400 to-tech_green animate-gradient'>
                Turn Words Into Worlds.
              </span>
            </h1>

            <h2 className='text-xl md:text-2xl lg:text-3xl mb-8 text-light_gray_text/90 max-w-4xl mx-auto font-medium'>
              AI-Powered Game Development Platform - Alpha Access
            </h2>

            <p className='text-lg md:text-xl mb-12 text-light_gray_text/80 max-w-3xl mx-auto'>
              From creative vision to playable game. Powered by Unreal Engine + Advanced AI Integration. 
              Direct founder access for qualified prospects.
            </p>

            {/* Primary CTAs */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <a
                href="https://www.youtube.com/watch?v=XtI4AndkV24"
                target="_blank"
                rel="noopener noreferrer"
                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50'
              >
                🎬 Watch Platform Demo
              </a>
              
              <a
                href="mailto:harshit@cpgplay.com"
                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105'
              >
                🚀 Request Alpha Access
              </a>
            </div>

            {/* Partnership Badges */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 opacity-80'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm'>M</div>
                <span className='text-light_gray_text/70'>Microsoft for Startups</span>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-sm'>N</div>
                <span className='text-light_gray_text/70'>NVIDIA Inception</span>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm'>G</div>
                <span className='text-light_gray_text/70'>Google for Startups</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className='py-20 bg-gradient-to-b from-near_black to-deep_purple'>
        <div className='container-custom'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Platform{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
                Demonstration
              </span>
            </h2>
            <p className='text-xl text-light_gray_text/80 max-w-2xl mx-auto'>
              See our alpha platform in action - real technology, real results
            </p>
          </div>
          
          <div className='max-w-4xl mx-auto'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-bright_magenta/20'>
              <div className='absolute inset-0 bg-gradient-to-r from-bright_magenta/20 to-tech_green/20'></div>
              <div className='relative bg-near_black/95 p-2'>
                <iframe 
                  width="100%" 
                  height="600" 
                  src="https://www.youtube.com/embed/XtI4AndkV24" 
                  title="XEUR.AI Platform Demo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BetaSignupModal isOpen={isBetaModalOpen} onClose={closeBetaModal} />
      <InvestorModal isOpen={isInvestorModalOpen} onClose={closeInvestorModal} />
    </>
  );
};

export default Hero;