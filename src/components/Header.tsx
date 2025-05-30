import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, TrendingUp, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import BetaSignupModal from "./BetaSignupModal";
import InvestorModal from "./InvestorModal";

interface NavLink {
  title: string;
  path: string;
  priority?: 'high' | 'medium' | 'low';
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  {
    title: "Platform",
    path: "/solutions",
    priority: 'high',
    children: [
      { title: "Live Demo - See It Work", path: "/#demo", priority: 'high' },
      { title: "How It Works", path: "/platform", priority: 'high' },
      { title: "Success Stories", path: "/resources", priority: 'medium' },
      { title: "Pricing", path: "/pricing", priority: 'medium' },
    ],
  },
  {
    title: "Opportunity",
    path: "/company",
    priority: 'high',
    children: [
      { title: "Investment Deck", path: "/company-overview", priority: 'high' },
      { title: "Market Analysis", path: "/business-model", priority: 'high' },
      { title: "NVIDIA Partnership", path: "/nvidia-partnership", priority: 'medium' },
      { title: "Company Story", path: "/about", priority: 'low' },
    ],
  },
  {
    title: "Resources",
    path: "/resources",
    priority: 'medium',
    children: [
      { title: "Creator Guide", path: "/tutorials", priority: 'high' },
      { title: "Documentation", path: "/docs", priority: 'medium' },
      { title: "Blog & Insights", path: "/blog", priority: 'medium' },
      { title: "Support", path: "/Contact", priority: 'low' },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
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

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const openBetaModal = () => {
    setIsBetaModalOpen(true);
    setMobileMenuOpen(false);
  };

  const closeBetaModal = () => setIsBetaModalOpen(false);
  
  const openInvestorModal = () => {
    setIsInvestorModalOpen(true);
    setMobileMenuOpen(false);
  };
  
  const closeInvestorModal = () => setIsInvestorModalOpen(false);

  const remainingSpots = 500 - betaSignups;

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-near_black/98 backdrop-blur-md border-b border-bright_magenta/20">
        {/* Top Urgency Bar */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-b border-red-500/30">
          <div className="container-custom">
            <div className="flex items-center justify-center py-2 text-sm">
              <div className="flex items-center gap-2 text-red-400">
                <Clock size={16} className="animate-pulse" />
                <span className="font-semibold">FUNDING DEADLINE: {timeLeft} LEFT</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">{remainingSpots} Beta Spots Remaining</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom flex justify-between items-center py-4">
          {/* Enhanced Logo with Trust Signals */}
          <Link 
            href="/" 
            className="flex items-center group focus-enhanced"
            aria-label="XEUR.AI Homepage"
          >
            <div className="flex items-center">
              <div className="text-2xl font-bold text-max-contrast text-shadow-high-contrast mr-3">
                <span className="text-bright_magenta group-hover:text-tech_green transition-colors">XEUR</span>.AI
              </div>
              {/* Trust Badge */}
              <div className="hidden lg:flex items-center bg-tech_green/10 border border-tech_green/30 rounded-full px-3 py-1">
                <Shield size={14} className="text-tech_green mr-1" />
                <span className="text-xs text-tech_green font-semibold">NVIDIA Partner</span>
              </div>
            </div>
          </Link>

          {/* Simplified Navigation - Conversion Optimized */}
          <nav className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                {link.children ? (
                  <button 
                    className={cn(
                      "flex items-center gap-1 nav-link-high-contrast transition-colors focus-enhanced font-medium",
                      link.priority === 'high' && "text-tech_green hover:text-bright_magenta"
                    )}
                    aria-haspopup="true"
                    aria-expanded="false"
                    onMouseEnter={() => setActiveDropdown(link.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.title}
                    <ChevronDown 
                      size={16} 
                      className="group-hover:rotate-180 transition-transform duration-300" 
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <Link 
                    href={link.path} 
                    className={cn(
                      "nav-link-high-contrast transition-colors focus-enhanced font-medium",
                      link.priority === 'high' && "text-tech_green hover:text-bright_magenta"
                    )}
                  >
                    {link.title}
                  </Link>
                )}

                {link.children && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-72 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"
                    role="menu"
                    aria-label={`${link.title} submenu`}
                  >
                    <div className="bg-near_black/98 backdrop-blur-md rounded-xl shadow-2xl shadow-deep_purple/50 overflow-hidden border border-light_purple/30">
                      {link.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.path}
                          className={cn(
                            "block px-4 py-3 text-max-contrast hover:bg-deep_purple/80 transition-colors border-b border-light_purple/20 last:border-b-0 focus-enhanced",
                            child.priority === 'high' && "hover:text-tech_green font-semibold",
                            child.priority === 'medium' && "hover:text-bright_magenta"
                          )}
                          role="menuitem"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-shadow-button">{child.title}</span>
                            {child.priority === 'high' && (
                              <TrendingUp size={14} className="text-tech_green" />
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Conversion-Optimized CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Proof Element */}
            <div className="flex items-center bg-gradient-to-r from-purple-500/10 to-bright_magenta/10 border border-purple-500/30 rounded-lg px-3 py-2 mr-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tech_green rounded-full animate-pulse"></div>
                <span className="text-xs text-light_gray_text/80">
                  <span className="text-tech_green font-semibold">{betaSignups}</span> creators building
                </span>
              </div>
            </div>

            <Link 
              href="/#demo" 
              className="text-sm font-medium text-light_gray_text/90 hover:text-tech_green transition-colors px-3 py-2 rounded-md focus-enhanced border border-transparent hover:border-tech_green/30"
            >
              Watch Demo
            </Link>
            
            <button 
              onClick={openInvestorModal}
              className="text-sm font-medium text-light_gray_text/90 hover:text-yellow-400 transition-colors px-3 py-2 rounded-md focus-enhanced border border-transparent hover:border-yellow-400/30"
            >
              Investment Deck
            </button>
            
            <button 
              onClick={openBetaModal}
              className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-bright_magenta to-purple-600 rounded-lg transition-all duration-300 transform hover:scale-105 focus-enhanced shadow-lg hover:shadow-bright_magenta/50"
              aria-label="Join Beta Program"
            >
              <span className="relative z-10">
                {remainingSpots > 0 ? `Join Beta (${remainingSpots} left)` : 'Join Waitlist'}
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-max-contrast hover:text-bright_magenta transition-colors p-2 rounded-md focus-enhanced"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Optimized Mobile Menu */}
        <div 
          id="mobile-menu"
          className={cn(
            "lg:hidden fixed top-[121px] left-0 w-full bg-near_black/98 backdrop-blur-md shadow-2xl z-50 transition-all duration-300 border-t border-light_purple/30", 
            mobileMenuOpen 
              ? "max-h-[calc(100vh-121px)] overflow-y-auto opacity-100" 
              : "max-h-0 overflow-hidden opacity-0"
          )}
          role="navigation"
          aria-labelledby="mobile-menu-label"
        >
          <div className="container-custom py-4">
            {/* Mobile Urgency Reminder */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg p-3 mb-4">
              <div className="text-center text-sm text-red-400">
                <div className="font-bold">⚠️ DEADLINE: {timeLeft}</div>
                <div className="text-xs text-light_gray_text/70">{remainingSpots} beta spots left</div>
              </div>
            </div>

            <span id="mobile-menu-label" className="sr-only">Mobile navigation menu</span>
            
            {/* Priority CTAs First */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              <button 
                onClick={openBetaModal}
                className="w-full text-center py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg focus-enhanced shadow-lg"
              >
                {remainingSpots > 0 ? `Join Beta (${remainingSpots} left)` : 'Join Waitlist'}
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href="/#demo" 
                  className="text-center py-3 px-4 border border-tech_green text-tech_green hover:bg-tech_green/10 transition-colors rounded-lg focus-enhanced"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Demo
                </Link>
                <button 
                  onClick={openInvestorModal}
                  className="text-center py-3 px-4 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-colors rounded-lg focus-enhanced"
                >
                  Invest
                </button>
              </div>
            </div>

            {/* Simplified Mobile Navigation */}
            {navLinks.map((link) => (
              <div key={link.title} className="mb-3">
                {link.children ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(link.title)}
                      className="w-full flex justify-between items-center text-left py-3 px-2 text-lg text-max-contrast border-b border-medium_purple/30 hover:text-bright_magenta transition-colors focus-enhanced"
                      aria-expanded={activeDropdown === link.title}
                      aria-controls={`mobile-${link.title}-submenu`}
                    >
                      <span className={cn(
                        "font-medium",
                        link.priority === 'high' && "text-tech_green"
                      )}>{link.title}</span>
                      <ChevronDown 
                        size={18} 
                        className={cn(
                          "transition-transform",
                          activeDropdown === link.title ? "rotate-180" : ""
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <div 
                      id={`mobile-${link.title}-submenu`}
                      className={cn(
                        "pl-4 space-y-2 transition-all duration-300", 
                        activeDropdown === link.title ? "max-h-96 py-2" : "max-h-0 overflow-hidden"
                      )}
                      role="region"
                      aria-labelledby={`mobile-${link.title}-button`}
                    >
                      {link.children
                        .sort((a, b) => {
                          const priorityOrder = { high: 0, medium: 1, low: 2 };
                          return (priorityOrder[a.priority || 'low'] || 2) - (priorityOrder[b.priority || 'low'] || 2);
                        })
                        .map((child) => (
                        <Link
                          key={child.title}
                          href={child.path}
                          className={cn(
                            "block py-2 px-2 text-secondary-contrast hover:text-bright_magenta transition-colors focus-enhanced rounded-md",
                            child.priority === 'high' && "text-tech_green font-semibold"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.path}
                    className={cn(
                      "block py-3 px-2 text-lg text-max-contrast border-b border-medium_purple/30 hover:text-bright_magenta transition-colors focus-enhanced",
                      link.priority === 'high' && "text-tech_green font-semibold"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Trust Signals */}
            <div className="mt-6 pt-4 border-t border-medium_purple/30">
              <div className="text-center text-sm text-light_gray_text/70">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <Shield size={14} className="text-tech_green" />
                    <span>NVIDIA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield size={14} className="text-blue-400" />
                    <span>Microsoft</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield size={14} className="text-yellow-400" />
                    <span>Google</span>
                  </div>
                </div>
                <div className="text-xs">Backed by Industry Leaders</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <BetaSignupModal isOpen={isBetaModalOpen} onClose={closeBetaModal} />
      <InvestorModal isOpen={isInvestorModalOpen} onClose={closeInvestorModal} />
    </>
  );
};

export default Header;