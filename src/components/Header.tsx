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
    title: "Platform",
    path: "/platform",
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
      <header className="fixed w-full top-0 z-50 bg-near_black/90 backdrop-blur-md border-b border-medium_purple/30">
        <div className="container-custom flex justify-between items-center py-4">
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-bold text-light_gray_text">
              <span className="text-bright_magenta group-hover:text-tech_green transition-colors">XEUR</span>.AI
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                {link.children ? (
                  <div className="flex items-center gap-1 cursor-pointer nav-link hover:text-bright_magenta transition-colors">
                    {link.title}
                    <ChevronDown size={18} className="group-hover:rotate-180 transition-transform duration-300" />
                  </div>
                ) : (
                  <Link href={link.path} className="nav-link hover:text-bright_magenta transition-colors">
                    {link.title}
                  </Link>
                )}

                {link.children && (
                  <div className="absolute top-full left-0 mt-2 w-80 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                    <div className="bg-medium_purple/95 backdrop-blur-md rounded-lg shadow-2xl shadow-deep_purple/50 overflow-hidden border border-light_purple/30">
                      {link.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.path}
                          className="block px-4 py-3 hover:bg-deep_purple transition-colors border-b border-light_purple/20 last:border-b-0 hover:text-bright_magenta"
                        >
                          <div className="font-medium">{child.title}</div>
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
              className="text-sm font-medium text-light_gray_text hover:text-tech_green transition-colors"
            >
              Watch Demo
            </Link>
            <button 
              onClick={openBetaModal}
              className="relative group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-lg hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
            >
              <span className="relative z-10">Join Beta</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-light_gray_text hover:text-bright_magenta transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "lg:hidden fixed top-[73px] left-0 w-full bg-deep_purple/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300", 
            mobileMenuOpen ? "max-h-[calc(100vh-73px)] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
          )}
        >
          <div className="container-custom py-4">
            {navLinks.map((link) => (
              <div key={link.title} className="mb-4">
                {link.children ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(link.title)}
                      className="w-full flex justify-between items-center text-left py-3 px-2 text-lg border-b border-medium_purple/30 hover:text-bright_magenta transition-colors"
                    >
                      {link.title}
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
                        <Link
                          key={child.title}
                          href={child.path}
                          className="block py-2 px-2 hover:text-bright_magenta transition-colors"
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
                    className="block py-3 px-2 text-lg border-b border-medium_purple/30 hover:text-bright_magenta transition-colors"
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
                className="text-center py-3 px-4 border border-tech_green/50 rounded-lg text-tech_green hover:bg-tech_green/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Watch Demo
              </Link>
              <button 
                onClick={openBetaModal}
                className="btn-primary w-full text-center py-3"
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