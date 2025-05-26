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
    // Simulate API call
    console.log('Form submitted:', { email, subscribe });
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    setIsSubmitting(false);
    setSubmitted(true);
    // Optionally close modal after a delay or let user close it
    // setTimeout(onClose, 2000);
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
        className='bg-gradient-to-br from-near_black to-deep_purple/30 border border-medium_purple/30 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-in-out scale-100'
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-semibold text-light_gray_text'>
            Join the Beta Program
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
          <div className='text-center py-4'>
            <div className='text-green-400 text-xl mb-2'>Thank You!</div>
            <p className='text-light_gray_text/80'>We've received your request. We'll be in touch soon!</p>
          </div>
        ) : (
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
                placeholder='you@example.com'
                className='w-full px-4 py-3 bg-deep_purple/20 border border-medium_purple/50 rounded-lg text-light_gray_text placeholder-light_gray_text/50 focus:ring-2 focus:ring-bright_magenta focus:border-bright_magenta outline-none transition-all'
              />
            </div>

            <div className='mb-8'>
              <label className='flex items-center text-light_gray_text/80'>
                <input
                  type='checkbox'
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                  className='h-5 w-5 rounded border-medium_purple/50 bg-deep_purple/20 text-bright_magenta focus:ring-bright_magenta mr-3 accent-bright_magenta'
                />
                Subscribe for updates and news
              </label>
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-bright_magenta hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Get Early Access'
              )}
            </button>
          </form>
        )}
         <p className="text-xs text-light_gray_text/50 mt-4 text-center">
            Alpha starting July 2025. We respect your privacy.
          </p>
      </div>
    </div>
  );
};

export default BetaSignupModal;