import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BetaSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaSignupModal: React.FC<BetaSignupModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled information
    const subject = encodeURIComponent('Alpha Access Request - XEUR.AI');
    const body = encodeURIComponent(`Hi Harshit & Rishav,

I'm interested in accessing the XEUR.AI alpha platform.

Details:
Name: ${name}
Email: ${email}
Company: ${company || 'Individual Creator'}
Use Case: ${useCase}

I'd love to learn more about the platform and discuss potential collaboration.

Best regards,
${name}`);
    
    const mailtoLink = `mailto:harshit@cpgplay.com?cc=rishav@cpgplay.com&subject=${subject}&body=${body}`;
    window.open(mailtoLink);
    
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md mx-4 bg-gradient-to-b from-deep_purple to-near_black border border-bright_magenta/30 rounded-2xl p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-light_gray_text/70 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green mb-2">
                Alpha Access Request
              </h2>
              <p className="text-light_gray_text/80">
                Direct access to the founding team. No gatekeepers, no sales process.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light_gray_text/90 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-near_black/50 border border-bright_magenta/30 rounded-lg text-white placeholder-light_gray_text/50 focus:border-tech_green focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light_gray_text/90 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-near_black/50 border border-bright_magenta/30 rounded-lg text-white placeholder-light_gray_text/50 focus:border-tech_green focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-light_gray_text/90 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 bg-near_black/50 border border-bright_magenta/30 rounded-lg text-white placeholder-light_gray_text/50 focus:border-tech_green focus:outline-none transition-colors"
                  placeholder="Your company or 'Individual Creator'"
                />
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-light_gray_text/90 mb-2">
                  What type of game do you want to create?
                </label>
                <textarea
                  id="useCase"
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-near_black/50 border border-bright_magenta/30 rounded-lg text-white placeholder-light_gray_text/50 focus:border-tech_green focus:outline-none transition-colors resize-none"
                  placeholder="e.g., Educational puzzle game, Racing game, RPG adventure..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright_magenta/50"
              >
                Contact Founders Directly
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-bright_magenta/20">
              <div className="text-center text-sm text-light_gray_text/70">
                <p className="mb-2">Direct founder contact:</p>
                <div className="flex justify-center gap-4">
                  <a href="mailto:harshit@cpgplay.com" className="text-tech_green hover:text-cyan-400 transition-colors">
                    harshit@cpgplay.com
                  </a>
                  <a href="mailto:rishav@cpgplay.com" className="text-bright_magenta hover:text-purple-400 transition-colors">
                    rishav@cpgplay.com
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-tech_green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-tech_green text-2xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold text-tech_green mb-4">
              Email Opened!
            </h2>
            <p className="text-light_gray_text/80 mb-6">
              Your default email client should now have a pre-filled message ready to send to our founders. 
              If it didn't open, you can reach us directly at:
            </p>
            <div className="space-y-2 mb-6">
              <a href="mailto:harshit@cpgplay.com" className="block text-tech_green hover:text-cyan-400 transition-colors">
                harshit@cpgplay.com
              </a>
              <a href="mailto:rishav@cpgplay.com" className="block text-bright_magenta hover:text-purple-400 transition-colors">
                rishav@cpgplay.com
              </a>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BetaSignupModal;