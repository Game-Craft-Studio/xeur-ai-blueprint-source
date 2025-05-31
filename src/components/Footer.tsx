import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-near_black border-t border-bright_magenta/20 py-12'>
      <div className='container-custom'>
        <div className='text-center mb-8'>
          <div className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green mb-4'>
            XEUR.AI
          </div>
          <p className='text-light_gray_text/80 max-w-2xl mx-auto mb-6'>
            Alpha platform revolutionizing game development with AI-powered automation.
          </p>
          
          {/* Partnership Badges */}
          <div className='flex justify-center items-center gap-6 mb-8 opacity-60'>
            <span className='text-sm text-light_gray_text/60'>Microsoft for Startups</span>
            <span className='text-light_gray_text/40'>•</span>
            <span className='text-sm text-light_gray_text/60'>NVIDIA Inception</span>
            <span className='text-light_gray_text/40'>•</span>
            <span className='text-sm text-light_gray_text/60'>Google for Startups</span>
          </div>
        </div>

        {/* Links */}
        <div className='flex flex-wrap justify-center gap-8 mb-8 text-sm'>
          <a 
            href="https://www.youtube.com/watch?v=XtI4AndkV24"
            target="_blank"
            rel="noopener noreferrer"
            className='text-light_gray_text/70 hover:text-tech_green transition-colors'
          >
            Platform Demo
          </a>
          <a 
            href="https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source"
            target="_blank"
            rel="noopener noreferrer"
            className='text-light_gray_text/70 hover:text-purple-400 transition-colors'
          >
            GitHub
          </a>
          <a 
            href="mailto:harshit@cpgplay.com"
            className='text-light_gray_text/70 hover:text-bright_magenta transition-colors'
          >
            Investor Relations
          </a>
          <a 
            href="mailto:rishav@cpgplay.com"
            className='text-light_gray_text/70 hover:text-tech_green transition-colors'
          >
            Partnerships
          </a>
        </div>

        {/* Company Address */}
        <div className='text-center text-light_gray_text/60 text-sm mb-8'>
          <div className='mb-2 font-semibold'>XEUR.AI by CPG Play</div>
          <div className='space-y-1'>
            <div>NETCO Office Space, PK 28, Block L-4</div>
            <div>Neechi Mangali, Ludhiana, Punjab - 141123, India</div>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center text-light_gray_text/50 text-sm border-t border-bright_magenta/10 pt-8'>
          <p>&copy; 2025 XEUR.AI by CPG Play. Alpha platform transforming game development.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;