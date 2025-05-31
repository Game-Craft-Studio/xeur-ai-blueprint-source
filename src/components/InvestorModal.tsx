import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

// This TypeScript declaration is fine, it just tells TypeScript about the global gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// REMOVE THIS LINE: const gtag = window.gtag;

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestorModal: React.FC<InvestorModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    title: '',
    checkSize: '',
    timeline: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData({
        email: '',
        company: '',
        title: '',
        checkSize: '',
        timeline: '',
        interest: ''
      });
      setError('');
    }

    // This part is already client-side safe due to being in useEffect
    if (typeof window !== 'undefined' && window.document && window.document.body) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.document && window.document.body) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/investor-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitted(true);

      // Track successful investor inquiry
      // MODIFIED: Access window.gtag directly and conditionally
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'investor_inquiry_submitted', {
          event_category: 'investment',
          event_label: 'investor_modal',
          value: 1
        });
      }

    } catch (error: any) {
      setError(error.message);
      console.error('Investor inquiry error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Consider adding onKeyDown to the modal container if you want this to work
  // when the modal itself is focused, not just any element on the page.
  // For now, this will only work if the component or its children are focused.
  // useEffect(() => {
  //   const handleEsc = (event: KeyboardEvent) => {
  //     if (event.key === 'Escape') {
  //       onClose();
  //     }
  //   };
  //   if (isOpen) {
  //     document.addEventListener('keydown', handleEsc);
  //   }
  //   return () => {
  //     document.removeEventListener('keydown', handleEsc);
  //   };
  // }, [isOpen, onClose]);


  if (!isOpen) {
    return null;
  }


  return (
    <div
      className='fixed inset-0 bg-near_black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out'
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className='bg-gradient-to-br from-near_black/95 to-deep_purple/40 border-2 border-bright_magenta/50 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 ease-in-out scale-100 max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h2 
              id="modal-title"
              className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green text-shadow-high-contrast'
            >
              XEUR.AI Investment Opportunity
            </h2>
            <p className='text-lg text-tech_green font-semibold'>$2.5M Seed Round • $25M Pre-Money</p>
          </div>
          <button
            onClick={onClose}
            className='text-max-contrast hover:text-bright_magenta transition-colors p-2 rounded-md focus-enhanced'
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {submitted ? (
          <div className='text-center py-8' id="modal-description">
            <div className='text-6xl mb-4' role="img" aria-label="Check mark emoji">✅</div>
            <div className='text-success_green text-2xl mb-4 font-bold text-shadow-high-contrast'>
              Thank You for Your Interest
            </div>
            <p className='text-max-contrast mb-6 text-shadow-button'>
              We've received your investment inquiry and will respond within 24 hours.
            </p>
            
            <div className='card-high-contrast p-6 mb-6 text-left'>
              <h3 className='text-lg font-semibold text-bright_magenta mb-4'>What Happens Next:</h3>
              <ul className='space-y-3 text-sm text-secondary-contrast'>
                <li className='flex items-start'>
                  <span className='text-tech_green mr-2'>1.</span>
                  Founders review your inquiry immediately (within 4 hours)
                </li>
                <li className='flex items-start'>
                  <span className='text-tech_green mr-2'>2.</span>
                  Personal response from CEO Harshit Verma within 24 hours
                </li>
                <li className='flex items-start'>
                  <span className='text-tech_green mr-2'>3.</span>
                  Complete pitch deck and financials sharing
                </li>
                <li className='flex items-start'>
                  <span className='text-tech_green mr-2'>4.</span>
                  Live demo and strategic discussion call
                </li>
              </ul>
            </div>

            <div className='bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-4 mb-6'>
              <p className='text-sm text-yellow-400'>
                💡 <strong>Immediate Access:</strong> Check your email for our investment overview PDF and founder contact details.
              </p>
            </div>
            
            <button
              onClick={onClose}
              className='btn-high-contrast px-8 py-3 rounded-lg focus-enhanced'
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <>
            <div className='mb-6' id="modal-description">
              {/* Investment Highlights */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                <div className='card-high-contrast p-4 rounded-lg'>
                  <h3 className='text-sm font-semibold text-bright_magenta mb-2'>Market Opportunity</h3>
                  <div className='text-2xl font-bold text-tech_green'>$142B</div>
                  <div className='text-xs text-secondary-contrast'>Annual lost value from unfinished games</div>
                </div>
                
                <div className='card-high-contrast p-4 rounded-lg'>
                  <h3 className='text-sm font-semibold text-bright_magenta mb-2'>Market Expansion</h3>
                  <div className='text-2xl font-bold text-purple-400'>21X</div>
                  <div className='text-xs text-secondary-contrast'>From 28M developers to 590M+ creators</div>
                </div>
              </div>

              {/* Partnership Validation */}
              <div className='card-high-contrast p-4 mb-6 rounded-lg'>
                <h3 className='text-lg font-semibold text-tech_green mb-3'>Partnership Validation</h3>
                <div className='grid grid-cols-3 gap-4 text-center'>
                  <div>
                    <div className='text-green-400 font-semibold'>NVIDIA</div>
                    <div className='text-xs text-secondary-contrast'>Inception Member</div>
                  </div>
                  <div>
                    <div className='text-blue-400 font-semibold'>Microsoft</div>
                    <div className='text-xs text-secondary-contrast'>Incubation Program</div>
                  </div>
                  <div>
                    <div className='text-yellow-400 font-semibold'>Google</div>
                    <div className='text-xs text-secondary-contrast'>Accelerator</div>
                  </div>
                </div>
                <p className='text-xs text-center mt-3 text-secondary-contrast'>
                  <span className='text-tech_green font-semibold'>$850K+</span> total partnership value
                </p>
              </div>
            </div>

            {error && (
              <div className='mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm'>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-max-contrast mb-1'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    id='email'
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder='investor@fund.com'
                    className='input-high-contrast w-full focus-enhanced'
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor='company' className='block text-sm font-medium text-max-contrast mb-1'>
                    Company/Fund *
                  </label>
                  <input
                    type='text'
                    id='company'
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                    placeholder='Venture Capital Fund'
                    className='input-high-contrast w-full focus-enhanced'
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='title' className='block text-sm font-medium text-max-contrast mb-1'>
                    Title/Role
                  </label>
                  <input
                    type='text'
                    id='title'
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder='Partner, Principal, etc.'
                    className='input-high-contrast w-full focus-enhanced'
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor='checkSize' className='block text-sm font-medium text-max-contrast mb-1'>
                    Typical Check Size
                  </label>
                  <select
                    id='checkSize'
                    value={formData.checkSize}
                    onChange={(e) => setFormData({...formData, checkSize: e.target.value})}
                    className='input-high-contrast w-full focus-enhanced'
                    disabled={isSubmitting}
                  >
                    <option value="">Select range</option>
                    <option value="$25K-$100K">$25K - $100K</option>
                    <option value="$100K-$500K">$100K - $500K</option>
                    <option value="$500K-$1M">$500K - $1M</option>
                    <option value="$1M+">$1M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor='timeline' className='block text-sm font-medium text-max-contrast mb-1'>
                  Investment Timeline
                </label>
                <select
                  id='timeline'
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className='input-high-contrast w-full focus-enhanced'
                  disabled={isSubmitting}
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate">Ready to invest now</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="Exploring">Just exploring</option>
                </select>
              </div>

              <div>
                <label htmlFor='interest' className='block text-sm font-medium text-max-contrast mb-1'>
                  Investment Interest & Questions *
                </label>
                <textarea
                  id='interest'
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  required
                  placeholder='What interests you about XEUR.AI? Specific questions about the technology, market, team, or business model?'
                  rows={4}
                  className='input-high-contrast w-full focus-enhanced resize-none'
                  disabled={isSubmitting}
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='btn-high-contrast w-full py-4 px-6 rounded-lg text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transform hover:scale-105 focus-enhanced'
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
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  'Request Investment Materials 📊'
                )}
              </button>
            </form>

            <div className='mt-6 space-y-2'>
              <div className='bg-gradient-to-r from-bright_magenta/20 to-purple-400/20 border border-bright_magenta/30 rounded-lg p-4'>
                <h4 className='text-sm font-semibold text-bright_magenta mb-2'>You'll Receive Immediately:</h4>
                <ul className='text-xs text-secondary-contrast space-y-1'>
                  <li>✅ Complete 15-slide pitch deck</li>
                  <li>✅ Financial projections & unit economics</li>
                  <li>✅ Technical architecture overview</li>
                  <li>✅ Partnership validation letters</li>
                  <li>✅ Direct founder contact for follow-up</li>
                </ul>
              </div>

              <p className="text-xs text-secondary-contrast text-center">
                🔥 Round closes June 30, 2025 • NVIDIA Capital Connect window: May-August 2025
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InvestorModal;

