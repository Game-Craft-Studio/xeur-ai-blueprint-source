import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import BetaSignupModal from "./BetaSignupModal";

interface NavLink {
  title: string;
  path: string;
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  {
    title: "Leverage",
    path: "/leverage",
    children: [
      { title: "Project Evolution & Updates", path: "/leverage/updates" },
      { title: "Technical Insights & Changelogs", path: "/leverage/changelogs" },
      { title: "XEUR.AI in the Spotlight", path: "/leverage/media" },
    ],
  },
  {
    title: "Solutions",
    path: "/solutions",
    children: [
      { title: "XEUR Xport - Multi-Platform Deploy", path: "/xeur-xport" },
      { title: "XEUR API - Developer Platform", path: "/xeur-api" },
      { title: "XEUR Connect - Web3 Gaming", path: "/xeur-connect" },
      { title: "Enterprise Solutions", path: "/enterprise" },
      { title: "Business Model Overview", path: "/business-model" },
    ],
  },
  {
    title: "Use Cases",
    path: "/use-cases",
    children: [
      { title: "For Aspiring Creators", path: "/use-cases/aspiring-creators" },
      { title: "For Indie Developers", path: "/use-cases/indie-developers" },
      { title: "For Content Influencers", path: "/use-cases/content-influencers" },
    ],
  },
  {
    title: "Company",
    path: "/company",
    children: [
      { title: "About Us", path: "/about" },
      { title: "Company Overview", path: "/company-overview" },
      { title: "Vision & Mission", path: "/vision" },
      { title: "NVIDIA Partnership", path: "/nvidia-partnership" },
      { title: "Careers", path: "/careers" },
    ],
  },
  {
    title: "Resources",
    path: "/resources",
    children: [
      { title: "Blog", path: "/blog" },
      { title: "Tutorials", path: "/tutorials" },
      { title: "Documentation", path: "/docs" },
      { title: "Demo", path: "/#demo" },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const openBetaModal = () => {
    setIsBetaModalOpen(true);
    setMobileMenuOpen(false);
  };

  const closeBetaModal = () => setIsBetaModalOpen(false);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-near_black/95 backdrop-blur-md border-b-2 border-light_purple/40">
        <div className="container-custom flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="flex items-center group focus-enhanced"
            aria-label="XEUR.AI Homepage"
          >
            <div className="text-2xl font-bold text-max-contrast text-shadow-high-contrast">
              <span className="text-bright_magenta group-hover:text-tech_green transition-colors">XEUR</span>.AI
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                {link.children ? (
                  <button 
                    className="flex items-center gap-1 nav-link-high-contrast hover:text-bright_magenta transition-colors focus-enhanced"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onMouseEnter={() => setActiveDropdown(link.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.title}
                    <ChevronDown 
                      size={18} 
                      className="group-hover:rotate-180 transition-transform duration-300" 
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <Link 
                    href={link.path} 
                    className="nav-link-high-contrast hover:text-bright_magenta transition-colors focus-enhanced"
                  >
                    {link.title}
                  </Link>
                )}

                {link.children && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"
                    role="menu"
                    aria-label={`${link.title} submenu`}
                  >
                    <div className="bg-medium_purple/95 backdrop-blur-md rounded-lg shadow-2xl shadow-deep_purple/50 overflow-hidden border-2 border-light_purple/50">
                      {link.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.path}
                          className="block px-4 py-3 text-max-contrast hover:bg-deep_purple/80 hover:text-bright_magenta transition-colors border-b border-light_purple/30 last:border-b-0 focus-enhanced"
                          role="menuitem"
                        >
                          <div className="font-medium text-shadow-button">{child.title}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/#demo" 
              className="text-sm font-medium text-max-contrast hover:text-tech_green transition-colors px-3 py-2 rounded-md focus-enhanced text-shadow-button"
            >
              Watch Demo
            </Link>
            <button 
              onClick={openBetaModal}
              className="btn-high-contrast relative group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus-enhanced"
              aria-label="Join Beta Program"
            >
              <span className="relative z-10">Join Beta</span>
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

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={cn(
            "lg:hidden fixed top-[81px] left-0 w-full bg-deep_purple/98 backdrop-blur-md shadow-2xl z-50 transition-all duration-300 border-t-2 border-light_purple/40", 
            mobileMenuOpen ? "max-h-[calc(100vh-81px)] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
          )}
          role="navigation"
          aria-labelledby="mobile-menu-label"
        >
          <div className="container-custom py-4">
            <span id="mobile-menu-label" className="sr-only">Mobile navigation menu</span>
            {navLinks.map((link) => (
              <div key={link.title} className="mb-4">
                {link.children ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(link.title)}
                      className="w-full flex justify-between items-center text-left py-3 px-2 text-lg text-max-contrast border-b-2 border-medium_purple/50 hover:text-bright_magenta transition-colors focus-enhanced text-shadow-button"
                      aria-expanded={activeDropdown === link.title}
                      aria-controls={`mobile-${link.title}-submenu`}
                    >
                      {link.title}
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
                      {link.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.path}
                          className="block py-2 px-2 text-secondary-contrast hover:text-bright_magenta transition-colors focus-enhanced rounded-md"
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
                    className="block py-3 px-2 text-lg text-max-contrast border-b-2 border-medium_purple/50 hover:text-bright_magenta transition-colors focus-enhanced text-shadow-button"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-6 mb-4">
              <Link 
                href="/#demo" 
                className="text-center py-3 px-4 border-2 border-tech_green text-max-contrast hover:bg-tech_green/20 hover:text-tech_green transition-colors rounded-lg focus-enhanced text-shadow-button"
                onClick={() => setMobileMenuOpen(false)}
              >
                Watch Demo
              </Link>
              <button 
                onClick={openBetaModal}
                className="btn-high-contrast w-full text-center py-3 rounded-lg focus-enhanced"
              >
                Join Beta Launch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Beta Signup Modal */}
      <BetaSignupModal isOpen={isBetaModalOpen} onClose={closeBetaModal} />
    </>
  );
};

export default Header;