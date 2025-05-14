
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep_purple pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-bold mb-4">XEUR.AI</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-bright_magenta transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-bright_magenta transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-bright_magenta transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-bright_magenta transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-bold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/platform#features" className="hover:text-bright_magenta transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/platform#technology" className="hover:text-bright_magenta transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-bright_magenta transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="hover:text-bright_magenta transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-bright_magenta transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="https://discord.gg/xeur" target="_blank" rel="noreferrer" className="hover:text-bright_magenta transition-colors">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-bright_magenta transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-bright_magenta transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-bright_magenta transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-bright_magenta transition-colors">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-bright_magenta transition-colors">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-bright_magenta transition-colors">
            <Youtube size={24} />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="mailto:contact@xeur.ai" className="hover:text-bright_magenta transition-colors">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-light_gray_text/70">
          <p>© {currentYear} XEUR.AI. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center gap-1">
            Made in 
            <span className="text-tech_green">India</span>,
            for the 
            <span className="text-electric_blue">World</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
