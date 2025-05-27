import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Tag, ChevronRight, Filter } from "lucide-react";

const LeverageUpdates = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Updates", color: "text-light_gray_text" },
    { id: "feature", name: "Feature Release", color: "text-bright_magenta" },
    { id: "partnership", name: "Partnership", color: "text-tech_green" },
    { id: "roadmap", name: "Roadmap Update", color: "text-purple-400" },
    { id: "milestone", name: "Milestone", color: "text-cyan-400" }
  ];

  const updates = [
    {
      id: 1,
      date: "2025-05-25",
      title: "XEUR AI Engine 3.2 Released - Enhanced Multi-Platform Support",
      summary: "Major engine update with improved cross-platform deployment capabilities and 40% faster rendering performance.",
      category: "feature",
      readTime: "3 min",
      link: "#",
      featured: true
    },
    {
      id: 2,
      date: "2025-05-20",
      title: "Strategic Partnership with NVIDIA Deepens AI Integration",
      summary: "Expanded collaboration includes access to latest RTX technologies and joint research initiatives for next-gen game AI.",
      category: "partnership", 
      readTime: "5 min",
      link: "#"
    },
    {
      id: 3,
      date: "2025-05-15",
      title: "Roadmap Update: Web3 Gaming Platform Launch Moved to Q3 2025",
      summary: "Strategic decision to enhance blockchain integration capabilities based on community feedback and market analysis.",
      category: "roadmap",
      readTime: "2 min", 
      link: "#"
    },
    {
      id: 4,
      date: "2025-05-10",
      title: "1 Million Games Created Milestone Achieved",
      summary: "Community reaches historic milestone as creators worldwide embrace AI-powered game development at unprecedented scale.",
      category: "milestone",
      readTime: "4 min",
      link: "#",
      featured: true
    },
    {
      id: 5,
      date: "2025-05-05",
      title: "Advanced Physics Engine Integration Complete",
      summary: "New physics simulation capabilities enable more realistic game environments and complex interaction systems.",
      category: "feature",
      readTime: "6 min",
      link: "#"
    },
    {
      id: 6,
      date: "2025-04-28",
      title: "Enterprise API v2.0 Beta Program Launches",
      summary: "Invited partners gain early access to enhanced enterprise features including white-label deployment and custom branding.",
      category: "feature",
      readTime: "3 min",
      link: "#"
    }
  ];

  const filteredUpdates = selectedCategory === "all" 
    ? updates 
    : updates.filter(update => update.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric"
    });
  };

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-bright_magenta to-purple-600">
                Project Evolution & Updates
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Track our development journey, new feature unveilings, and strategic milestones as we revolutionize game creation.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-400/20 to-bright_magenta/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              Live Updates • Real-Time Progress
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-8 bg-deep_purple/30 sticky top-[73px] z-40 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-purple-400" />
            <span className="text-lg font-semibold text-purple-400">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-purple-400 text-near_black"
                    : "bg-medium_purple/30 text-light_gray_text hover:bg-purple-400/20 hover:text-purple-400 border border-light_purple/30"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Updates List */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {selectedCategory === "all" ? "All Updates" : getCategoryInfo(selectedCategory)?.name ?? "All Updates"}
              </h2>
              <p className="text-light_gray_text/70">
                {filteredUpdates.length} update{filteredUpdates.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="space-y-8">
              {filteredUpdates.map((update) => (
                <article 
                  key={update.id}
                  className={`bg-gradient-to-br from-medium_purple/20 to-deep_purple/20 rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                    update.featured 
                      ? "border-purple-400/50 shadow-lg shadow-purple-400/20" 
                      : "border-light_purple/30 hover:border-purple-400/50"
                  }`}
                >
                  {update.featured && (
                    <div className="inline-block mb-4">
                      <span className="bg-gradient-to-r from-purple-400 to-bright_magenta text-white font-bold py-1 px-4 rounded-full text-sm">
                        FEATURED UPDATE
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-center gap-4 mb-3 md:mb-0">
                      <div className="flex items-center text-light_gray_text/60 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(update.date)}
                      </div>
                      <div className="flex items-center text-sm">
                        <Tag className="w-4 h-4 mr-2" />
                        <span className={getCategoryInfo(update.category)?.color ?? 'text-light_gray_text'}>
                          {getCategoryInfo(update.category)?.name ?? 'Unknown Category'}
                        </span>
                      </div>
                    </div>
                    <div className="text-light_gray_text/60 text-sm">
                      {update.readTime} read
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white hover:text-purple-400 transition-colors">
                    <Link href={update.link}>
                      {update.title}
                    </Link>
                  </h3>
                  
                  <p className="text-light_gray_text/80 text-lg leading-relaxed mb-6">
                    {update.summary}
                  </p>
                  
                  <Link 
                    href={update.link}
                    className="inline-flex items-center text-purple-400 font-semibold hover:text-bright_magenta transition-colors group"
                  >
                    Read Full Story
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>

            {filteredUpdates.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-4 text-light_gray_text">No Updates Found</h3>
                <p className="text-light_gray_text/70 mb-8">
                  No updates match the selected category. Try selecting a different filter.
                </p>
                <button 
                  onClick={() => setSelectedCategory("all")}
                  className="btn-primary"
                >
                  View All Updates
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-gradient-to-r from-purple-400/10 to-bright_magenta/10">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss an <span className="text-purple-400">Update</span>
            </h2>
            <p className="text-xl text-light_gray_text/80 mb-8">
              Subscribe to get the latest project updates, feature releases, and milestone announcements delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-400 to-bright_magenta rounded-xl hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Subscribe to Blog
              </Link>
              <Link 
                href="/leverage" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-purple-400/70 rounded-xl hover:border-purple-400 hover:bg-purple-400/10 transform hover:scale-105"
              >
                Back to Leverage
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LeverageUpdates;