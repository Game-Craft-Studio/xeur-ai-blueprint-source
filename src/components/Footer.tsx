
import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep_purple pt-12 md:pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">XEUR.AI</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/platform#features" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/platform#technology" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mt-6 md:mt-0">
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="https://discord.gg/xeur" target="_blank" rel="noreferrer" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="mt-6 md:mt-0">
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-bright_magenta transition-colors text-sm md:text-base">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-8">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-bright_magenta transition-colors">
            <Linkedin size={22} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-bright_magenta transition-colors">
            <Twitter size={22} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-bright_magenta transition-colors">
            <Youtube size={22} />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="mailto:contact@xeur.ai" className="hover:text-bright_magenta transition-colors">
            <Mail size={22} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm text-light_gray_text/70 px-4">
          <p>© {currentYear} XEUR.AI. All rights reserved.</p>
          <p className="mt-1 flex flex-wrap items-center justify-center gap-1">
            <span>Made in</span> 
            <span className="text-tech_green">India</span>,
            <span>for the</span> 
            <span className="text-electric_blue">World</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
