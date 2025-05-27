import React from 'react';
import Link from 'next/link';
import { Home, Search, ArrowLeft, Zap } from 'lucide-react';

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-near_black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-bright_magenta via-purple-400 to-tech_green bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-6">
            Looks like this page got lost in the AI creation process! 
            Don't worry, we're still revolutionizing game development.
          </p>
        </div>

        {/* XEUR.AI Branding */}
        <div className="mb-8 p-6 bg-medium_purple/20 rounded-xl border border-light_purple/30">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-bright_magenta mr-2" />
            <span className="text-2xl font-bold">
              <span className="text-bright_magenta">XEUR</span>
              <span className="text-white">.AI</span>
            </span>
          </div>
          <p className="text-light_gray_text/70">
            Create complete games in ~1 hour using just text prompts
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <Link 
            href="/solutions"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
          >
            <Search className="w-5 h-5 mr-2" />
            Explore Solutions
          </Link>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <p className="text-light_gray_text/60 mb-4">Or try these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/demo" className="text-tech_green hover:text-cyan-400 transition-colors">
              Watch Demo
            </Link>
            <Link href="/company-overview" className="text-tech_green hover:text-cyan-400 transition-colors">
              About Us
            </Link>
            <Link href="/nvidia-partnership" className="text-tech_green hover:text-cyan-400 transition-colors">
              NVIDIA Partnership
            </Link>
            <Link href="/contact" className="text-tech_green hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-4 bg-deep_purple/30 rounded-lg border border-purple-400/20">
          <p className="text-sm text-light_gray_text/60">
            <span className="text-purple-400 font-semibold">Fun Fact:</span> While you're here, 
            XEUR.AI could have generated multiple game prototypes! Our AI creates games 300X faster than traditional methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
