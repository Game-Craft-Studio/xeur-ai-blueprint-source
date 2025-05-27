import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Building, Globe, Users, Award, TrendingUp, Target } from "lucide-react";

const Company = () => {
  const companyStats = [
    { number: "2023", label: "Founded", icon: "🚀" },
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "1M+", label: "Games Created", icon: "🎮" },
    { number: "180+", label: "Countries Reached", icon: "🌍" }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "XEUR.AI established with mission to democratize game development through AI",
      color: "text-bright_magenta"
    },
    {
      year: "2024", 
      title: "Series A Funding",
      description: "Secured major funding round to accelerate AI research and platform development",
      color: "text-tech_green"
    },
    {
      year: "2024",
      title: "NVIDIA Partnership",
      description: "Strategic partnership announced to enhance AI capabilities and performance",
      color: "text-purple-400"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Platform reaches 1M+ games created, expanding to enterprise markets",
      color: "text-cyan-400"
    }
  ];

  const companyPages = [
    {
      title: "About Us",
      description: "Learn about our mission, vision, and the story behind XEUR.AI",
      icon: <Users className="w-8 h-8 text-bright_magenta" />,
      link: "/about",
      gradient: "from-bright_magenta to-purple-400"
    },
    {
      title: "Company Overview", 
      description: "Comprehensive overview of our business model and market strategy",
      icon: <Building className="w-8 h-8 text-tech_green" />,
      link: "/company-overview",
      gradient: "from-tech_green to-cyan-400"
    },
    {
      title: "Vision & Mission",
      description: "Our long-term vision for the future of AI-powered game creation",
      icon: <Target className="w-8 h-8 text-purple-400" />,
      link: "/vision", 
      gradient: "from-purple-400 to-indigo-400"
    },
    {
      title: "NVIDIA Partnership",
      description: "Strategic collaboration enhancing our AI capabilities and performance",
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      link: "/nvidia-partnership",
      gradient: "from-cyan-400 to-blue-400"
    },
    {
      title: "Careers",
      description: "Join our team and help shape the future of game development",
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      link: "/careers",
      gradient: "from-orange-400 to-red-400"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of AI and game development technology",
      icon: "🚀"
    },
    {
      title: "Democratization",
      description: "Making advanced technology accessible to creators worldwide",
      icon: "🌍"
    },
    {
      title: "Excellence",
      description: "Every product and feature meets the highest standards of quality",
      icon: "⭐"
    },
    {
      title: "Transparency",
      description: "Open communication and honest relationships with our community",
      icon: "💎"
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
                The Company Behind the Revolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              XEUR.AI is pioneering the future of game development through artificial intelligence, 
              democratizing creativity and empowering the next generation of digital creators.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-tech_green/20 to-cyan-400/20 border border-tech_green/30 rounded-full text-tech_green text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              Made in India • Global Impact
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Company <span className="text-bright_magenta">At A Glance</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-bright_magenta mb-2">
                  {stat.number}
                </div>
                <div className="text-light_gray_text/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Pages Navigation */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore <span className="text-tech_green">Our Company</span>
            </h2>
            <p className="text-lg text-light_gray_text/70 max-w-3xl mx-auto">
              Discover more about XEUR.AI through our comprehensive company information pages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyPages.map((page, index) => (
              <Link 
                key={index}
                href={page.link}
                className="group bg-gradient-to-br from-medium_purple/20 to-deep_purple/20 rounded-2xl p-8 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${page.gradient} mb-6 group-hover:scale-110 transition-all duration-300`}>
                    {page.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-bright_magenta transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-light_gray_text/80 leading-relaxed">
                    {page.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="py-16 bg-gradient-to-r from-tech_green/10 to-bright_magenta/10">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-bright_magenta">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-near_black/60 rounded-full flex items-center justify-center border-2 border-bright_magenta/30">
                      <span className="text-lg font-bold text-bright_magenta">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow bg-near_black/40 rounded-xl p-6 border border-light_purple/20">
                    <h3 className={`text-xl font-bold mb-2 ${milestone.color}`}>
                      {milestone.title}
                    </h3>
                    <p className="text-light_gray_text/80">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-tech_green">Core Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-medium_purple/20 rounded-xl p-6 border border-light_purple/30 hover:border-tech_green/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-tech_green">{value.title}</h3>
                <p className="text-light_gray_text/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-tech_green">Made in India</span>, for the <span className="text-electric_blue">World</span>
            </h2>
            <p className="text-xl text-light_gray_text/80 mb-8">
              Headquartered in India with a global vision, XEUR.AI represents the growing influence 
              of Indian innovation in the worldwide technology landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-near_black/40 rounded-xl p-6 border border-tech_green/20">
                <div className="text-3xl mb-3">🇮🇳</div>
                <h3 className="text-lg font-semibold mb-2 text-tech_green">Indian Innovation</h3>
                <p className="text-light_gray_text/70">Built with indigenous AI technology and Indian talent</p>
              </div>
              <div className="bg-near_black/40 rounded-xl p-6 border border-bright_magenta/20">
                <div className="text-3xl mb-3">🌏</div>
                <h3 className="text-lg font-semibold mb-2 text-bright_magenta">Global Reach</h3>
                <p className="text-light_gray_text/70">Serving creators across 180+ countries worldwide</p>
              </div>
              <div className="bg-near_black/40 rounded-xl p-6 border border-purple-400/20">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Future Focus</h3>
                <p className="text-light_gray_text/70">Leading the next generation of creative technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect With <span className="text-bright_magenta">XEUR.AI</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Whether you're interested in partnerships, investment opportunities, or joining our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
            >
              <span className="relative z-10">Get in Touch</span>
            </Link>
            <Link 
              href="/careers" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Company;