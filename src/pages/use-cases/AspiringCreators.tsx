
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Check, XCircle } from "lucide-react";

const AspiringCreators = () => {
  const painPoints = [
    "Lack of technical coding skills",
    "Expensive software and tools",
    "Steep learning curve for game engines",
    "Years needed to master game development",
    "Limited resources for indie creators"
  ];

  const benefits = [
    {
      title: "No Code Required",
      description: "Create complete games using only text prompts - no coding, design, or animation skills needed."
    },
    {
      title: "Immediate Results",
      description: "See your game idea come to life in minutes, not months or years."
    },
    {
      title: "Cross-Platform Ready",
      description: "Publish your creations across multiple platforms with automatic optimizations."
    },
    {
      title: "Affordable Access",
      description: "Skip expensive software licenses and hardware requirements."
    },
    {
      title: "Learn While Creating",
      description: "Understand game development concepts through hands-on creation, not just theory."
    }
  ];

  const gameExamples = [
    "Casual puzzle adventures",
    "Visual novels with branching storylines",
    "Simple arcade-style games",
    "Interactive educational experiences",
    "Narrative-driven exploration games"
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-hero-pattern">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Have a Game Idea? <span className="text-bright_magenta">You're Now a Game Developer</span>
            </h1>
            <p className="text-xl text-light_gray_text/80 mb-8">
              XEUR.AI removes all barriers, letting your creativity shine without technical limitations.
              It's time to bring your imagination to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup" className="btn-primary">
                Start Creating Now
              </Link>
              <Link to="#how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pain Points Section */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The Old Way Was <span className="text-warning_red">Hard</span>. Not Anymore.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="text-warning_red shrink-0 mt-1" size={20} />
                  <p className="text-lg">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-medium_purple/50 rounded-lg p-6 border border-light_purple/30">
              <h3 className="text-2xl font-semibold mb-4">Traditional Game Development</h3>
              <p className="text-light_gray_text/80 mb-6">
                For decades, game creation has been locked behind technical barriers, requiring months or years
                of learning before you could create even the simplest games.
              </p>
              <p className="text-light_gray_text/80">
                This kept many creative minds from ever bringing their ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Solution & Benefits */}
      <div id="how-it-works" className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How <span className="text-bright_magenta">XEUR.AI</span> Empowers You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30 card-hover">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-tech_green">
                  <Check size={20} className="mr-2" /> {benefit.title}
                </h3>
                <p className="text-light_gray_text/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Example Projects */}
      <div className="py-16 bg-deep_purple/50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            What Will You Create?
          </h2>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            Even without any technical skills, you can create amazing games like these:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameExamples.map((example, index) => (
              <div key={index} className="bg-medium_purple rounded-lg p-6 text-center card-hover">
                <p className="text-lg font-medium">{example}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/signup" className="btn-primary">
              Start Your Creator Journey
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AspiringCreators;
