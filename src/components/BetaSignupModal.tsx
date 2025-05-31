import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface BetaSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaSignupModal: React.FC<BetaSignupModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [successData, setSuccessData] = useState<{
    position: number;
    totalSignups: number;
    remainingSpots: number;
  } | null>(null);

  useEffect(() => {
    // Reset form when modal is opened after a submission
    if (isOpen) {
      setSubmitted(false);
      setEmail('');
      setSubscribe(true);
      setError('');
      setSuccessData(null);
    }

    // Trap focus within modal when open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subscribe,
          source: 'website-beta-modal',
          utm_source: new URLSearchParams(window.location.search).get('utm_source'),
          utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign')
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccessData({
        position: data.position,
        totalSignups: data.totalSignups,
        remainingSpots: data.remainingSpots
      });
      setSubmitted(true);

      // Track successful signup
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'beta_signup_completed', {
          event_category: 'engagement',
          event_label: 'beta_modal',
          value: data.position
        });
      }

    } catch (error: any) {
      setError(error.message);
      console.error('Beta signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 bg-near_black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out'
      onClick={handleBackdropClick}
      onKeyDown={handleEscapeKey}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className='bg-gradient-to-br from-near_black/95 to-deep_purple/40 border-2 border-light_purple/50 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 ease-in-out scale-100'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center mb-6'>
          <h2 
            id="modal-title"
            className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green text-shadow-high-contrast'
          >
            Join the XEUR.AI Beta Launch
          </h2>
          <button
            onClick={onClose}
            className='text-max-contrast hover:text-bright_magenta transition-colors p-2 rounded-md focus-enhanced'
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {submitted ? (
          <div className='text-center py-6' id="modal-description">
            <div className='text-6xl mb-4' role="img" aria-label="Rocket emoji">🚀</div>
            <div className='text-success_green text-2xl mb-2 font-bold text-shadow-high-contrast'>
              Welcome to the Revolution!
            </div>
            <p className='text-max-contrast mb-4 text-shadow-button'>
              You're now in line for early access to XEUR.AI.
            </p>
            
            {successData && (
              <div className='card-high-contrast p-4 mb-6'>
                <div className='grid grid-cols-3 gap-4 text-center'>
                  <div>
                    <div className='text-2xl font-bold text-bright_magenta'>#{successData.position}</div>
                    <div className='text-xs text-secondary-contrast'>Your Position</div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-tech_green'>{successData.totalSignups}</div>
                    <div className='text-xs text-secondary-contrast'>Total Signups</div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-purple-400'>{successData.remainingSpots}</div>
                    <div className='text-xs text-secondary-contrast'>Spots Left</div>
                  </div>
                </div>
                <p className='text-sm text-secondary-contrast mt-4'>
                  Expected Beta Launch: <span className='text-tech_green font-semibold'>July 15, 2025</span>
                </p>
              </div>
            )}
            
            <button
              onClick={onClose}
              className='btn-high-contrast px-6 py-3 rounded-lg focus-enhanced'
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <>
            <div className='mb-6' id="modal-description">
              <div className='card-high-contrast p-4 mb-6'>
                <div className='text-center'>
                  <h3 className='text-lg font-semibold text-bright_magenta mb-2 text-shadow-button'>
                    Be Among the First 500
                  </h3>
                  <p className='text-sm text-max-contrast'>
                    Get exclusive early access to the world's first AI that creates complete games from text prompts
                  </p>
                </div>
              </div>
              
              <div className='grid grid-cols-2 gap-4 mb-6'>
                <div className='text-center card-high-contrast p-3 rounded-lg'>
                  <div className='text-2xl font-bold text-tech_green text-shadow-high-contrast'>~1 Hour</div>
                  <div className='text-xs text-secondary-contrast'>Game Creation</div>
                </div>
                <div className='text-center card-high-contrast p-3 rounded-lg'>
                  <div className='text-2xl font-bold text-bright_magenta text-shadow-high-contrast'>78K+</div>
                  <div className='text-xs text-secondary-contrast'>Games Trained</div>
                </div>
              </div>
            </div>

            {error && (
              <div className='mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm'>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-max-contrast mb-2 text-shadow-button'
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
                  className='input-high-contrast w-full focus-enhanced'
                  aria-describedby="email-description"
                  disabled={isSubmitting}
                />
                <div id="email-description" className="sr-only">
                  Enter your email address to join the beta program
                </div>
              </div>

              <div className='mb-6'>
                <label className='flex items-start text-max-contrast cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className='h-5 w-5 rounded border-2 border-light_purple/50 bg-deep_purple/20 text-bright_magenta focus-enhanced mr-3 mt-0.5 accent-bright_magenta'
                    aria-describedby="subscribe-description"
                    disabled={isSubmitting}
                  />
                  <span className='text-sm text-shadow-button'>
                    Get updates on development progress, new features, and funding milestones
                  </span>
                </label>
                <div id="subscribe-description" className="sr-only">
                  Check this box to receive updates about XEUR.AI development
                </div>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='btn-high-contrast w-full py-3 px-6 rounded-lg text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transform hover:scale-105 focus-enhanced'
                aria-describedby="submit-description"
              >
                {isSubmitting ? (
                  <>
                    <svg 
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Joining Beta...</span>
                  </>
                ) : (
                  'Join Beta Launch 🚀'
                )}
              </button>
              <div id="submit-description" className="sr-only">
                Click to submit your email and join the beta program
              </div>
            </form>

            <div className='mt-6 space-y-2'>
              <p className="text-xs text-secondary-contrast text-center">
                🔥 Limited to 500 beta participants • Expected launch July 15, 2025
              </p>
              <div className='flex items-center justify-center space-x-4 text-xs text-secondary-contrast'>
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
