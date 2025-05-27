import React, { useEffect, useState } from 'react';

interface BetaSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaSignupModal: React.FC<BetaSignupModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Reset form when modal is opened after a submission
    if (isOpen) {
      setSubmitted(false);
      setEmail('');
      setSubscribe(true);
    }
  }, [isOpen]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Log form submission for now (in production, this would integrate with your backend)
    console.log('Beta signup submitted:', { 
      email, 
      subscribe, 
      timestamp: new Date().toISOString(),
      source: 'website-beta-modal' 
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 bg-near_black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out'
      onClick={onClose} // Close if overlay is clicked
    >
      <div
        className='bg-gradient-to-br from-near_black to-deep_purple/30 border border-medium_purple/30 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 ease-in-out scale-100'
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green'>
            Join the XEUR.AI Beta Launch
          </h2>
          <button
            onClick={onClose}
            className='text-light_gray_text/70 hover:text-bright_magenta transition-colors text-2xl'
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <div className='text-center py-6'>
            <div className='text-6xl mb-4'>🚀</div>
            <div className='text-green-400 text-2xl mb-2 font-bold'>Welcome to the Revolution!</div>
            <p className='text-light_gray_text/80 mb-4'>
              You're now in line for early access to XEUR.AI. We'll notify you as soon as beta spots become available.
            </p>
            <div className='bg-gradient-to-r from-tech_green/20 to-bright_magenta/20 rounded-lg p-4 border border-tech_green/30'>
              <p className='text-sm text-light_gray_text/70'>
                Expected Beta Launch: <span className='text-tech_green font-semibold'>Q3 2025</span>
              </p>
            </div>
            <button
              onClick={onClose}
              className='mt-6 px-6 py-2 bg-gradient-to-r from-bright_magenta to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300'
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <>
            <div className='mb-6'>
              <div className='bg-gradient-to-r from-bright_magenta/20 to-tech_green/20 rounded-lg p-4 border border-bright_magenta/30 mb-6'>
                <div className='text-center'>
                  <h3 className='text-lg font-semibold text-bright_magenta mb-2'>Be Among the First</h3>
                  <p className='text-sm text-light_gray_text/80'>
                    Get exclusive early access to the world's first AI that creates complete games from text prompts
                  </p>
                </div>
              </div>
              
              <div className='grid grid-cols-2 gap-4 mb-6'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-tech_green'>~1 Hour</div>
                  <div className='text-xs text-light_gray_text/70'>Game Creation</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-bright_magenta'>78K+</div>
                  <div className='text-xs text-light_gray_text/70'>Games Trained</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-light_gray_text/80 mb-2'
                >
                  Email for Early Access
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='your@email.com'
                  className='w-full px-4 py-3 bg-deep_purple/20 border border-medium_purple/50 rounded-lg text-light_gray_text placeholder-light_gray_text/50 focus:ring-2 focus:ring-bright_magenta focus:border-bright_magenta outline-none transition-all'
                />
              </div>

              <div className='mb-6'>
                <label className='flex items-start text-light_gray_text/80'>
                  <input
                    type='checkbox'
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className='h-5 w-5 rounded border-medium_purple/50 bg-deep_purple/20 text-bright_magenta focus:ring-bright_magenta mr-3 mt-0.5 accent-bright_magenta'
                  />
                  <span className='text-sm'>
                    Get updates on development progress, new features, and funding milestones
                  </span>
                </label>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-bright_magenta to-purple-600 hover:from-purple-600 hover:to-bright_magenta text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transform hover:scale-105 shadow-lg'
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining Beta...
                  </>
                ) : (
                  'Join Beta Launch 🚀'
                )}
              </button>
            </form>

            <div className='mt-6 space-y-2'>
              <p className="text-xs text-light_gray_text/50 text-center">
                🔥 Limited beta spots available • Expected launch Q3 2025
              </p>
              <div className='flex items-center justify-center space-x-4 text-xs text-light_gray_text/50'>
                <span>✅ No credit card required</span>
                <span>✅ Cancel anytime</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BetaSignupModal;