import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BetaSignupModal from "@/components/BetaSignupModal";
import Link from "next/link";
import { Play, Clock, Users, Zap, Globe, Sparkles, ChevronRight, Star } from "lucide-react";

const Demo = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const demoSteps = [
    {
      title: "1. Describe Your Game",
      description: "Use natural language to describe your game idea",
      example: '"Create an epic fantasy RPG with dragons, magic spells, and medieval kingdoms"',
      icon: "💬",
      time: "30 seconds"
    },
    {
      title: "2. AI Processes Your Idea", 
      description: "8 specialized AI models work together to understand and expand your concept",
      example: "XEUR.AI analyzes genre, mechanics, art style, and creates a comprehensive game plan",
      icon: "🧠",
      time: "2-3 minutes"
    },
    {
      title: "3. Complete Game Generated",
      description: "Everything needed for a playable game is created automatically",
      example: "3D models, textures, game logic, audio, UI elements, and platform-ready code",
      icon: "🎮",
      time: "45-55 minutes"
    },
    {
      title: "4. Deploy Anywhere",
      description: "Export your game to any platform with one click",
      example: "PC, Mobile, Web, PlayStation, Xbox, Nintendo Switch, or Web3 platforms",
      icon: "🚀",
      time: "5 minutes"
    }
  ];

  const demoHighlights = [
    { icon: <Clock className="w-6 h-6 text-bright_magenta" />, text: "~1 Hour Total", subtext: "vs 1+ Years Traditional" },
    { icon: <Zap className="w-6 h-6 text-tech_green" />, text: "No Coding", subtext: "Natural Language Only" },
    { icon: <Globe className="w-6 h-6 text-cyan-400" />, text: "Multi-Platform", subtext: "Deploy Everywhere" },
    { icon: <Sparkles className="w-6 h-6 text-purple-400" />, text: "Professional Quality", subtext: "Production Ready" }
  ];

  const gameExamples = [
    {
      title: "Epic Fantasy RPG",
      description: "Dragons, magic, medieval kingdoms",
      genre: "RPG",
      time: "58 minutes",
      platforms: ["PC", "Mobile", "Web"]
    },
    {
      title: "Space Combat Simulator",
      description: "Starships, cosmic battles, exploration",
      genre: "Action",
      time: "52 minutes", 
      platforms: ["PC", "Console", "VR"]
    },
    {
      title: "Educational Math Adventure",
      description: "Learning through puzzle-solving",
      genre: "Educational",
      time: "45 minutes",
      platforms: ["Mobile", "Web", "Tablet"]
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep_purple/30 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-bright_magenta/20 to-purple-400/20 border border-bright_magenta/30 rounded-full text-bright_magenta text-sm font-medium">
              <Play className="w-4 h-4 mr-2" />
              Live Demo Available
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Watch the <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta via-purple-400 to-tech_green animate-gradient">
                Game Creation Revolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              See how XEUR.AI transforms a simple text prompt into a complete, playable game in approximately one hour
            </p>
            
            {/* Demo Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              {demoHighlights.map((highlight, index) => (
                <div key={index} className="bg-medium_purple/20 rounded-xl p-4 border border-light_purple/30 text-center">
                  <div className="flex justify-center mb-2">
                    {highlight.icon}
                  </div>
                  <div className="text-sm font-semibold text-white">{highlight.text}</div>
                  <div className="text-xs text-light_gray_text/70">{highlight.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Demo Video */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-bright_magenta/20 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-bright_magenta/20 to-tech_green/20 animate-gradient"></div>
              <div className="relative bg-near_black/95 p-2">
                <iframe 
                  width="100%" 
                  height="600" 
                  src="https://www.youtube.com/embed/XtI4AndkV24" 
                  title="XEUR.AI Demo - Complete Game Creation in ~1 Hour" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Experience the Future of Game Development</h3>
              <p className="text-light_gray_text/80 mb-6 max-w-3xl mx-auto">
                This video demonstrates our alpha build creating a complete fantasy RPG from a simple text prompt. 
                Watch as our AI generates 3D models, game mechanics, audio, and deployment-ready code.
              </p>
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
              >
                <span className="relative z-10">Get Early Access</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Interactive Steps */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How XEUR.AI <span className="text-bright_magenta">Creates Games</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Interactive Step Navigation */}
              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer transition-all duration-300 rounded-xl p-6 border ${
                      activeStep === index 
                        ? 'bg-bright_magenta/20 border-bright_magenta/50' 
                        : 'bg-medium_purple/20 border-light_purple/30 hover:border-bright_magenta/30'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center mb-3">
                      <div className="text-3xl mr-4">{step.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        <div className="text-sm text-tech_green font-medium">{step.time}</div>
                      </div>
                    </div>
                    <p className="text-light_gray_text/80 mb-3">{step.description}</p>
                    <div className="bg-deep_purple/50 rounded-lg p-3 border border-light_purple/20">
                      <p className="text-sm text-light_gray_text/70 italic">{step.example}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Visual Demonstration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-deep_purple/50 to-medium_purple/30 rounded-2xl p-8 border border-light_purple/30">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{demoSteps[activeStep].icon}</div>
                    <h3 className="text-2xl font-bold text-bright_magenta mb-2">
                      {demoSteps[activeStep].title}
                    </h3>
                    <p className="text-light_gray_text/80">
                      {demoSteps[activeStep].description}
                    </p>
                  </div>
                  
                  <div className="bg-near_black/60 rounded-xl p-6 border border-light_purple/20">
                    <div className="text-sm text-tech_green mb-2">Example:</div>
                    <p className="text-light_gray_text/80 italic">
                      {demoSteps[activeStep].example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Games Created */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Real Games <span className="text-tech_green">Created with XEUR.AI</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gameExamples.map((game, index) => (
              <div key={index} className="bg-medium_purple/30 rounded-xl p-6 border border-light_purple/30 hover:border-tech_green/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-tech_green/20 text-tech_green px-3 py-1 rounded-full text-sm font-medium">
                    {game.genre}
                  </span>
                  <div className="flex items-center text-bright_magenta text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {game.time}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{game.title}</h3>
                <p className="text-light_gray_text/80 mb-4">{game.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform, platformIndex) => (
                    <span key={platformIndex} className="bg-purple-400/20 text-purple-400 px-2 py-1 rounded text-xs">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-light_gray_text/80 mb-6">
              These are real games created during our alpha testing phase. Each one was generated from a simple text description.
            </p>
            <button
              onClick={() => setIsBetaModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
            >
              Create Your Own Game
              <Sparkles className="w-5 h-5 ml-2 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical <span className="text-purple-400">Specifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">XEUR LLM Core</h3>
              <p className="text-sm text-light_gray_text/70">Proprietary model trained on 78,000 games</p>
            </div>
            
            <div className="bg-bright_magenta/10 rounded-xl p-6 border border-bright_magenta/30 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2 text-bright_magenta">8 AI Models</h3>
              <p className="text-sm text-light_gray_text/70">Specialized for different aspects of game creation</p>
            </div>
            
            <div className="bg-tech_green/10 rounded-xl p-6 border border-tech_green/30 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-lg font-semibold mb-2 text-tech_green">Multi-Platform</h3>
              <p className="text-sm text-light_gray_text/70">Deploy to PC, Mobile, Web, Console, VR</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl p-8 border border-cyan-400/30 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-400 mr-2" />
                <h3 className="text-2xl font-bold">NVIDIA Partnership</h3>
              </div>
              <p className="text-light_gray_text/80 mb-4">
                XEUR.AI is proud to be a member of the NVIDIA Inception program, giving us access to cutting-edge AI infrastructure and Capital Connect for funding opportunities.
              </p>
              <Link href="/nvidia-partnership" className="text-tech_green hover:text-cyan-400 transition-colors font-medium">
                Learn more about our NVIDIA collaboration →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-bright_magenta/20 to-tech_green/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your <span className="text-bright_magenta">First Game?</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Join thousands of creators who are already using XEUR.AI to bring their game ideas to life. 
            No coding experience required – just your imagination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setIsBetaModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
            >
              <span className="relative z-10">Join Beta Launch</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
            
            <Link
              href="/solutions"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
            >
              Explore Solutions
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <p className="text-sm text-light_gray_text/70">
            Beta launching Q3 2025 • Limited spots available • No credit card required
          </p>
        </div>
      </div>
      
      <Footer />
      
      {/* Beta Signup Modal */}
      <BetaSignupModal isOpen={isBetaModalOpen} onClose={() => setIsBetaModalOpen(false)} />
    </div>
  );
};

export default Demo;