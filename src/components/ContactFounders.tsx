import React from 'react';

const ContactFounders = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-near_black to-deep_purple'>
      <div className='container-custom'>
        <div className='bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-bright_magenta/30 rounded-3xl p-12'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Direct Founder{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
                Access
              </span>
            </h2>
            <p className='text-xl text-light_gray_text/80 max-w-2xl mx-auto'>
              No gatekeepers. No sales teams. Just founders who make decisions.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12'>
            {/* Harshit Verma */}
            <div className='bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300'>
              <div className='w-20 h-20 rounded-full bg-gradient-to-r from-bright_magenta to-purple-600 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6'>H</div>
              <h3 className='text-2xl font-bold text-bright_magenta mb-2'>Harshit Verma</h3>
              <p className='text-light_gray_text/80 mb-6'>Co-Founder & Technical Lead</p>
              
              <div className='flex gap-4 justify-center'>
                <a 
                  href="mailto:harshit@cpgplay.com"
                  className='px-6 py-3 bg-bright_magenta/20 border border-bright_magenta/40 rounded-lg text-bright_magenta hover:bg-bright_magenta/30 transition-colors'
                >
                  Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/indiahv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='px-6 py-3 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors'
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Rishav Goyal */}
            <div className='bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300'>
              <div className='w-20 h-20 rounded-full bg-gradient-to-r from-tech_green to-cyan-400 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6'>R</div>
              <h3 className='text-2xl font-bold text-tech_green mb-2'>Rishav Goyal</h3>
              <p className='text-light_gray_text/80 mb-6'>Co-Founder & Business Development</p>
              
              <div className='flex gap-4 justify-center'>
                <a 
                  href="mailto:rishav@cpgplay.com"
                  className='px-6 py-3 bg-tech_green/20 border border-tech_green/40 rounded-lg text-tech_green hover:bg-tech_green/30 transition-colors'
                >
                  Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/bunnygoyal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='px-6 py-3 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors'
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className='text-center border-t border-bright_magenta/20 pt-8'>
            <div className='grid md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
              <div>
                <h4 className='text-lg font-bold text-light_gray_text mb-3'>Platform Access</h4>
                <div className='space-y-2'>
                  <a 
                    href="https://www.youtube.com/watch?v=XtI4AndkV24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='block text-tech_green hover:text-cyan-400 transition-colors'
                  >
                    🎬 YouTube Demo
                  </a>
                  <a 
                    href="https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='block text-purple-400 hover:text-bright_magenta transition-colors'
                  >
                    💻 GitHub Repository
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className='text-lg font-bold text-light_gray_text mb-3'>Company Information</h4>
                <div className='text-light_gray_text/70 text-sm space-y-1'>
                  <p><strong>XEUR.AI by CPG Play</strong></p>
                  <p>NETCO Office Space, PK 28, Block L-4</p>
                  <p>Neechi Mangali, Ludhiana, Punjab - 141123, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFounders;