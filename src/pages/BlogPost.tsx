
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, User, Clock, Tag, ArrowLeft, Share2, Bookmark, Heart, Facebook, Twitter, Linkedin } from "lucide-react";

const BlogPost = () => {
  // In a real implementation, this would fetch the blog post data based on the slug
  const { slug } = useParams();
  
  // Sample data - in a real implementation, this would come from an API or CMS
  const post = {
    title: "The Future of Game Creation: AI as Your Co-Creator",
    publishDate: "October 15, 2023",
    author: "Raj Sharma",
    authorTitle: "CEO & Founder",
    category: "AI Insights",
    readTime: "5 min",
    content: `<p>Game development has traditionally been one of the most complex forms of digital creation, requiring a unique blend of artistic, technical, and design skills that can take years to master. Even with modern game engines, the barrier to entry remains high for most people with creative ideas but without coding experience.</p>

<p>This is why the advent of AI in game creation represents such a profound shift. We're not just talking about tools that make traditional development easier—we're witnessing the emergence of AI as a true co-creator in the game development process.</p>

<h2>The Traditional Game Development Process</h2>

<p>To appreciate how revolutionary AI-powered game creation is, it's worth looking at the traditional game development workflow:</p>

<ol>
<li>Concept and planning (weeks to months)</li>
<li>Art asset creation (months)</li>
<li>Programming and mechanics implementation (months)</li>
<li>Level design (weeks to months)</li>
<li>Testing and iteration (months)</li>
<li>Polishing and optimization (weeks to months)</li>
</ol>

<p>Even for a small indie game, this process typically takes 6-18 months with a team of skilled professionals. For individuals without technical expertise, creating even the simplest game could be virtually impossible.</p>

<h2>Enter the AI Co-Creator</h2>

<p>What makes XEUR.AI different from traditional game development tools is that it serves as a true co-creator rather than just a tool. Consider the following:</p>

<p><strong>Understanding Intent:</strong> Rather than requiring specific technical instructions, our AI can interpret natural language descriptions of game concepts and turn them into playable experiences. This means you can describe your game idea as you would to a human collaborator.</p>

<p><strong>Creative Contributions:</strong> The AI doesn't just follow instructions—it makes creative suggestions and fills in details that you might not have specified. If you describe a fantasy RPG, it will generate appropriate character designs, environments, and gameplay mechanics without requiring explicit instructions for each element.</p>

<p><strong>Iterative Collaboration:</strong> Like a human collaborator, the AI can take feedback and refine its output. If you don't like certain aspects of what it generates, you can have a dialogue with it to refine the game until it matches your vision.</p>

<h2>Real-World Applications</h2>

<p>We're already seeing exciting applications of this technology:</p>

<p><strong>Rapid Prototyping:</strong> Developers are using XEUR.AI to quickly test game concepts before committing resources to full development. What once took weeks now takes hours.</p>

<p><strong>Education:</strong> Teachers are creating custom educational games tailored to their specific curriculum needs—something that would have required commissioning custom software in the past.</p>

<p><strong>Content Creators:</strong> Streamers and influencers are developing branded games to engage their audiences in new ways, without needing to hire development teams.</p>

<h2>The Future of the Creator-AI Partnership</h2>

<p>As we look to the future, we see AI moving even further into the role of co-creator:</p>

<p><strong>Dynamic Content Generation:</strong> Games that can generate new content in response to player behavior and preferences.</p>

<p><strong>Personalized Experiences:</strong> Games that adapt their challenge level, narrative, and even aesthetic to individual players.</p>

<p><strong>New Game Categories:</strong> Entirely new genres of games that weren't feasible under traditional development constraints.</p>

<p>The democratization of game creation through AI doesn't mean the end of traditional game development. Rather, it opens up the field to countless new voices and perspectives. Professional developers will incorporate these tools to enhance their workflow, while newcomers who would never have been able to create games before will bring fresh ideas to the medium.</p>

<p>At XEUR.AI, we're proud to be at the forefront of this revolution, building tools that transform the relationship between creators and technology. The future of game creation is collaborative, with human creativity amplified by artificial intelligence—and that future is already here.</p>`,
    tags: ["AI", "Game Development", "Creative Technology", "Future of Gaming"]
  };
  
  // Related posts
  const relatedPosts = [
    {
      title: "From Idea to Playable Game in 30 Minutes: A Case Study",
      slug: "idea-to-game-in-30-minutes",
      category: "Case Studies"
    },
    {
      title: "5 Prompting Techniques to Get Better Results from XEUR.AI",
      slug: "5-prompting-techniques",
      category: "Creator Tips"
    },
    {
      title: "How Educators Are Using AI-Generated Games in the Classroom",
      slug: "educators-using-ai-games",
      category: "Use Cases"
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      <article className="pt-24 pb-16">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Back to blog link */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-light_gray_text/70 hover:text-bright_magenta transition-colors mb-6">
            <ArrowLeft size={16} />
            <span>Back to all posts</span>
          </Link>
          
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link to={`/blog?category=${post.category}`} className="bg-medium_purple/50 text-bright_magenta px-3 py-1 rounded-md text-sm">
                {post.category}
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-light_gray_text/70 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime} read</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="h-80 bg-gradient-to-br from-deep_purple to-medium_purple rounded-lg mb-12"></div>
          
          {/* Social Sharing & Actions */}
          <div className="flex justify-between mb-12">
            <div className="flex items-center gap-3">
              <span className="text-light_gray_text/70">Share:</span>
              <button className="w-8 h-8 rounded-full bg-medium_purple/50 flex items-center justify-center text-light_gray_text hover:bg-medium_purple transition-colors">
                <Facebook size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-medium_purple/50 flex items-center justify-center text-light_gray_text hover:bg-medium_purple transition-colors">
                <Twitter size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-medium_purple/50 flex items-center justify-center text-light_gray_text hover:bg-medium_purple transition-colors">
                <Linkedin size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-medium_purple/50 flex items-center justify-center text-light_gray_text hover:bg-medium_purple transition-colors">
                <Share2 size={16} />
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-light_gray_text/70 hover:text-bright_magenta transition-colors">
                <Bookmark size={16} />
                <span className="text-sm">Save</span>
              </button>
              <button className="flex items-center gap-1 text-light_gray_text/70 hover:text-bright_magenta transition-colors">
                <Heart size={16} />
                <span className="text-sm">Like</span>
              </button>
            </div>
          </div>
          
          {/* Post Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link 
                  key={index} 
                  to={`/blog?tag=${tag}`} 
                  className="bg-medium_purple/30 hover:bg-medium_purple text-light_gray_text px-3 py-1 rounded-md text-sm transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-deep_purple rounded-lg p-6 flex gap-4 items-center mb-12">
            <div className="w-16 h-16 rounded-full bg-medium_purple flex items-center justify-center text-xl font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-bold text-lg">{post.author}</h3>
              <p className="text-light_gray_text/70">{post.authorTitle}</p>
            </div>
          </div>
          
          {/* Related Posts */}
          <div>
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <div key={index} className="bg-medium_purple/20 rounded-lg p-4 border border-light_purple/30 hover:border-bright_magenta transition-colors">
                  <div className="text-xs text-bright_magenta mb-2">{relatedPost.category}</div>
                  <h4 className="font-semibold mb-2">
                    <Link to={`/blog/${relatedPost.slug}`} className="hover:text-bright_magenta transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
