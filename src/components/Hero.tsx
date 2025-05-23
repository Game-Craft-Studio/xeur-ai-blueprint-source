
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-near_black via-transparent to-near_black z-0"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-deep_purple/30 blur-3xl animate-pulse-soft z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-medium_purple/20 blur-3xl animate-pulse-soft z-0" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6">
            Content Creation Just Went{" "}
            <span className="text-bright_magenta animate-pulse-soft">God Mode</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-light_gray_text/90">
            Create complete, production-ready games with a single prompt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Contact" className="btn-primary text-center">
              Start Creating Now
            </Link>
            <Link href="/demo" className="btn-secondary text-center">
              Watch Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative code-like elements */}
      <div className="absolute bottom-10 left-4 md:left-10 text-medium_purple/30 font-mono text-sm hidden md:block">
        <div>{"<xeur>"}</div>
        <div className="pl-4">{"<ai model='galileo' />"}</div>
        <div className="pl-4">{"<prompt>Create a racing game</prompt>"}</div>
        <div>{"</xeur>"}</div>
      </div>
    </div>
  );
};

export default Hero;
