import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative min-h-screen flex items-center pt-20'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-hero-pattern z-0'></div>
      <div className='absolute inset-0 bg-gradient-to-b from-near_black via-transparent to-near_black z-0'></div>

      {/* Animated Elements */}
      <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-deep_purple/30 blur-3xl animate-pulse-soft z-0'></div>
      <div
        className='absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-medium_purple/20 blur-3xl animate-pulse-soft z-0'
        style={{ animationDelay: '1s' }}
      ></div>

      <div className='container-custom relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* NVIDIA Partnership Badge */}
          <div className='inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium'>
            <div className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></div>
            NVIDIA Inception Member • $2.5M Seed Funded
          </div>

          <h1 className='mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
            The{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-deep_purple animate-pulse-soft'>
              Extinction Event
            </span>{' '}
            for Game Development
          </h1>

          <p className='text-xl md:text-2xl mb-4 text-light_gray_text/90 max-w-3xl mx-auto'>
            Transform any idea into a{' '}
            <span className='text-bright_magenta font-semibold'>
              complete, multi-platform game
            </span>{' '}
            in ~1 hour with simple text prompts.
          </p>

          <p className='text-lg mb-8 text-light_gray_text/70 max-w-2xl mx-auto'>
            Powered by our proprietary LLM trained on{' '}
            <span className='text-bright_magenta font-semibold'>78,000 games</span> + 8
            specialized AI models
          </p>

          {/* Impact Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto'>
            <div className='bg-gradient-to-b from-deep_purple/20 to-transparent border border-deep_purple/30 rounded-lg p-4'>
              <div className='text-2xl font-bold text-bright_magenta'>99%+</div>
              <div className='text-sm text-light_gray_text/70'>Faster Development</div>
            </div>
            <div className='bg-gradient-to-b from-deep_purple/20 to-transparent border border-deep_purple/30 rounded-lg p-4'>
              <div className='text-2xl font-bold text-bright_magenta'>99%+</div>
              <div className='text-sm text-light_gray_text/70'>Cost Reduction</div>
            </div>
            <div className='bg-gradient-to-b from-deep_purple/20 to-transparent border border-deep_purple/30 rounded-lg p-4'>
              <div className='text-2xl font-bold text-bright_magenta'>21X</div>
              <div className='text-sm text-light_gray_text/70'>Market Expansion</div>
            </div>
            <div className='bg-gradient-to-b from-deep_purple/20 to-transparent border border-deep_purple/30 rounded-lg p-4'>
              <div className='text-2xl font-bold text-bright_magenta'>80%+</div>
              <div className='text-sm text-light_gray_text/70'>Completion Rate</div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/Contact'
              className='btn-primary text-center px-8 py-4 text-lg font-semibold'
            >
              Join the Beta • Alpha Starting July 2025
            </Link>
            <Link
              href='/demo'
              className='btn-secondary text-center px-8 py-4 text-lg font-semibold'
            >
              Watch Demo
            </Link>
          </div>

          {/* Founder Quote */}
          <div className='mt-12 max-w-2xl mx-auto'>
            <blockquote className='text-lg italic text-light_gray_text/80 border-l-4 border-bright_magenta pl-6'>
              "We're not just creating another tool – we're triggering an extinction event
              for traditional game development barriers."
            </blockquote>
            <div className='text-right mt-4 text-light_gray_text/60'>
              — Harshit Verma, CEO & Co-Founder
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Code Elements */}
      <div className='absolute bottom-10 left-4 md:left-10 text-medium_purple/40 font-mono text-sm hidden lg:block'>
        <div className='bg-near_black/50 border border-medium_purple/20 rounded-lg p-4 backdrop-blur-sm'>
          <div className='text-green-400'>{'// XEUR.AI LLM Core'}</div>
          <div className='text-blue-400'>{'<xeur>'}</div>
          <div className='pl-4 text-purple-400'>
            {'<models="eureka,galileo,newton,faraday" />'}
          </div>
          <div className='pl-4 text-yellow-400'>
            {'<prompt>Create an epic fantasy RPG</prompt>'}
          </div>
          <div className='pl-4 text-pink-400'>
            {'<output>Complete game in ~1 hour</output>'}
          </div>
          <div className='text-blue-400'>{'</xeur>'}</div>
        </div>
      </div>

      {/* Right side stats */}
      <div className='absolute bottom-10 right-4 md:right-10 text-medium_purple/40 font-mono text-sm hidden lg:block'>
        <div className='bg-near_black/50 border border-medium_purple/20 rounded-lg p-4 backdrop-blur-sm'>
          <div className='text-green-400'>{'// Market Impact'}</div>
          <div className='text-light_gray_text/70'>TAM: $600B+</div>
          <div className='text-light_gray_text/70'>Unrealized: $142B</div>
          <div className='text-light_gray_text/70'>Creators: 590M+</div>
          <div className='text-green-400 mt-2'>{'// Status: FUNDED ✓'}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;