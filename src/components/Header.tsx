
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
    title: "Use Cases",
    path: "/use-cases",
    children: [
      { title: "For Aspiring Creators", path: "/use-cases/aspiring-creators" },
      { title: "For Indie Developers", path: "/use-cases/indie-developers" },
      { title: "For Content Influencers", path: "/use-cases/content-influencers" },
    ],
  },
  {
    title: "Pricing",
    path: "/Pricing",
  },
  {
    title: "Resources",
    path: "/resources",
    children: [
      { title: "Blog", path: "/blog" },
      { title: "Tutorials", path: "/tutorials" },
      { title: "Documentation", path: "/docs" },
    ],
  },
  {
    title: "About Us",
    path: "/about",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-near_black/90 backdrop-blur-md border-b border-medium_purple/30">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-light_gray_text">
            <span className="text-bright_magenta">XEUR</span>.AI
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.title} className="relative group">
              {link.children ? (
                <div className="flex items-center gap-1 cursor-pointer nav-link">
                  {link.title}
                  <ChevronDown size={18} />
                </div>
              ) : (
                <Link href={link.path} className="nav-link">
                  {link.title}
                </Link>
              )}

              {link.children && (
                <div className="absolute top-full left-0 mt-2 w-64 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                  <div className="bg-medium_purple rounded-md shadow-lg shadow-deep_purple/50 overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.path}
                        className="block px-4 py-3 hover:bg-deep_purple transition-colors"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* <Link href="/login" className="text-light_gray_text hover:text-bright_magenta transition-colors">
            Login
          </Link> */}
          <Link href="/Contact" className="btn-primary">
            Start Creating
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-light_gray_text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "lg:hidden fixed top-[73px] left-0 w-full bg-deep_purple shadow-lg z-50 transition-all duration-300", 
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
                    className="w-full flex justify-between items-center text-left py-3 px-2 text-lg border-b border-medium_purple/30"
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
                        className="block py-2 px-2 hover:text-bright_magenta"
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
                  className="block py-3 px-2 text-lg border-b border-medium_purple/30 hover:text-bright_magenta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-3 mt-6 mb-4">
            {/* <Link 
              href="/login" 
              className="block w-full text-center py-3 border border-light_gray_text/50 rounded-md hover:border-bright_magenta hover:text-bright_magenta transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link> */}
            <Link 
              href="/Contact" 
              className="btn-primary w-full text-center py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Creating
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
