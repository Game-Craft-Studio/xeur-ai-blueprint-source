
import React from "react";
import { Zap, Infinity, Clock, Globe, Terminal, Palette } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap size={24} className="text-tech_green" />,
      title: "Zero Coding Required",
      description: "Create complete games using simple text prompts without writing a single line of code."
    },
    {
      icon: <Clock size={24} className="text-tech_green" />,
      title: "Minutes, Not Months",
      description: "Generate playable games in minutes that would traditionally take teams months or years."
    },
    {
      icon: <Terminal size={24} className="text-tech_green" />,
      title: "Complete Control",
      description: "Refine your game with precise prompts and adjustments until it matches your vision."
    },
    {
      icon: <Globe size={24} className="text-tech_green" />,
      title: "Cross-Platform Ready",
      description: "Export your games to multiple platforms including web, mobile, and desktop."
    },
    {
      icon: <Palette size={24} className="text-tech_green" />,
      title: "Stunning Visuals",
      description: "AI-generated art assets and animations that rival professional game studios."
    },
    {
      icon: <Infinity size={24} className="text-tech_green" />,
      title: "Unlimited Potential",
      description: "The only limit is your imagination. Any game genre or style is possible."
    }
  ];

  return (
    <section className="section-padding bg-near_black relative">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-tech_green/5 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-header">
          Why <span className="text-bright_magenta">XEUR.AI</span> is a Game Changer
        </h2>
        <p className="section-subheader">
          Our revolutionary platform removes all barriers to game creation, enabling anyone to bring their visions to life.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="brand-card bg-near_black/70 backdrop-blur-sm border-tech_green/20"
            >
              <div className="bg-tech_green/10 p-3 rounded-full w-fit mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl mb-2">{benefit.title}</h3>
              <p className="text-light_gray_text/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
