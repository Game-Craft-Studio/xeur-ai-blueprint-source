
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, Code, Video } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: <UserPlus size={24} className="text-light_gray_text" />,
      name: "Aspiring Creators",
      description: "Have a game idea but no coding skills? XEUR.AI removes all barriers, letting you create professional games with just your imagination.",
      link: "/use-cases/aspiring-creators",
      color: "from-bright_magenta/20 to-tech_green/20"
    },
    {
      icon: <Code size={24} className="text-light_gray_text" />,
      name: "Indie Developers",
      description: "Accelerate your development process. Prototype in minutes, iterate rapidly, and focus on what makes your game unique.",
      link: "/use-cases/indie-developers",
      color: "from-electric_blue/20 to-tech_green/20"
    },
    {
      icon: <Video size={24} className="text-light_gray_text" />,
      name: "Content Influencers",
      description: "Create custom games for your audience. Generate unique content that sets you apart and builds deeper engagement.",
      link: "/use-cases/content-influencers",
      color: "from-rich_gold/20 to-bright_magenta/20"
    }
  ];

  return (
    <section className="py-20 bg-near_black">
      <div className="container-custom">
        <h2 className="text-center mb-4">Empowering All Creators</h2>
        <p className="text-center text-light_gray_text/80 max-w-2xl mx-auto mb-16">
          XEUR.AI democratizes game creation, enabling everyone from beginners to professionals to bring their ideas to life.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden card-hover`}
            >
              <div className={`bg-gradient-to-br ${audience.color} p-6 h-full flex flex-col`}>
                <div className="bg-near_black/30 backdrop-blur-sm p-3 rounded-full w-fit mb-4">
                  {audience.icon}
                </div>
                <h3 className="text-xl mb-3">{audience.name}</h3>
                <p className="text-light_gray_text/90 mb-6 flex-grow">{audience.description}</p>
                <Link 
                  to={audience.link}
                  className="flex items-center gap-2 text-white hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
