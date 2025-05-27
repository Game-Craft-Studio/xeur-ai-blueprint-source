import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Book, FileText, Play, MessageCircle, Download, ExternalLink, Search, Users } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Blog & Articles",
      description: "Latest insights, tutorials, and industry analysis",
      icon: <Book className="w-8 h-8 text-bright_magenta" />,
      link: "/blog",
      gradient: "from-bright_magenta to-purple-400",
      items: [
        "AI Game Development Tutorials",
        "Industry News & Analysis", 
        "Creator Success Stories",
        "Platform Updates & Features"
      ]
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      icon: <FileText className="w-8 h-8 text-tech_green" />,
      link: "/docs",
      gradient: "from-tech_green to-cyan-400",
      items: [
        "Getting Started Guide",
        "API Documentation",
        "Integration Tutorials",
        "Best Practices"
      ]
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step visual guides and demonstrations",
      icon: <Play className="w-8 h-8 text-purple-400" />,
      link: "/tutorials",
      gradient: "from-purple-400 to-indigo-400",
      items: [
        "Platform Overview Videos",
        "Advanced Feature Tutorials",
        "Creator Workshops",
        "Live Demo Sessions"
      ]
    },
    {
      title: "Community Forum",
      description: "Connect with other creators and get support",
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      link: "https://discord.gg/xeur",
      gradient: "from-cyan-400 to-blue-400",
      external: true,
      items: [
        "Ask Questions & Get Help",
        "Share Your Creations",
        "Feature Requests",
        "Community Challenges"
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Platform Demo",
      description: "Experience XEUR.AI in action",
      icon: <Play className="w-6 h-6" />,
      link: "/#demo",
      color: "text-bright_magenta"
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      icon: <FileText className="w-6 h-6" />,
      link: "/xeur-api",
      color: "text-tech_green"
    },
    {
      title: "Contact Support",
      description: "Get help from our team",
      icon: <Users className="w-6 h-6" />,
      link: "/contact",
      color: "text-purple-400"
    },
    {
      title: "Feature Updates",
      description: "Latest platform updates",
      icon: <Download className="w-6 h-6" />,
      link: "/leverage/updates",
      color: "text-cyan-400"
    }
  ];

  const featuredResources = [
    {
      title: "Getting Started with XEUR.AI",
      description: "Complete beginner's guide to creating your first game",
      type: "Guide",
      readTime: "10 min",
      link: "/docs/getting-started",
      featured: true
    },
    {
      title: "Advanced AI Game Mechanics",
      description: "Deep dive into AI-powered game logic and behavior systems",
      type: "Tutorial",
      readTime: "25 min",
      link: "/blog/advanced-ai-mechanics",
      featured: true
    },
    {
      title: "Platform API v3.2 Release",
      description: "New features and improvements in our latest API version",
      type: "Changelog",
      readTime: "5 min",
      link: "/leverage/changelogs",
      featured: true
    }
  ];

  const helpTopics = [
    {
      category: "Getting Started",
      topics: [
        "How to create your first game",
        "Understanding AI game generation",
        "Platform navigation basics",
        "Account setup and management"
      ]
    },
    {
      category: "Advanced Features",
      topics: [
        "Custom AI model training",
        "Multi-platform deployment",
        "API integration guide",
        "Performance optimization"
      ]
    },
    {
      category: "Troubleshooting",
      topics: [
        "Common error messages",
        "Platform compatibility issues",
        "Export and deployment problems",
        "Account access issues"
      ]
    },
    {
      category: "Business & Licensing",
      topics: [
        "Commercial usage rights",
        "Enterprise solutions",
        "Partnership opportunities",
        "Billing and subscriptions"
      ]
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
                Resources & Support
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Everything you need to master XEUR.AI and create amazing games. From beginner tutorials 
              to advanced API documentation, we've got you covered.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-tech_green/20 to-cyan-400/20 border border-tech_green/30 rounded-full text-tech_green text-sm font-medium">
              <Search className="w-4 h-4 mr-2" />
              Comprehensive Guides • Community Support • Expert Help
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-bright_magenta">Resources</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group bg-gradient-to-br from-medium_purple/20 to-deep_purple/20 rounded-2xl p-8 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-bright_magenta/20 text-bright_magenta px-3 py-1 rounded-full text-sm font-semibold">
                    {resource.type}
                  </span>
                  <span className="text-light_gray_text/60 text-sm">
                    {resource.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-bright_magenta transition-colors">
                  {resource.title}
                </h3>
                <p className="text-light_gray_text/80 leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our <span className="text-tech_green">Resource Library</span>
            </h2>
            <p className="text-lg text-light_gray_text/70 max-w-3xl mx-auto">
              Find exactly what you need with our organized collection of guides, tutorials, and support materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-medium_purple/20 to-deep_purple/20 rounded-2xl p-8 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${category.gradient}`}>
                    {category.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                      {category.external && (
                        <ExternalLink className="w-5 h-5 text-light_gray_text/60" />
                      )}
                    </div>
                    <p className="text-light_gray_text/80 mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-tech_green rounded-full mr-3 mt-2 shrink-0"></div>
                          <span className="text-light_gray_text/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={category.link}
                      target={category.external ? "_blank" : undefined}
                      rel={category.external ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${category.gradient} rounded-xl hover:scale-105 shadow-lg hover:shadow-xl`}
                    >
                      Explore {category.title}
                      {category.external ? (
                        <ExternalLink className="w-5 h-5 ml-2" />
                      ) : (
                        <Book className="w-5 h-5 ml-2" />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 bg-gradient-to-r from-tech_green/10 to-bright_magenta/10">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quick <span className="text-bright_magenta">Access</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="group bg-near_black/60 rounded-xl p-6 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`inline-block p-3 rounded-lg ${link.color} bg-current/20 mb-4 group-hover:scale-110 transition-all duration-300`}>
                  {link.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${link.color} group-hover:text-bright_magenta transition-colors`}>
                  {link.title}
                </h3>
                <p className="text-light_gray_text/70 text-sm">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Help Topics */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular <span className="text-tech_green">Help Topics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpTopics.map((section, index) => (
              <div 
                key={index}
                className="bg-medium_purple/20 rounded-xl p-6 border border-light_purple/30"
              >
                <h3 className="text-xl font-semibold mb-4 text-tech_green">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="w-2 h-2 bg-bright_magenta rounded-full mr-3 mt-2 shrink-0 group-hover:scale-125 transition-transform"></div>
                      <Link 
                        href="#"
                        className="text-light_gray_text/80 hover:text-bright_magenta transition-colors"
                      >
                        {topic}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need <span className="text-bright_magenta">Additional Help?</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed with XEUR.AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
            >
              <span className="relative z-10">Contact Support</span>
            </Link>
            <Link 
              href="https://discord.gg/xeur"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
            >
              Join Community
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;