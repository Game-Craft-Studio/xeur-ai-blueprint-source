
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      title: "For Aspiring Creators",
      description: "No coding or design skills? No problem! Turn your game ideas into reality with XEUR.AI.",
      path: "/use-cases/aspiring-creators",
      image: "/assets/aspiring-creators.jpg"
    },
    {
      title: "For Indie Developers",
      description: "Accelerate your game development process and focus on what matters most - creativity and innovation.",
      path: "/use-cases/indie-developers",
      image: "/assets/indie-developers.jpg"
    },
    {
      title: "For Content Influencers",
      description: "Create engaging, branded games for your audience. Boost engagement and open new revenue streams.",
      path: "/use-cases/content-influencers",
      image: "/assets/content-influencers.jpg"
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-gradient">XEUR.AI</span> For Every Creator
          </h1>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Our platform adapts to your needs, whether you're just starting out or are an experienced developer looking to streamline your workflow.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-medium_purple border-light_purple/30 card-hover">
                <CardHeader>
                  <CardTitle className="text-light_gray_text">{useCase.title}</CardTitle>
                  <CardDescription className="text-light_gray_text/70">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    to={useCase.path} 
                    className="inline-flex items-center text-bright_magenta hover:text-bright_magenta/80 transition-colors"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UseCases;
