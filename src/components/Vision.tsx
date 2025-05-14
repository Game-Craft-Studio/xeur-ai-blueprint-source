
import React from "react";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-deep_purple to-medium_purple relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-rich_gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-bright_magenta/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">
            Join the Revolution: 
            <span className="block bg-gradient-to-r from-rich_gold to-bright_magenta bg-clip-text text-transparent mt-1">
              The Future is Now
            </span>
          </h2>
          
          <p className="text-lg mb-8 text-light_gray_text/90">
            We're building more than a platform—we're creating a paradigm shift in digital creation. 
            XEUR.AI represents the convergence of artificial intelligence and human creativity, 
            democratizing game development and empowering the next generation of creators.
          </p>
          
          <div className="mb-8">
            <div className="text-sm font-semibold uppercase tracking-wider mb-2 text-rich_gold">Made in India, for the World</div>
            <p className="text-light_gray_text/80">
              Proudly developed in India with indigenous AI technology, XEUR.AI represents the 
              cutting edge of India's growing influence in global technology innovation.
            </p>
          </div>
          
          <Link to="/about" className="btn-secondary">
            Explore Our Full Vision
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Vision;
