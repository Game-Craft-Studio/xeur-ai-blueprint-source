import React from 'react';

const PartnershipValidation = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-near_black to-deep_purple'>
      <div className='container-custom'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Triple Giant{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
              Validation
            </span>
          </h2>
          <p className='text-xl text-light_gray_text/80 max-w-3xl mx-auto'>
            When Microsoft, NVIDIA, and Google all choose your startup independently - that's not luck, that's inevitability.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {/* Microsoft for Startups */}
          <div className='bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300'>
            <div className='w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6'>M</div>
            <h3 className='text-2xl font-bold text-blue-400 mb-4'>Microsoft for Startups</h3>
            <p className='text-light_gray_text/80 mb-4'>
              <strong>What It Means:</strong> Microsoft bet on our infrastructure before we had paying customers.
            </p>
            <p className='text-light_gray_text/70 text-sm'>
              <strong>The Signal:</strong> When Microsoft backs your infrastructure play, that's institutional validation.
            </p>
          </div>

          {/* NVIDIA Inception */}
          <div className='bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300'>
            <div className='w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6'>N</div>
            <h3 className='text-2xl font-bold text-tech_green mb-4'>NVIDIA Inception</h3>
            <p className='text-light_gray_text/80 mb-4'>
              <strong>What It Means:</strong> NVIDIA sees us as the future of AI-powered creation.
            </p>
            <p className='text-light_gray_text/70 text-sm'>
              <strong>The Signal:</strong> NVIDIA doesn't approve random startups - they approve the ones that scale.
            </p>
          </div>

          {/* Google for Startups */}
          <div className='bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300'>
            <div className='w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6'>G</div>
            <h3 className='text-2xl font-bold text-bright_magenta mb-4'>Google for Startups</h3>
            <p className='text-light_gray_text/80 mb-4'>
              <strong>What It Means:</strong> Google graduated us from their exclusive accelerator program.
            </p>
            <p className='text-light_gray_text/70 text-sm'>
              <strong>The Signal:</strong> Google's algorithm picked us out of thousands.
            </p>
          </div>
        </div>

        <div className='text-center mt-12'>
          <p className='text-light_gray_text/60 italic text-lg'>
            When three tech giants independently validate your startup, that's not partnership - that's prophecy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnershipValidation;