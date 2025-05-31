import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  title: string;
  path: string;
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  {
    title: "Platform",
    path: "#platform",
    children: [
      { title: "Live Demo", path: "https://www.youtube.com/watch?v=XtI4AndkV24" },
      { title: "GitHub Repository", path: "https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source" },
      { title: "Alpha Platform", path: "#platform" },
    ],
  },
  {
    title: "Validation",
    path: "#partnerships",
    children: [
      { title: "Microsoft Partnership", path: "#partnerships" },
      { title: "NVIDIA Inception", path: "#partnerships" },
      { title: "Google for Startups", path: "#partnerships" },
    ],
  },
  {
    title: "Opportunity",
    path: "#opportunity",
    children: [
      { title: "Investment Thesis", path: "#opportunity" },
      { title: "Market Analysis", path: "#opportunity" },
      { title: "Series A Pipeline", path: "#platform" },
    ],
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleLinkClick = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-near_black/95 backdrop-blur-md border-b border-bright_magenta/20">
        {/* Partnership Validation Bar */}
        <div className="bg-gradient-to-r from-tech_green/10 to-cyan-400/10 border-b border-tech_green/20">
          <div className="container-custom">
            <div className="flex items-center justify-center py-2 text-sm">
              <div className="flex items-center gap-4 text-tech_green">
                <div className="flex items-center gap-1">
                  <Shield size={14} />
                  <span>Microsoft</span>
                </div>
                <span className="text-tech_green/40">•</span>
                <div className="flex items-center gap-1">
                  <Shield size={14} />
                  <span>NVIDIA</span>
                </div>
                <span className="text-tech_green/40">•</span>
                <div className="flex items-center gap-1">
                  <Shield size={14} />
                  <span>Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group focus-enhanced"
            aria-label="XEUR.AI Homepage"
          >
            <div className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green group-hover:from-tech_green group-hover:to-bright_magenta transition-all duration-300">XEUR</span>
              <span className="text-white">.AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" role="navigation">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                {link.children ? (
                  <button 
                    className="flex items-center gap-1 text-light_gray_text/90 hover:text-tech_green transition-colors font-medium"
                    onMouseEnter={() => setActiveDropdown(link.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.title}
                    <ChevronDown 
                      size={16} 
                      className="group-hover:rotate-180 transition-transform duration-300" 
                    />
                  </button>
                ) : (
                  <button 
                    onClick={() => handleLinkClick(link.path)}
                    className="text-light_gray_text/90 hover:text-tech_green transition-colors font-medium cursor-pointer"
                  >
                    {link.title}
                  </button>
                )}

                {link.children && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"
                    onMouseEnter={() => setActiveDropdown(link.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-near_black/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-bright_magenta/20">
                      {link.children.map((child) => (
                        <button
                          key={child.title}
                          onClick={() => handleLinkClick(child.path)}
                          className="w-full text-left block px-4 py-3 text-light_gray_text/90 hover:bg-bright_magenta/10 hover:text-tech_green transition-colors border-b border-bright_magenta/10 last:border-b-0 focus-enhanced cursor-pointer"
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://www.youtube.com/watch?v=XtI4AndkV24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-light_gray_text/90 hover:text-tech_green transition-colors px-3 py-2 rounded-md border border-transparent hover:border-tech_green/30"
            >
              Watch Demo
            </a>
            
            <a 
              href="mailto:harshit@cpgplay.com"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-bright_magenta to-purple-600 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright_magenta/50"
            >
              Request Alpha Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-bright_magenta transition-colors p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "lg:hidden fixed top-[105px] left-0 w-full bg-near_black/98 backdrop-blur-sm shadow-2xl z-50 transition-all duration-300 border-t border-bright_magenta/20", 
            mobileMenuOpen 
              ? "max-h-[calc(100vh-105px)] overflow-y-auto opacity-100" 
              : "max-h-0 overflow-hidden opacity-0"
          )}
        >
          <div className="container-custom py-6">
            {/* Mobile CTAs */}
            <div className="space-y-3 mb-6">
              <a 
                href="https://www.youtube.com/watch?v=XtI4AndkV24"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-4 border border-tech_green text-tech_green hover:bg-tech_green/10 transition-colors rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                🎬 Watch Demo
              </a>
              
              <a 
                href="mailto:harshit@cpgplay.com"
                className="block w-full text-center py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                🚀 Request Alpha Access
              </a>
            </div>

            {/* Mobile Navigation */}
            {navLinks.map((link) => (
              <div key={link.title} className="mb-3">
                {link.children ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(link.title)}
                      className="w-full flex justify-between items-center text-left py-3 px-2 text-lg text-white border-b border-bright_magenta/20 hover:text-tech_green transition-colors"
                    >
                      <span className="font-medium">{link.title}</span>
                      <ChevronDown 
                        size={18} 
                        className={cn(
                          "transition-transform",
                          activeDropdown === link.title ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <div 
                      className={cn(
                        "pl-4 space-y-2 transition-all duration-300", 
                        activeDropdown === link.title ? "max-h-96 py-2" : "max-h-0 overflow-hidden"
                      )}
                    >
                      {link.children.map((child) => (
                        <button
                          key={child.title}
                          onClick={() => handleLinkClick(child.path)}
                          className="block w-full text-left py-2 px-2 text-light_gray_text/90 hover:text-tech_green transition-colors rounded-md cursor-pointer"
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="block w-full text-left py-3 px-2 text-lg text-white border-b border-bright_magenta/20 hover:text-tech_green transition-colors font-medium cursor-pointer"
                  >
                    {link.title}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;