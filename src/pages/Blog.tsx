
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, User, Clock, Tag } from "lucide-react";

const Blog = () => {
  // Sample blog posts data - in a real implementation, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Game Creation: AI as Your Co-Creator",
      slug: "future-of-game-creation-ai",
      excerpt: "How AI is transforming the game development landscape by working alongside human creators to bring new ideas to life faster than ever before.",
      publishDate: "2023-10-15",
      author: "Raj Sharma",
      category: "AI Insights",
      readTime: "5 min",
      featuredImage: "/assets/blog/future-of-game-creation.jpg"
    },
    {
      id: 2,
      title: "From Idea to Playable Game in 30 Minutes: A Case Study",
      slug: "idea-to-game-in-30-minutes",
      excerpt: "See how an aspiring creator with no coding experience used XEUR.AI to transform a simple game concept into a fully playable mobile game in just half an hour.",
      publishDate: "2023-10-08",
      author: "Priya Patel",
      category: "Case Studies",
      readTime: "8 min",
      featuredImage: "/assets/blog/case-study.jpg"
    },
    {
      id: 3,
      title: "5 Prompting Techniques to Get Better Results from XEUR.AI",
      slug: "5-prompting-techniques",
      excerpt: "Master these five advanced prompting strategies to dramatically improve the quality and specificity of the games you create with our platform.",
      publishDate: "2023-09-29",
      author: "Neha Kapoor",
      category: "Creator Tips",
      readTime: "6 min",
      featuredImage: "/assets/blog/prompting-techniques.jpg"
    },
    {
      id: 4,
      title: "How Educators Are Using AI-Generated Games in the Classroom",
      slug: "educators-using-ai-games",
      excerpt: "Discover how teachers around the world are leveraging AI game creation to develop interactive educational content that engages students in new ways.",
      publishDate: "2023-09-22",
      author: "Arjun Mehta",
      category: "Use Cases",
      readTime: "7 min",
      featuredImage: "/assets/blog/education-games.jpg"
    }
  ];

  // Categories for filtering
  const categories = ["All", "AI Insights", "Creator Tips", "Case Studies", "Platform Updates", "Use Cases"];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            XEUR.AI <span className="text-bright_magenta">Blog</span>
          </h1>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Explore articles on AI game development, creator tips, platform updates, and success stories.
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  category === "All" 
                    ? "bg-bright_magenta text-white" 
                    : "bg-medium_purple/50 text-light_gray_text hover:bg-medium_purple"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-deep_purple rounded-xl overflow-hidden shadow-lg border border-light_purple/30">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-deep_purple to-medium_purple h-64 md:h-auto"></div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-bright_magenta mb-3">
                    <Tag size={16} />
                    <span>Featured</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-bright_magenta transition-colors">
                      {blogPosts[0].title}
                    </Link>
                  </h2>
                  
                  <p className="text-light_gray_text/80 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-light_gray_text/60">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={16} />
                      <span>{blogPosts[0].publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Post Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="bg-medium_purple/30 border-light_purple/30 card-hover">
                <div className="h-48 bg-gradient-to-br from-deep_purple to-medium_purple rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-bright_magenta mb-1">
                    <span>{post.category}</span>
                  </div>
                  <CardTitle>
                    <Link href={`/blog/${post.slug}`} className="hover:text-bright_magenta transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-light_gray_text/70">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-4 text-xs text-light_gray_text/60">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-md bg-medium_purple/50 flex items-center justify-center text-light_gray_text">
                &lt;
              </button>
              <button className="w-10 h-10 rounded-md bg-bright_magenta flex items-center justify-center text-light_gray_text">
                1
              </button>
              <button className="w-10 h-10 rounded-md bg-medium_purple/50 flex items-center justify-center text-light_gray_text hover:bg-medium_purple">
                2
              </button>
              <button className="w-10 h-10 rounded-md bg-medium_purple/50 flex items-center justify-center text-light_gray_text hover:bg-medium_purple">
                3
              </button>
              <button className="w-10 h-10 rounded-md bg-medium_purple/50 flex items-center justify-center text-light_gray_text">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
