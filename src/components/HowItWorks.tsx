
import React from "react";
import { MessageSquarePlus, Cpu, Play, Share2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquarePlus size={24} className="text-electric_blue" />,
      title: "Create Your Prompt",
      description: "Describe your game idea in plain language. Be as specific or creative as you want."
    },
    {
      icon: <Cpu size={24} className="text-electric_blue" />,
      title: "AI Generation",
      description: "Our Eureka and Galileo AI models translate your vision into a complete game."
    },
    {
      icon: <Play size={24} className="text-electric_blue" />,
      title: "Play & Refine",
      description: "Instantly play your creation and make adjustments with simple text commands."
    },
    {
      icon: <Share2 size={24} className="text-electric_blue" />,
      title: "Export & Share",
      description: "Download as a standalone game or share directly with your audience."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-near_black to-deep_purple relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-electric_blue/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-electric_blue/5 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <h2 className="text-center mb-16">
          From Prompt to Playable: 
          <span className="block text-electric_blue mt-1">The Magic Explained</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-near_black/70 backdrop-blur-sm p-6 rounded-lg border border-electric_blue/20 flex flex-col items-center text-center card-hover"
            >
              <div className="bg-electric_blue/10 p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <div className="text-electric_blue font-bold text-xl mb-1">Step {index + 1}</div>
              <h3 className="text-xl mb-2">{step.title}</h3>
              <p className="text-light_gray_text/80">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative py-4 px-8 bg-near_black/80 backdrop-blur-sm rounded-lg inline-block">
            <code className="text-electric_blue">
              prompt: "Create a racing game set in a futuristic neon city with hover cars"
            </code>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-near_black/80"></div>
          </div>
          <div className="mt-12">
            <div className="bg-near_black/60 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-electric_blue/30 max-w-3xl mx-auto">
              <div className="flex items-center justify-center h-48 md:h-64 bg-medium_purple/20 rounded">
                <div className="text-center">
                  <div className="text-electric_blue mb-2">[ Game Visualization ]</div>
                  <div className="text-sm text-light_gray_text/70">Futuristic racing game generated from the prompt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
