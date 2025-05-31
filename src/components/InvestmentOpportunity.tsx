import React from 'react';

const InvestmentOpportunity = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-deep_purple to-near_black'>
      <div className='container-custom'>
        <div className='bg-gradient-to-r from-bright_magenta/10 to-tech_green/10 border border-bright_magenta/30 rounded-3xl p-12'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              The First-Mover{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
                Advantage
              </span>
            </h2>
            <p className='text-xl text-light_gray_text/80 max-w-3xl mx-auto'>
              AI + Creator Economy convergence happens once. Platform plays are winner-take-all. 
              We have working technology while competitors chase our lead.
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-6 mb-12'>
            <div className='text-center p-6 bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300'>
              <div className='text-4xl font-bold text-blue-400 mb-2'>$184B</div>
              <div className='text-light_gray_text/70 text-sm'>Gaming Industry<br/>(We're capturing the creation layer)</div>
            </div>
            
            <div className='text-center p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300'>
              <div className='text-4xl font-bold text-tech_green mb-2'>590M+</div>
              <div className='text-light_gray_text/70 text-sm'>Content Creators<br/>(Desperate for our solution)</div>
            </div>
            
            <div className='text-center p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300'>
              <div className='text-4xl font-bold text-bright_magenta mb-2'>18+</div>
              <div className='text-light_gray_text/70 text-sm'>Month Lead Time<br/>(First-mover advantage)</div>
            </div>
            
            <div className='text-center p-6 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300'>
              <div className='text-4xl font-bold text-purple-400 mb-2'>$850K+</div>
              <div className='text-light_gray_text/70 text-sm'>Partnership Value<br/>(Giants betting on success)</div>
            </div>
          </div>

          <div className='text-center'>
            <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left'>
              <div>
                <h4 className='text-xl font-bold text-bright_magenta mb-3'>🎯 Market Reality</h4>
                <p className='text-light_gray_text/80 text-sm'>
                  Winner takes all in platform plays. The first working solution captures the entire market.
                </p>
              </div>
              
              <div>
                <h4 className='text-xl font-bold text-tech_green mb-3'>⚡ Timing Advantage</h4>
                <p className='text-light_gray_text/80 text-sm'>
                  AI breakthrough + creator economy boom = perfect storm. This window won't stay open.
                </p>
              </div>
              
              <div>
                <h4 className='text-xl font-bold text-purple-400 mb-3'>🚀 Competitive Moat</h4>
                <p className='text-light_gray_text/80 text-sm'>
                  Working technology + giant partnerships + 18-month head start = uncatchable advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunity;