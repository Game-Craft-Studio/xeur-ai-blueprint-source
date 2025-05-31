import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestorModal: React.FC<InvestorModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [checkSize, setCheckSize] = useState('');
  const [timeline, setTimeline] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled information
    const subject = encodeURIComponent('Investment Inquiry - XEUR.AI Series A');
    const body = encodeURIComponent(`Dear Harshit & Rishav,

I'm interested in learning more about XEUR.AI's Series A investment opportunity.

Investor Details:
Name: ${name}
Email: ${email}
Organization: ${organization}
Typical Check Size: ${checkSize}
Investment Timeline: ${timeline}

I've reviewed your platform demo and partnership validation. I'd like to discuss:
1. Investment terms and timeline
2. Technology roadmap and competitive advantages
3. Partnership leverage and go-to-market strategy
4. Financial projections and market opportunity

Please share the investor deck and let me know your availability for a call.

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
      
      <div className="relative w-full max-w-lg mx-4 bg-gradient-to-b from-deep_purple to-near_black border border-bright_magenta/30 rounded-2xl p-8 shadow-2xl">
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
                Series A Investment Opportunity
              </h2>
              <p className="text-light_gray_text/80">
                Direct access to founders. No intermediaries, no delays.
              </p>
            </div>

            {/* Key Investment Points */}
            <div className="mb-6 p-4 bg-gradient-to-r from-tech_green/10 to-cyan-400/10 border border-tech_green/30 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-tech_green font-semibold">Market Size</div>
                  <div className="text-light_gray_text/80">$184B Gaming Industry</div>
                </div>
                <div>
                  <div className="text-tech_green font-semibold">Validation</div>
                  <div className="text-light_gray_text/80">Microsoft, NVIDIA, Google</div>
                </div>
                <div>
                  <div className="text-tech_green font-semibold">Technology</div>
                  <div className="text-light_gray_text/80">Working Alpha Platform</div>
                </div>
                <div>
                  <div className="text-tech_green font-semibold">Advantage</div>
                  <div className="text-light_gray_text/80">18+ Month Lead</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="investorName" className="block text-sm font-medium text-light_gray_text/90 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="investorName"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-near_black/50 border border-bright_magenta/30 rounded-lg text-white placeholder-light_gray_text/50 focus:border-tech_green focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="investorEmail" className="block text-sm font-medium text-light_gray_text/90 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="investorEmail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-near_black/50 border border-bright_magenta/30 rounded-lg text-white placeholder-light_gray_text/50 focus:border-tech_green focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-light_gray_text/90 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-4 py-3 bg-near_black/50 border border-bright_magenta/30 rounded-lg text-white placeholder-light_gray_text/50 focus:border-tech_green focus:outline-none transition-colors"
                  placeholder="Fund name, company, or angel investor"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkSize" className="block text-sm font-medium text-light_gray_text/90 mb-2">
                    Typical Check Size
                  </label>
                  <select
                    id="checkSize"
                    value={checkSize}
                    onChange={(e) => setCheckSize(e.target.value)}
                    className="w-full px-4 py-3 bg-near_black/50 border border-bright_magenta/30 rounded-lg text-white focus:border-tech_green focus:outline-none transition-colors"
                  >
                    <option value="">Select range</option>
                    <option value="$25K-$100K">$25K-$100K</option>
                    <option value="$100K-$500K">$100K-$500K</option>
                    <option value="$500K-$1M">$500K-$1M</option>
                    <option value="$1M+">$1M+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-light_gray_text/90 mb-2">
                    Investment Timeline
                  </label>
                  <select
                    id="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 bg-near_black/50 border border-bright_magenta/30 rounded-lg text-white focus:border-tech_green focus:outline-none transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate">Ready to move quickly</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright_magenta/50"
              >
                Contact Founders for Investment Deck
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-bright_magenta/20">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="text-light_gray_text/70">Platform Evidence:</div>
                  <div className="flex gap-4 mt-1">
                    <a 
                      href="https://www.youtube.com/watch?v=XtI4AndkV24" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-tech_green hover:text-cyan-400 transition-colors flex items-center gap-1"
                    >
                      Demo <ExternalLink size={12} />
                    </a>
                    <a 
                      href="https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-bright_magenta transition-colors flex items-center gap-1"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-light_gray_text/70">Direct Contact:</div>
                  <div className="text-xs text-light_gray_text/60 mt-1">
                    harshit@cpgplay.com<br/>
                    rishav@cpgplay.com
                  </div>
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
              Investment Inquiry Sent!
            </h2>
            <p className="text-light_gray_text/80 mb-6">
              Your email client should have opened with a pre-filled investment inquiry. 
              Our founders will respond directly with the investor deck and next steps.
            </p>
            <div className="mb-6 p-4 bg-gradient-to-r from-tech_green/10 to-cyan-400/10 border border-tech_green/30 rounded-lg">
              <p className="text-sm text-light_gray_text/80">
                <strong className="text-tech_green">What happens next:</strong><br/>
                1. Founders review your inquiry (24-48 hours)<br/>
                2. Investment deck and terms sent<br/>
                3. Direct founder call scheduled<br/>
                4. Technical and market deep-dive
              </p>
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

export default InvestorModal;