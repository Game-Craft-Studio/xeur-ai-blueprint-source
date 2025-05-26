
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code, Cpu, Globe, Lock, Server, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Platform = () => {
  const features = [
    {
      icon: <Cpu size={24} className="text-electric_blue" />,
      name: "Advanced AI Models",
      description: "Proprietary deep learning models specifically designed for game creation, understanding context and intent."
    },
    {
      icon: <Globe size={24} className="text-electric_blue" />,
      name: "Cross-Platform Output",
      description: "Export games to web, mobile, desktop and console platforms with automatic optimization."
    },
    {
      icon: <Zap size={24} className="text-electric_blue" />,
      name: "Real-Time Generation",
      description: "Watch your game take shape in minutes, with instant feedback and iteration capabilities."
    },
    {
      icon: <Code size={24} className="text-electric_blue" />,
      name: "Code & Asset Access",
      description: "Full access to generated game code and assets for customization and advanced tweaking."
    },
    {
      icon: <Server size={24} className="text-electric_blue" />,
      name: "Cloud Infrastructure",
      description: "Powerful cloud rendering and computation eliminates the need for expensive hardware."
    },
    {
      icon: <Lock size={24} className="text-electric_blue" />,
      name: "IP Protection",
      description: "All your creations and ideas remain 100% yours, with robust privacy controls."
    }
  ];

  const exportPlatforms = [
    "Web (HTML5)",
    "iOS",
    "Android",
    "Windows",
    "macOS",
    "Linux",
    "Unity Integration",
    "Unreal Engine Integration"
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-hero-pattern">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Powerhouse Behind <span className="text-electric_blue">Your Creations</span>
            </h1>
            <p className="text-xl text-light_gray_text/80 mb-8">
              Explore the advanced AI and technology that makes XEUR.AI revolutionary.
              We've built the most powerful game creation platform ever—so you don't have to.
            </p>
          </div>
        </div>
      </div>
      
      {/* Core Technology */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Indigenous <span className="text-bright_magenta">AI Models</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-deep_purple border-light_purple/30 shadow-xl card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-light_gray_text">Eureka Engine</CardTitle>
                <CardDescription className="text-light_gray_text/70">
                  Game Logic and Gameplay Generation
                </CardDescription>
              </CardHeader>
              <CardContent className="text-light_gray_text/80">
                <p className="mb-4">
                  The heart of XEUR.AI, Eureka understands game mechanics, physics, rules, and 
                  player interactions. It transforms natural language descriptions into 
                  fully functional game logic and code.
                </p>
                <p>
                  Built on a foundation of over 10,000 game patterns and mechanics, Eureka can 
                  generate everything from simple puzzles to complex strategy systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-deep_purple border-light_purple/30 shadow-xl card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-light_gray_text">Galileo World Builder</CardTitle>
                <CardDescription className="text-light_gray_text/70">
                  Visual Asset and Environment Generator
                </CardDescription>
              </CardHeader>
              <CardContent className="text-light_gray_text/80">
                <p className="mb-4">
                  Galileo specializes in creating cohesive visual styles and assets for your game. 
                  From characters and environments to UI elements, it ensures a consistent 
                  aesthetic throughout your creation.
                </p>
                <p>
                  With advanced understanding of art styles, color theory, and visual storytelling,
                  Galileo generates assets that perfectly match your game's mood and theme.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-medium_purple/30 rounded-lg p-8 border border-light_purple/30">
            <h3 className="text-2xl font-bold mb-4 text-electric_blue">Indigenous Technology</h3>
            <p className="text-lg text-light_gray_text/90 mb-4">
              Built in India for the world, our AI models represent cutting-edge innovation in game creation technology.
              We've developed proprietary architectures specifically for understanding and generating interactive experiences.
            </p>
            <p className="text-lg text-light_gray_text/90">
              Unlike general-purpose AI, our models are trained specifically for game development,
              understanding game mechanics, player psychology, and visual design principles.
            </p>
          </div>
        </div>
      </div>
      
      {/* Key Features */}
      <div id="features" className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Unprecedented <span className="text-tech_green">Capabilities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30 card-hover">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-light_gray_text/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Output & Export */}
      <div id="technology" className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Production-Ready, <span className="text-bright_magenta">Cross-Platform</span>
          </h2>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            Create once, deploy everywhere. XEUR.AI generates games that work seamlessly
            across multiple platforms with automatic optimizations.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {exportPlatforms.map((platform, index) => (
              <div key={index} className="bg-medium_purple/30 rounded-lg p-4 text-center border border-light_purple/30 card-hover">
                <p>{platform}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/Pricing" className="btn-primary">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Platform;
