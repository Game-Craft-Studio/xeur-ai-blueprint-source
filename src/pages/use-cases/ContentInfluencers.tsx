
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Users, TrendingUp, DollarSign, Heart } from "lucide-react";

const ContentInfluencers = () => {
  const advantages = [
    {
      title: "Unique Engagement",
      description: "Stand out from other creators with interactive experiences your audience can play, not just watch.",
      icon: <Users className="h-8 w-8 text-bright_magenta" />
    },
    {
      title: "Brand Extension",
      description: "Bring your personal brand into the gaming space without technical knowledge or massive budgets.",
      icon: <Heart className="h-8 w-8 text-bright_magenta" />
    },
    {
      title: "New Revenue Streams",
      description: "Create premium content, exclusive games, or in-game monetization opportunities.",
      icon: <DollarSign className="h-8 w-8 text-bright_magenta" />
    },
    {
      title: "Growth Catalyst",
      description: "Attract new audiences through unique content that can go viral across gaming communities.",
      icon: <TrendingUp className="h-8 w-8 text-bright_magenta" />
    }
  ];

  const useCases = [
    "Custom branded games featuring your persona or content themes",
    "Interactive narrative experiences that extend your storytelling",
    "Exclusive content for subscribers or members",
    "Promotional games for brand partnerships and sponsorships",
    "Community challenges and competitions built around custom games",
    "Educational content transformed into interactive experiences"
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-hero-pattern">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Elevate Your <span className="text-bright_magenta">Content Creation</span> With Interactive Experiences
            </h1>
            <p className="text-xl text-light_gray_text/80 mb-8">
              As an influencer or content creator, stand out by offering your audience more than videos—give them games that feature your brand, personality, and content themes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup" className="btn-primary">
                Transform Your Content
              </Link>
              <Link to="#creator-advantages" className="btn-secondary">
                Discover Benefits
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Benefits */}
      <div id="creator-advantages" className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Content Creators Choose <span className="text-bright_magenta">XEUR.AI</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30 flex gap-4 card-hover">
                <div className="shrink-0">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-light_gray_text/80">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            From Content to Interactive Experience
          </h2>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            Creating games with XEUR.AI is as simple as creating any other content:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-medium_purple/50 rounded-lg p-6 border border-light_purple/30 text-center card-hover">
              <div className="w-12 h-12 rounded-full bg-bright_magenta flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Describe Your Game</h3>
              <p className="text-light_gray_text/80">
                Simply describe the game you want, including your branding, themes, and gameplay style.
              </p>
            </div>
            
            <div className="bg-medium_purple/50 rounded-lg p-6 border border-light_purple/30 text-center card-hover">
              <div className="w-12 h-12 rounded-full bg-bright_magenta flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Review & Refine</h3>
              <p className="text-light_gray_text/80">
                XEUR.AI generates your game. Preview, test, and refine until it matches your vision.
              </p>
            </div>
            
            <div className="bg-medium_purple/50 rounded-lg p-6 border border-light_purple/30 text-center card-hover">
              <div className="w-12 h-12 rounded-full bg-bright_magenta flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Share & Monetize</h3>
              <p className="text-light_gray_text/80">
                Publish your game to your audience via web, mobile, or other platforms and start monetizing.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Use Cases */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Creative Ways to Use <span className="text-bright_magenta">XEUR.AI</span> as a Content Creator
          </h2>
          
          <div className="bg-purple-gradient rounded-lg p-8 border border-light_purple/30 max-w-4xl mx-auto">
            <ul className="space-y-4">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-bright_magenta text-xl font-bold">•</span>
                  <span className="text-lg">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/signup" className="btn-primary">
              Create Your First Interactive Experience
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContentInfluencers;
