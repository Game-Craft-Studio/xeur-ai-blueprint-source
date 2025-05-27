import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Users, Lightbulb, Heart, Star } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      id: "aspiring-creators",
      title: "For Aspiring Creators",
      icon: <Heart className="w-12 h-12 text-bright_magenta" />,
      description: "Turn your creative dreams into reality without learning complex programming languages or expensive software.",
      highlights: [
        "Create your first game in under an hour",
        "No technical background required", 
        "Built-in tutorials and guidance",
        "Community support and inspiration"
      ],
      gradient: "from-bright_magenta to-pink-400",
      link: "/use-cases/aspiring-creators"
    },
    {
      id: "indie-developers", 
      title: "For Indie Developers",
      icon: <Lightbulb className="w-12 h-12 text-tech_green" />,
      description: "Accelerate your development process and focus on innovation rather than repetitive coding tasks.",
      highlights: [
        "Rapid prototyping and iteration",
        "Focus on game design over technical implementation",
        "Multi-platform deployment capabilities",
        "Advanced customization options"
      ],
      gradient: "from-tech_green to-cyan-400",
      link: "/use-cases/indie-developers"
    },
    {
      id: "content-influencers",
      title: "For Content Influencers", 
      icon: <Star className="w-12 h-12 text-purple-400" />,
      description: "Create interactive content and games that engage your audience in entirely new ways.",
      highlights: [
        "Interactive content for social media",
        "Branded gaming experiences",
        "Audience engagement tools",
        "Monetization opportunities"
      ],
      gradient: "from-purple-400 to-indigo-400",
      link: "/use-cases/content-influencers"
    }
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Lightning Fast Creation",
      description: "Go from idea to playable game in minutes, not months"
    },
    {
      icon: "🎯", 
      title: "No Code Required",
      description: "Natural language input makes game creation accessible to everyone"
    },
    {
      icon: "🌐",
      title: "Multi-Platform Ready", 
      description: "Deploy to web, mobile, desktop, and Web3 platforms instantly"
    },
    {
      icon: "🎨",
      title: "Complete Asset Generation",
      description: "AI creates graphics, audio, and game logic automatically"
    },
    {
      icon: "💡",
      title: "Intelligent Suggestions",
      description: "AI provides creative suggestions to enhance your game concepts"
    },
    {
      icon: "🚀",
      title: "Instant Publishing",
      description: "Share your games immediately or submit to app stores"
    }
  ];

  const successStories = [
    {
      category: "Aspiring Creator",
      story: "Sarah's mobile puzzle game reached 100K downloads in her first month",
      metric: "100K+ downloads",
      timeFrame: "First month"
    },
    {
      category: "Indie Developer", 
      story: "Team of 2 launched 5 games in 6 months instead of their usual 1 per year",
      metric: "5x productivity",
      timeFrame: "6 months"
    },
    {
      category: "Content Influencer",
      story: "Gaming YouTuber created custom games for each episode, growing subscriber base by 300%",
      metric: "300% growth",
      timeFrame: "3 months"
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep_purple/20 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta via-purple-400 to-tech_green animate-gradient">
                Your Vision, Our Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Discover how XEUR.AI empowers creators from every background to bring their game ideas to life, 
              regardless of technical expertise or resources.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-tech_green/20 to-cyan-400/20 border border-tech_green/30 rounded-full text-tech_green text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Empowering Creators Worldwide • No Barriers
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Grid */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who We <span className="text-bright_magenta">Empower</span>
            </h2>
            <p className="text-lg text-light_gray_text/70 max-w-3xl mx-auto">
              From first-time creators to seasoned developers, XEUR.AI adapts to your needs and amplifies your creative potential.
            </p>
          </div>
          
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div 
                key={useCase.id}
                className={`bg-gradient-to-br from-medium_purple/20 to-deep_purple/20 rounded-2xl p-8 md:p-12 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${useCase.gradient} mb-6`}>
                      {useCase.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-lg text-light_gray_text/80 mb-6">
                      {useCase.description}
                    </p>
                    <Link 
                      href={useCase.link}
                      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${useCase.gradient} rounded-xl hover:scale-105 shadow-lg hover:shadow-xl group`}
                    >
                      Explore Use Case
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-near_black/50 rounded-xl p-6 border border-light_purple/20">
                      <h4 className="text-xl font-semibold mb-4 text-bright_magenta">Key Benefits</h4>
                      <ul className="space-y-3">
                        {useCase.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-tech_green rounded-full mr-3 mt-2 shrink-0"></div>
                            <span className="text-light_gray_text/80">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Universal Benefits */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Universal <span className="text-tech_green">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-medium_purple/20 rounded-xl p-6 border border-light_purple/30 hover:border-tech_green/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-tech_green">{benefit.title}</h3>
                <p className="text-light_gray_text/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gradient-to-r from-tech_green/10 to-bright_magenta/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real <span className="text-bright_magenta">Success Stories</span>
            </h2>
            <p className="text-lg text-light_gray_text/70">
              See how creators from different backgrounds achieved remarkable results with XEUR.AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-near_black/60 rounded-xl p-6 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300">
                <div className="text-center mb-4">
                  <span className="bg-bright_magenta/20 text-bright_magenta px-3 py-1 rounded-full text-sm font-semibold">
                    {story.category}
                  </span>
                </div>
                <p className="text-light_gray_text/80 mb-4 text-center">{story.story}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech_green mb-1">{story.metric}</div>
                  <div className="text-light_gray_text/60 text-sm">{story.timeFrame}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start <span className="text-bright_magenta">Creating?</span>
            </h2>
            <p className="text-xl text-light_gray_text/80 mb-8">
              Join thousands of creators who have already discovered the power of AI-assisted game development. 
              Your journey starts with a single idea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#demo" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
              >
                <span className="relative z-10">Try XEUR.AI Now</span>
              </Link>
              <Link 
                href="/solutions" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UseCases;