import React, { useState } from 'react';
import BetaSignupModal from './BetaSignupModal';
import Link from 'next/link';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            {/* Updated Status Badge */}
            <div className='inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium animate-pulse'>
              <div className='w-2 h-2 bg-yellow-400 rounded-full mr-2'></div>
              NVIDIA Inception Member • Raising $2.5M Seed
            </div>

            <h1 className='mb-10 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight'>
              The{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta via-purple-400 to-tech_green animate-gradient'>
                Extinction Event
              </span>{' '}
              for Game Development
            </h1>

            <p className='text-xl md:text-2xl lg:text-3xl mb-6 text-light_gray_text/90 max-w-4xl mx-auto'>
              Transform any idea into a{' '}
              <span className='text-bright_magenta font-semibold'>
                complete, multi-platform game
              </span>{' '}
              in ~1 hour using just natural language.
            </p>

            <p className='text-lg md:text-xl mb-10 text-light_gray_text/70 max-w-3xl mx-auto'>
              Powered by our proprietary LLM trained on{' '}
              <span className='text-tech_green font-semibold'>78,000 games</span> + 8
              specialized AI models that handle everything from ideation to deployment
            </p>

            {/* Enhanced Metrics Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto'>
              <div className='bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl p-6 hover:scale-105 transition-transform'>
                <div className='text-3xl md:text-4xl font-bold text-bright_magenta'>99%+</div>
                <div className='text-sm md:text-base text-light_gray_text/70'>Faster Development</div>
              </div>
              <div className='bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl p-6 hover:scale-105 transition-transform'>
                <div className='text-3xl md:text-4xl font-bold text-tech_green'>99%+</div>
                <div className='text-sm md:text-base text-light_gray_text/70'>Cost Reduction</div>
              </div>
              <div className='bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl p-6 hover:scale-105 transition-transform'>
                <div className='text-3xl md:text-4xl font-bold text-purple-400'>21X</div>
                <div className='text-sm md:text-base text-light_gray_text/70'>Market Expansion</div>
              </div>
              <div className='bg-gradient-to-b from-cyan-400/20 to-transparent border border-cyan-400/30 rounded-xl p-6 hover:scale-105 transition-transform'>
                <div className='text-3xl md:text-4xl font-bold text-cyan-400'>80%+</div>
                <div className='text-sm md:text-base text-light_gray_text/70'>Completion Rate</div>
              </div>
            </div>

            {/* Main CTAs */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <button
                onClick={openModal}
                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50'
              >
                <span className='relative z-10'>Join Beta Launch</span>
                <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity'></div>
              </button>
              <Link
                href='#demo'
                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105'
              >
                Watch Demo
                <svg className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </Link>
            </div>

            {/* Platform Showcase */}
            <div className='mb-16'>
              <div className='relative rounded-2xl overflow-hidden border border-medium_purple/30 bg-gradient-to-b from-deep_purple/20 to-transparent p-1'>
                <div className='absolute inset-0 bg-gradient-to-r from-bright_magenta/20 via-purple-400/20 to-tech_green/20 animate-gradient opacity-50'></div>
                <div className='relative bg-near_black/90 rounded-xl p-8'>
                  <h3 className='text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
                    See XEUR.AI in Action
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='text-center'>
                      <div className='text-4xl mb-3'>💬</div>
                      <h4 className='font-semibold mb-2'>Describe Your Game</h4>
                      <p className='text-sm text-light_gray_text/70'>"Create an epic fantasy RPG with dragons and magic"</p>
                    </div>
                    <div className='text-center'>
                      <div className='text-4xl mb-3'>🤖</div>
                      <h4 className='font-semibold mb-2'>AI Creates Everything</h4>
                      <p className='text-sm text-light_gray_text/70'>8 specialized models generate complete game assets</p>
                    </div>
                    <div className='text-center'>
                      <div className='text-4xl mb-3'>🎮</div>
                      <h4 className='font-semibold mb-2'>Deploy Anywhere</h4>
                      <p className='text-sm text-light_gray_text/70'>Export to PC, Mobile, Web, or Web3 platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Quote */}
            <div className='max-w-3xl mx-auto'>
              <blockquote className='text-lg md:text-xl italic text-light_gray_text/80 border-l-4 border-bright_magenta pl-6'>
                "We're not just creating another tool – we're triggering an extinction event
                for traditional game development barriers. XEUR.AI democratizes creativity itself."
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
            <div className='text-green-400'>// XEUR.AI LLM Core v2.0</div>
            <div className='text-blue-400'>{'<xeur-engine>'}</div>
            <div className='pl-4 text-purple-400'>
              {'<models="eureka,galileo,newton,faraday" />'}
            </div>
            <div className='pl-4 text-yellow-400'>
              {'<prompt>Create an epic fantasy RPG</prompt>'}
            </div>
            <div className='pl-4 text-pink-400'>
              {'<output>Complete game in ~1 hour</output>'}
            </div>
            <div className='text-blue-400'>{'</xeur-engine>'}</div>
          </div>
        </div>
        <div className='absolute bottom-10 right-4 md:right-10 text-medium_purple/40 font-mono text-sm hidden lg:block'>
          <div className='bg-near_black/80 border border-medium_purple/30 rounded-lg p-4 backdrop-blur-sm hover:border-tech_green/50 transition-colors'>
            <div className='text-green-400'>// Market Impact</div>
            <div className='text-light_gray_text/70'>TAM: $600B+</div>
            <div className='text-light_gray_text/70'>Opportunity: $142B</div>
            <div className='text-light_gray_text/70'>Creators: 590M+</div>
            <div className='text-green-400 mt-2'>// Status: ACTIVE ✓</div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className='py-20 bg-gradient-to-b from-near_black to-deep_purple'>
        <div className='container-custom'>
          <h2 className='text-4xl md:text-6xl font-bold text-center mb-12'>
            Experience the <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>Revolution</span>
          </h2>
          <div className='max-w-4xl mx-auto'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-bright_magenta/20'>
              <div className='absolute inset-0 bg-gradient-to-r from-bright_magenta/20 to-tech_green/20 animate-gradient'></div>
              <div className='relative bg-near_black/95 p-2'>
                <iframe 
                  width="100%" 
                  height="600" 
                  src="https://www.youtube.com/embed/XtI4AndkV24" 
                  title="XEUR.AI Demo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className='rounded-xl'
                ></iframe>
              </div>
            </div>
            <div className='mt-8 text-center'>
              <button
                onClick={openModal}
                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-tech_green to-cyan-400 rounded-xl hover:from-cyan-400 hover:to-tech_green transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-tech_green/50'
              >
                <span className='relative z-10'>Get Early Access</span>
                <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-tech_green to-cyan-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity'></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal */}
      <BetaSignupModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Hero;