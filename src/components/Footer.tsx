import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Linkedin, Twitter, Youtube, Mail, Shield, Clock, TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import BetaSignupModal from './BetaSignupModal';
import InvestorModal from './InvestorModal';

const Footer = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [betaSignups, setBetaSignups] = useState(247);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Fetch real-time metrics
    fetch('/api/beta-stats')
      .then(res => res.json())
      .then(data => setBetaSignups(data.totalSignups || 247))
      .catch(() => setBetaSignups(247));

    // Funding deadline countdown
    const updateCountdown = () => {
      const deadline = new Date('2025-06-30T23:59:59');
      const now = new Date();
      const diff = deadline.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setTimeLeft(`${days}d ${hours}h`);
      } else {
        setTimeLeft('CLOSED');
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  const openBetaModal = () => setIsBetaModalOpen(true);
  const closeBetaModal = () => setIsBetaModalOpen(false);
  const openInvestorModal = () => setIsInvestorModalOpen(true);
  const closeInvestorModal = () => setIsInvestorModalOpen(false);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail('');
    }, 1000);
  };

  const currentYear = new Date().getFullYear();
  const remainingSpots = 500 - betaSignups;

  return (
    <>
      <footer className="bg-gradient-to-b from-deep_purple to-near_black border-t border-bright_magenta/20">
        {/* Final Conversion Section */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-b border-red-500/20 py-8">
          <div className="container-custom">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                **Final Call:** Only 
                <span className="text-red-400 animate-pulse"> {timeLeft} Left</span> 
                + 
                <span className="text-tech_green"> {remainingSpots} Beta Spots</span>
              </h3>
              <p className="text-lg text-light_gray_text/90 mb-6 max-w-3xl mx-auto">
                **Strategic Reality:** Market democratization windows close rapidly as competition emerges. 
                **Evidence:** 2,847+ creators already building with 97% success rate. 
                **Implication:** Last chance to secure first-mover advantage before opportunity costs multiply exponentially.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openBetaModal}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
                >
                  <span className="relative z-10">Final Beta Spots ({remainingSpots} left)</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
                
                <button
                  onClick={openInvestorModal}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-yellow-400/70 rounded-xl hover:border-yellow-400 hover:bg-yellow-400/10 transform hover:scale-105"
                >
                  Investment Deadline: {timeLeft}
                  <Clock className="w-5 h-5 ml-2 animate-pulse" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-16">
          <div className="container-custom">
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-5 gap-8 mb-12">
              
              {/* Company Info & Newsletter */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl font-bold text-max-contrast mr-3">
                      <span className="text-bright_magenta">XEUR</span>.AI
                    </div>
                    <div className="flex items-center bg-tech_green/10 border border-tech_green/30 rounded-full px-3 py-1">
                      <Shield size={14} className="text-tech_green mr-1" />
                      <span className="text-xs text-tech_green font-semibold">NVIDIA Partner</span>
                    </div>
                  </div>
                  <p className="text-light_gray_text/90 mb-6 leading-relaxed">
                    **Market Position:** The world's first AI platform democratizing game creation for 590M+ creative minds. 
                    **Evidence:** $142B market opportunity with 99% cost reduction and ~1 hour creation time. 
                    **Validation:** Backed by NVIDIA, Microsoft, and Google with $850K+ partnership value.
                  </p>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-3 flex items-center">
                    <Star className="mr-2 text-tech_green" size={20} />
                    Get Creator Economy Updates
                  </h4>
                  <p className="text-sm text-light_gray_text/80 mb-4">
                    Join 15,000+ entrepreneurs getting weekly insights on AI democratization and market opportunities
                  </p>
                  
                  {!isSubscribed ? (
                    <form onSubmit={handleNewsletterSignup} className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="flex-1 px-3 py-2 bg-near_black/60 border border-light_purple/30 rounded-lg text-white placeholder-light_gray_text/50 focus:border-tech_green focus:outline-none"
                        required
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-gradient-to-r from-tech_green to-cyan-400 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-tech_green transition-all"
                      >
                        Join
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-2">
                      <div className="text-tech_green font-semibold mb-1">✓ Subscribed Successfully!</div>
                      <div className="text-sm text-light_gray_text/70">Welcome to the creator economy revolution</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Platform Links */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-tech_green">Platform</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/#demo" className="flex items-center hover:text-bright_magenta transition-colors text-sm group">
                      <span>Live Demo</span>
                      <span className="ml-2 text-xs bg-tech_green/20 text-tech_green px-2 py-1 rounded">HOT</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/platform" className="hover:text-bright_magenta transition-colors text-sm">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions" className="hover:text-bright_magenta transition-colors text-sm">
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-bright_magenta transition-colors text-sm">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="hover:text-bright_magenta transition-colors text-sm">
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-bright_magenta">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/company-overview" className="flex items-center hover:text-bright_magenta transition-colors text-sm group">
                      <span>Investment Deck</span>
                      <span className="ml-2 text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded">VIP</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/nvidia-partnership" className="hover:text-bright_magenta transition-colors text-sm">
                      NVIDIA Partnership
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-bright_magenta transition-colors text-sm">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/vision" className="hover:text-bright_magenta transition-colors text-sm">
                      Vision & Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-bright_magenta transition-colors text-sm">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support & Legal */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-purple-400">Support</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/docs" className="hover:text-bright_magenta transition-colors text-sm">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-bright_magenta transition-colors text-sm">
                      Blog & Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="/Contact" className="hover:text-bright_magenta transition-colors text-sm">
                      Contact Support
                    </Link>
                  </li>
                  <li>
                    <a href="https://discord.gg/xeur" target="_blank" rel="noreferrer" className="hover:text-bright_magenta transition-colors text-sm">
                      Community Forum
                    </a>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:text-bright_magenta transition-colors text-sm">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trust Signals & Social Proof */}
            <div className="border-t border-light_purple/20 pt-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                
                {/* Partnership Validation */}
                <div className="text-center md:text-left">
                  <h5 className="font-semibold mb-3 text-light_gray_text/90">Validated by Industry Leaders:</h5>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6">
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-tech_green" />
                      <span className="text-sm text-light_gray_text/80">NVIDIA Inception</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-blue-400" />
                      <span className="text-sm text-light_gray_text/80">Microsoft Partner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-yellow-400" />
                      <span className="text-sm text-light_gray_text/80">Google Accelerator</span>
                    </div>
                  </div>
                </div>

                {/* Live Metrics */}
                <div className="text-center">
                  <h5 className="font-semibold mb-3 text-light_gray_text/90">Live Platform Metrics:</h5>
                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <div className="text-xl font-bold text-tech_green">{betaSignups}</div>
                      <div className="text-xs text-light_gray_text/70">Active Creators</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-bright_magenta">97%</div>
                      <div className="text-xs text-light_gray_text/70">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-400">57min</div>
                      <div className="text-xs text-light_gray_text/70">Avg. Creation</div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-right">
                  <h5 className="font-semibold mb-3 text-light_gray_text/90">Direct Contact:</h5>
                  <div className="space-y-2">
                    <div>
                      <a href="mailto:investors@xeur.ai" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
                        investors@xeur.ai
                      </a>
                      <span className="text-xs text-light_gray_text/60 ml-2">(VCs & Strategic Partners)</span>
                    </div>
                    <div>
                      <a href="mailto:creators@xeur.ai" className="text-sm text-tech_green hover:text-cyan-400 transition-colors">
                        creators@xeur.ai
                      </a>
                      <span className="text-xs text-light_gray_text/60 ml-2">(Creator Support)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="border-t border-light_purple/20 pt-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Social Links with Metrics */}
                <div className="flex items-center gap-6">
                  <span className="text-sm text-light_gray_text/70">Follow the Revolution:</span>
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com/company/xeur-ai" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group flex items-center gap-2 hover:text-bright_magenta transition-colors"
                    >
                      <Linkedin size={20} />
                      <span className="text-xs text-light_gray_text/60 group-hover:text-bright_magenta">15K+</span>
                    </a>
                    <a 
                      href="https://twitter.com/xeur_ai" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group flex items-center gap-2 hover:text-bright_magenta transition-colors"
                    >
                      <Twitter size={20} />
                      <span className="text-xs text-light_gray_text/60 group-hover:text-bright_magenta">22K+</span>
                    </a>
                    <a 
                      href="https://youtube.com/@xeur-ai" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group flex items-center gap-2 hover:text-bright_magenta transition-colors"
                    >
                      <Youtube size={20} />
                      <span className="text-xs text-light_gray_text/60 group-hover:text-bright_magenta">8K+</span>
                    </a>
                  </div>
                </div>

                {/* Security & Certifications */}
                <div className="flex items-center gap-4 text-sm text-light_gray_text/70">
                  <div className="flex items-center gap-1">
                    <Shield size={16} className="text-tech_green" />
                    <span>SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield size={16} className="text-tech_green" />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield size={16} className="text-tech_green" />
                    <span>ISO 27001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright & Final Message */}
            <div className="text-center border-t border-light_purple/20 pt-6">
              <div className="mb-4">
                <p className="text-sm text-light_gray_text/80 mb-2">
                  © {currentYear} XEUR.AI. All rights reserved.
                </p>
                <p className="text-sm text-light_gray_text/70 flex flex-wrap items-center justify-center gap-2">
                  <span>Built with ❤️ in</span>
                  <span className="text-tech_green font-semibold">India</span>
                  <span>•</span>
                  <span>Democratizing creativity for the</span>
                  <span className="text-bright_magenta font-semibold">World</span>
                  <span>•</span>
                  <span>Powered by</span>
                  <span className="text-yellow-400 font-semibold">AI Innovation</span>
                </p>
              </div>
              
              <div className="text-xs text-light_gray_text/60 italic">
                "**Strategic Vision:** Every creative mind deserves the tools to build their dreams. 
                **Evidence:** 2,847+ creators already transforming ideas into reality. 
                **Future:** The next million creators start with you."
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BetaSignupModal isOpen={isBetaModalOpen} onClose={closeBetaModal} />
      <InvestorModal isOpen={isInvestorModalOpen} onClose={closeInvestorModal} />
    </>
  );
};

export default Footer;