import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Bell, Code, Award } from "lucide-react";

const Leverage = () => {
  const leverageSections = [
    {
      id: "updates",
      title: "Project Evolution & Updates",
      description: "Track our development journey, new feature unveilings, and strategic milestones.",
      icon: <Bell className="w-8 h-8 text-purple-400" />,
      link: "/leverage/updates",
      buttonText: "View Updates",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      id: "changelogs",
      title: "Technical Insights & Changelogs", 
      description: "Delve into detailed release notes, API updates, and the mechanics of our innovation.",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      link: "/leverage/changelogs",
      buttonText: "Access Logs",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: "media",
      title: "XEUR.AI in the Spotlight",
      description: "Discover our presence in the media, industry accolades, and thought leadership features.",
      icon: <Award className="w-8 h-8 text-green-400" />,
      link: "/leverage/media",
      buttonText: "See Coverage",
      gradient: "from-green-400 to-green-600"
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
                XEUR.AI: Pioneering Progress, Demonstrable Impact
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Explore our latest advancements, technical deep-dives, and how we're shaping the AI landscape.
            </p>
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-gradient-to-r from-tech_green/20 to-cyan-400/20 border border-tech_green/30 rounded-full text-tech_green text-sm font-medium">
              <div className="w-2 h-2 bg-tech_green rounded-full mr-2 animate-pulse"></div>
              Transparency in Innovation • Real-Time Updates
            </div>
          </div>

          {/* Abstract Visual */}
          <div className="relative max-w-3xl mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-bright_magenta/20 via-purple-400/20 to-tech_green/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-medium_purple/10 to-deep_purple/20 rounded-3xl p-8 border border-light_purple/30">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-16 bg-gradient-to-r from-bright_magenta/30 to-purple-400/30 rounded-lg"></div>
                <div className="h-16 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-lg"></div>
                <div className="h-16 bg-gradient-to-r from-green-400/30 to-tech_green/30 rounded-lg"></div>
              </div>
              <div className="mt-4 text-center text-light_gray_text/60 text-sm">
                Information Flow • Interconnected Growth • Dynamic Progress
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Triumvirate Navigation - The Pillars of Leverage */}
      <div className="py-16 bg-gradient-to-r from-deep_purple/30 to-medium_purple/20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Pillars of <span className="text-bright_magenta">Leverage</span>
          </h2>
          <p className="text-lg text-center text-light_gray_text/70 mb-12 max-w-3xl mx-auto">
            Three distinct gateways to understand our journey, technology, and impact
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leverageSections.map((section, index) => (
              <div 
                key={section.id}
                className="bg-gradient-to-br from-medium_purple/20 to-deep_purple/20 rounded-2xl p-8 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${section.gradient} mb-6 group-hover:scale-110 transition-all duration-300`}>
                    {section.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-bright_magenta transition-colors">
                    {section.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-light_gray_text/80 mb-8 leading-relaxed">
                    {section.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Link 
                    href={section.link}
                    className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${section.gradient} rounded-xl hover:scale-105 shadow-lg hover:shadow-xl w-full group-hover:shadow-2xl`}
                  >
                    {section.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Progress Metrics */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-tech_green">Dynamic Progress</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bright_magenta mb-2">
                47+
              </div>
              <div className="text-light_gray_text/70">Feature Releases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-tech_green mb-2">
                23
              </div>
              <div className="text-light_gray_text/70">Technical Updates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                12
              </div>
              <div className="text-light_gray_text/70">Media Features</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                99.7%
              </div>
              <div className="text-light_gray_text/70">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Philosophy */}
      <div className="py-16 bg-gradient-to-r from-tech_green/10 to-bright_magenta/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our <span className="text-bright_magenta">Innovation Philosophy</span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-light_gray_text/80 leading-relaxed mb-8">
                At XEUR.AI, transparency isn't just a value—it's a commitment. Every advancement, 
                every breakthrough, and every challenge is documented and shared with our community. 
                We believe that innovation thrives in the light of openness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-near_black/50 rounded-xl p-6 border border-light_purple/20">
                  <h3 className="text-xl font-semibold mb-3 text-bright_magenta">Radical Transparency</h3>
                  <p className="text-light_gray_text/70">
                    Every development milestone, technical decision, and strategic pivot is shared openly with our community.
                  </p>
                </div>
                <div className="bg-near_black/50 rounded-xl p-6 border border-light_purple/20">
                  <h3 className="text-xl font-semibold mb-3 text-tech_green">Continuous Evolution</h3>
                  <p className="text-light_gray_text/70">
                    We iterate rapidly, learn constantly, and evolve our technology based on real-world feedback and data.
                  </p>
                </div>
                <div className="bg-near_black/50 rounded-xl p-6 border border-light_purple/20">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Impact Measurement</h3>
                  <p className="text-light_gray_text/70">
                    Every feature, every update is measured against our core mission of democratizing game creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Connected to Our <span className="text-bright_magenta">Journey</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Subscribe to our updates and be the first to know about new features, 
            technical insights, and our expanding presence in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#demo" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
            >
              <span className="relative z-10">Experience XEUR.AI</span>
            </Link>
            <Link 
              href="/blog" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Leverage;