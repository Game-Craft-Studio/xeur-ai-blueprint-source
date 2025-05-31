import React from 'react';

const PlatformStatus = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-deep_purple to-near_black'>
      <div className='container-custom'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Platform{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
              Capabilities
            </span>
          </h2>
          <p className='text-xl text-light_gray_text/80 max-w-3xl mx-auto'>
            Proven technology foundation with clear development roadmap for Series A acceleration.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* Live Alpha Platform */}
          <div className='bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl p-8'>
            <div className='flex items-center mb-6'>
              <div className='w-4 h-4 bg-tech_green rounded-full mr-3 animate-pulse'></div>
              <h3 className='text-2xl font-bold text-tech_green'>Live Alpha Platform</h3>
            </div>
            
            <ul className='space-y-4'>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-tech_green mr-3'>✅</span>
                <span><strong>Unreal Engine Integration</strong> (Proven)</span>
              </li>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-tech_green mr-3'>✅</span>
                <span><strong>OpenAI API Integration</strong> (Functional)</span>
              </li>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-tech_green mr-3'>✅</span>
                <span><strong>Web-Based Development</strong> (Active)</span>
              </li>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-tech_green mr-3'>✅</span>
                <span><strong>AI-Powered Asset Generation</strong></span>
              </li>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-tech_green mr-3'>✅</span>
                <a href="https://www.youtube.com/watch?v=XtI4AndkV24" className='text-tech_green hover:text-cyan-400 transition-colors' target="_blank" rel="noopener noreferrer">
                  <strong>Working Demo Available</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Series A Development Pipeline */}
          <div className='bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl p-8'>
            <div className='flex items-center mb-6'>
              <div className='w-4 h-4 bg-bright_magenta rounded-full mr-3'></div>
              <h3 className='text-2xl font-bold text-bright_magenta'>Series A Development Pipeline</h3>
            </div>
            
            <ul className='space-y-4'>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-bright_magenta mr-3'>🚀</span>
                <span><strong>Proprietary XEUR LLM</strong> (78K game dataset)</span>
              </li>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-bright_magenta mr-3'>🚀</span>
                <span><strong>Eight Specialized AI Models</strong></span>
              </li>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-bright_magenta mr-3'>🚀</span>
                <span><strong>Multi-Platform Export</strong></span>
              </li>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-bright_magenta mr-3'>🚀</span>
                <span><strong>Enterprise API Suite</strong></span>
              </li>
              <li className='flex items-center text-light_gray_text/90'>
                <span className='text-bright_magenta mr-3'>🚀</span>
                <span><strong>Mobile Platform Support</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformStatus;