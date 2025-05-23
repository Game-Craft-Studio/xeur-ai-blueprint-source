
import React from "react";
import Link from "next/link";
const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-deep_purple to-bright_magenta relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-hero-pattern mix-blend-overlay opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Enter God Mode?</h2>
          
          <p className="text-lg mb-8 text-white/90">
            Join the creative revolution and build the game of your dreams in minutes, not months.
          </p>
          
          <Link href="/Contact" className="btn-primary bg-white text-bright_magenta hover:bg-white/90 px-10 py-4 text-lg">
            Start Creating
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
