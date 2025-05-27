import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, ExternalLink, Award, Newspaper, Filter, Play } from "lucide-react";

const LeverageMedia = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Coverage", color: "text-light_gray_text" },
    { id: "news", name: "News & Press", color: "text-tech_green" },
    { id: "awards", name: "Awards & Recognition", color: "text-bright_magenta" },
    { id: "interviews", name: "Interviews & Features", color: "text-purple-400" },
    { id: "podcasts", name: "Podcasts & Media", color: "text-cyan-400" }
  ];

  const mediaItems = [
    {
      id: 1,
      title: "XEUR.AI Named 'AI Startup of the Year' by TechCrunch",
      publication: "TechCrunch",
      date: "2025-05-20",
      category: "awards",
      type: "article",
      excerpt: "Revolutionary AI game creation platform receives prestigious recognition for innovation in democratizing game development.",
      imageUrl: "/assets/media/techcrunch-logo.png",
      link: "https://techcrunch.com/xeur-ai-startup-of-the-year",
      featured: true,
      readTime: "4 min"
    },
    {
      id: 2,
      title: "The Future of Gaming: How AI is Revolutionizing Game Development",
      publication: "Forbes",
      date: "2025-05-15",
      category: "interviews",
      type: "article",
      excerpt: "In-depth conversation with XEUR.AI founders about the future of AI-powered game creation and its impact on the industry.",
      imageUrl: "/assets/media/forbes-logo.png", 
      link: "https://forbes.com/xeur-ai-future-gaming",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "XEUR.AI Secures $50M Series B Led by Andreessen Horowitz",
      publication: "VentureBeat",
      date: "2025-05-10",
      category: "news",
      type: "article", 
      excerpt: "Major funding round validates AI-first approach to game development, enabling expansion into enterprise markets.",
      imageUrl: "/assets/media/venturebeat-logo.png",
      link: "https://venturebeat.com/xeur-ai-series-b-funding",
      readTime: "5 min"
    },
    {
      id: 4,
      title: "From Idea to Game in Minutes: The XEUR.AI Story",
      publication: "The AI Podcast",
      date: "2025-05-05",
      category: "podcasts",
      type: "podcast",
      excerpt: "Founders discuss the technical challenges and breakthroughs in creating the world's first natural language game development platform.",
      imageUrl: "/assets/media/ai-podcast-logo.png",
      link: "https://ai-podcast.com/episodes/xeur-ai-story",
      duration: "45 min"
    },
    {
      id: 5,
      title: "XEUR.AI Wins 'Innovation Award' at Game Developers Conference 2025",
      publication: "Game Developer Magazine",
      date: "2025-04-28",
      category: "awards",
      type: "article",
      excerpt: "Industry recognition for breakthrough technology that democratizes game creation for aspiring developers worldwide.",
      imageUrl: "/assets/media/gamedeveloper-logo.png",
      link: "https://gamedeveloper.com/xeur-ai-gdc-award",
      readTime: "3 min"
    },
    {
      id: 6,
      title: "Indian AI Startup XEUR.AI Challenges Silicon Valley Giants",
      publication: "BBC Technology",
      date: "2025-04-20",
      category: "news",
      type: "article",
      excerpt: "How a Bangalore-based startup is disrupting the $180B gaming industry with indigenous AI technology.",
      imageUrl: "/assets/media/bbc-logo.png",
      link: "https://bbc.com/technology/xeur-ai-india-startup",
      readTime: "6 min"
    },
    {
      id: 7,
      title: "Live Demo: Creating a Complete Game in Real-Time",
      publication: "YouTube - Tech Talks",
      date: "2025-04-15",
      category: "interviews",
      type: "video",
      excerpt: "Watch as XEUR.AI creates a fully playable game from a simple text description in under 10 minutes.",
      imageUrl: "/assets/media/youtube-logo.png",
      link: "https://youtube.com/watch?v=xeur-ai-live-demo",
      duration: "12 min",
      views: "2.3M"
    },
    {
      id: 8,
      title: "The Democratization of Game Development",
      publication: "Wired Magazine",
      date: "2025-04-10",
      category: "interviews",
      type: "article",
      excerpt: "An exploration of how AI is breaking down barriers and empowering a new generation of game creators.",
      imageUrl: "/assets/media/wired-logo.png",
      link: "https://wired.com/story/xeur-ai-democratization-games",
      readTime: "10 min",
      featured: true
    }
  ];

  const filteredMedia = selectedCategory === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article": return <Newspaper className="w-4 h-4" />;
      case "podcast": return <Play className="w-4 h-4" />;
      case "video": return <Play className="w-4 h-4" />;
      default: return <Newspaper className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-tech_green to-green-600">
                XEUR.AI in the Spotlight
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Discover our presence in the media, industry accolades, and thought leadership features 
              as we shape the future of AI-powered game development.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400/20 to-tech_green/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Press Coverage • Industry Recognition • Global Reach
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-8 bg-deep_purple/30 sticky top-[73px] z-40 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold text-green-400">Filter by Type</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-green-400 text-near_black"
                    : "bg-medium_purple/30 text-light_gray_text hover:bg-green-400/20 hover:text-green-400 border border-light_purple/30"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Coverage */}
      {filteredMedia.some(item => item.featured) && (
        <div className="py-16 bg-gradient-to-r from-green-400/10 to-tech_green/10">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured <span className="text-green-400">Coverage</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredMedia.filter(item => item.featured).map((item) => (
                <div 
                  key={`featured-${item.id}`}
                  className="bg-gradient-to-br from-medium_purple/20 to-deep_purple/20 rounded-2xl p-8 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-green-400/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-green-400 to-tech_green text-near_black font-bold py-1 px-4 rounded-full text-sm">
                      FEATURED
                    </span>
                    <div className="flex items-center text-light_gray_text/60 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white hover:text-green-400 transition-colors">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center text-green-400 font-semibold">
                      {getTypeIcon(item.type)}
                      <span className="ml-2">{item.publication}</span>
                    </div>
                    <div className="flex items-center text-light_gray_text/60 text-sm">
                      <span className={getCategoryInfo(item.category).color}>
                        {getCategoryInfo(item.category).name}
                      </span>
                    </div>
                    {item.readTime && (
                      <div className="text-light_gray_text/60 text-sm">
                        {item.readTime}
                      </div>
                    )}
                    {item.duration && (
                      <div className="text-light_gray_text/60 text-sm">
                        {item.duration}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-light_gray_text/80 text-lg leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 font-semibold hover:text-tech_green transition-colors group"
                  >
                    Read Full Coverage
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Media Coverage */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {selectedCategory === "all" ? "All Media Coverage" : getCategoryInfo(selectedCategory).name}
              </h2>
              <p className="text-light_gray_text/70">
                {filteredMedia.length} coverage item{filteredMedia.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((item) => (
                <article 
                  key={item.id}
                  className="bg-gradient-to-br from-medium_purple/20 to-deep_purple/20 rounded-2xl border border-light_purple/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-green-400/10 to-tech_green/10 flex items-center justify-center border-b border-light_purple/20">
                    <div className="text-6xl opacity-50">
                      {item.type === "video" ? "🎥" : item.type === "podcast" ? "🎧" : "📰"}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm">
                        {getTypeIcon(item.type)}
                        <span className="ml-2 text-green-400 font-semibold">{item.publication}</span>
                      </div>
                      <div className="text-light_gray_text/60 text-xs">
                        {formatDate(item.date)}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-green-400 transition-colors line-clamp-2">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h3>
                    
                    <p className="text-light_gray_text/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs">
                        <span className={`px-2 py-1 rounded-full ${getCategoryInfo(item.category).color} bg-current/20`}>
                          {getCategoryInfo(item.category).name}
                        </span>
                        {item.readTime && (
                          <span className="text-light_gray_text/60">{item.readTime}</span>
                        )}
                        {item.duration && (
                          <span className="text-light_gray_text/60">{item.duration}</span>
                        )}
                        {item.views && (
                          <span className="text-light_gray_text/60">{item.views} views</span>
                        )}
                      </div>
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-tech_green transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredMedia.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📰</div>
                <h3 className="text-2xl font-bold mb-4 text-light_gray_text">No Coverage Found</h3>
                <p className="text-light_gray_text/70 mb-8">
                  No media coverage matches the selected category. Try selecting a different filter.
                </p>
                <button 
                  onClick={() => setSelectedCategory("all")}
                  className="btn-primary"
                >
                  View All Coverage
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Press Kit */}
      <div className="py-16 bg-gradient-to-r from-green-400/10 to-tech_green/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Press <span className="text-green-400">Kit & Media</span>
            </h2>
            <p className="text-xl text-light_gray_text/80 mb-8">
              Access our comprehensive press kit with high-resolution assets, company information, 
              and media resources for journalists and content creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?inquiry=press" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-green-400 to-tech_green rounded-xl hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Press Team
              </Link>
              <Link 
                href="#" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-green-400/70 rounded-xl hover:border-green-400 hover:bg-green-400/10 transform hover:scale-105"
              >
                Download Press Kit
              </Link>
              <Link 
                href="/leverage" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
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

export default LeverageMedia;