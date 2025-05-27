import React from 'react';
import Link from 'next/link';
import { Home, RefreshCw, AlertTriangle, Zap } from 'lucide-react';

const Custom500 = () => {
  return (
    <div className="min-h-screen bg-near_black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 500 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            500
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Server Error
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-6">
            Our AI models are having a temporary glitch! Our team has been notified 
            and we're working to fix this issue.
          </p>
        </div>

        {/* XEUR.AI Branding */}
        <div className="mb-8 p-6 bg-red-500/10 rounded-xl border border-red-500/30">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-400 mr-2" />
            <span className="text-2xl font-bold">
              <span className="text-bright_magenta">XEUR</span>
              <span className="text-white">.AI</span>
            </span>
          </div>
          <p className="text-light_gray_text/70">
            Even our revolutionary AI needs a moment to reboot sometimes!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            onClick={() => window.location.reload()}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl hover:from-red-600 hover:to-orange-500 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-orange-500/50"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
        </div>

        {/* Status Information */}
        <div className="mb-8 p-4 bg-medium_purple/20 rounded-lg border border-light_purple/30">
          <p className="text-light_gray_text/70 mb-2">
            <strong>What happened?</strong> A temporary server error occurred.
          </p>
          <p className="text-light_gray_text/70 mb-2">
            <strong>What we're doing:</strong> Our team has been automatically notified.
          </p>
          <p className="text-light_gray_text/70">
            <strong>What you can do:</strong> Try refreshing the page or come back in a few minutes.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <p className="text-light_gray_text/60 mb-4">Need immediate assistance?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a 
              href="mailto:support@xeur.ai" 
              className="text-tech_green hover:text-cyan-400 transition-colors"
            >
              support@xeur.ai
            </a>
            <Link href="/contact" className="text-tech_green hover:text-cyan-400 transition-colors">
              Contact Us
            </Link>
            <Link href="/company-overview" className="text-tech_green hover:text-cyan-400 transition-colors">
              About XEUR.AI
            </Link>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-4 bg-deep_purple/30 rounded-lg border border-purple-400/20">
          <p className="text-sm text-light_gray_text/60">
            <span className="text-purple-400 font-semibold">Did you know?</span> XEUR.AI's 8 specialized AI models 
            work together to create games 300X faster than traditional development. Sometimes even AI needs a coffee break! ☕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom500;
