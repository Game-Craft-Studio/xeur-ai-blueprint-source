
import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-hero-pattern">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              We're <span className="text-bright_magenta">Reimagining</span> Creation
            </h1>
            <p className="text-xl text-center text-light_gray_text/80 mb-8">
              XEUR.AI was founded with a simple but powerful mission: to eliminate the technical barriers
              to digital creation and democratize game development for everyone.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story / Mission */}
      <div className="py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            The Genesis of a <span className="text-bright_magenta">Revolution</span>
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p>
              In a world where content creation tools have evolved dramatically, game development
              remained stubbornly inaccessible to most creators. While anyone could now easily
              create professional-quality videos, images, or music with AI assistance,
              making games still required extensive technical knowledge, expensive software,
              and months or years of development time.
            </p>
            
            <p>
              We founded XEUR.AI to change that paradigm. Our founding team—composed of AI researchers,
              game developers, and technology innovators—recognized that the same AI revolution
              transforming other creative fields could be applied to game development, but
              it would require a fundamentally new approach.
            </p>
            
            <p>
              After years of research and development, we built indigenous AI models specifically
              designed to understand game mechanics, player psychology, visual design,
              and the complex interplay between these elements.
            </p>
            
            <p>
              Today, XEUR.AI is the world's first platform allowing anyone to create
              complete, playable games from simple text prompts—no coding required.
              We're proud to be leading this revolution in game creation technology,
              opening the doors to a new generation of creators.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Vision */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            The Future We're <span className="text-tech_green">Building</span>
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p>
              We believe we're at the beginning of a fundamental transformation in digital creation.
              Our vision extends beyond simply making game development easier—we're creating an
              entirely new paradigm where the gap between imagination and creation disappears.
            </p>
            
            <p>
              We envision a future where:
            </p>
            
            <ul>
              <li>
                Anyone with a creative vision can bring interactive experiences to life,
                regardless of their technical background or resources.
              </li>
              <li>
                The diversity of games and interactive experiences expands dramatically,
                as creators from all backgrounds and perspectives can participate.
              </li>
              <li>
                Game development time shrinks from years to days or hours, allowing
                for rapid experimentation, iteration, and innovation.
              </li>
              <li>
                New categories of games emerge that weren't commercially viable under
                traditional development models.
              </li>
              <li>
                India becomes recognized as a global leader in AI-powered creative technology,
                setting new standards for the industry worldwide.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Team Section - Updated with placeholder */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The Minds Behind the <span className="text-bright_magenta">Magic</span>
          </h2>
          
          {/* Team Information Update Notice */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="bg-gradient-to-r from-bright_magenta/10 to-purple-400/10 rounded-2xl p-8 border border-bright_magenta/30">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-bright_magenta">Our Team is Growing</h3>
              <p className="text-lg text-light_gray_text/80 leading-relaxed">
                We're in the process of updating our team information to reflect our recent growth and organizational changes. 
                Our leadership team brings together decades of experience in AI research, game development, and enterprise technology.
              </p>
              <div className="mt-6">
                <Link 
                  href="/contact?inquiry=team" 
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          {/* Leadership Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-medium_purple/30 rounded-lg p-8 border border-light_purple/30 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-bright_magenta">AI Research Excellence</h3>
              <p className="text-light_gray_text/80">
                Our research team brings cutting-edge expertise in machine learning, 
                computer vision, and generative AI technologies.
              </p>
            </div>
            <div className="bg-medium_purple/30 rounded-lg p-8 border border-light_purple/30 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3 text-electric_blue">Game Industry Veterans</h3>
              <p className="text-light_gray_text/80">
                Seasoned professionals with experience at leading gaming companies, 
                understanding both creative and technical aspects of game development.
              </p>
            </div>
            <div className="bg-medium_purple/30 rounded-lg p-8 border border-light_purple/30 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3 text-tech_green">Enterprise Leadership</h3>
              <p className="text-light_gray_text/80">
                Business leaders with proven track records in scaling technology companies 
                and building global partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Made in India, for the World */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-tech_green">Made in India</span>, for the <span className="text-electric_blue">World</span>
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none text-center mb-8">
            <p>
              XEUR.AI is proudly developed in India, combining our rich heritage of innovation
              and creativity with cutting-edge artificial intelligence. We're building not just
              a product, but a testament to India's growing leadership in the global technology landscape.
            </p>
            
            <p>
              Our team brings together India's best AI researchers, game developers, and creative
              technologists to build something that will change how the world creates interactive experiences.
            </p>
          </div>
          
          <div className="bg-rich_gold/10 rounded-lg p-6 border border-rich_gold/30 inline-block">
            <p className="text-lg italic">
              "AI is transforming every aspect of our lives. India, with its vast talent pool and innovative spirit,
              has the opportunity to lead this revolution."
            </p>
          </div>
        </div>
      </div>
      
      {/* Company Values */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-bright_magenta">Core Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-bright_magenta">Innovation First</h3>
              <p className="text-light_gray_text/70">
                We push the boundaries of what's possible with AI and game development technology.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-tech_green">Democratization</h3>
              <p className="text-light_gray_text/70">
                Making advanced technology accessible to creators regardless of technical background.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Excellence</h3>
              <p className="text-light_gray_text/70">
                Every product and feature we deliver meets the highest standards of quality.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Global Impact</h3>
              <p className="text-light_gray_text/70">
                Building technology that empowers creators worldwide to share their stories.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="py-16 bg-cta-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Revolution
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the future of game creation. Whether you're a creator, investor, or potential team member,
            we'd love to connect with you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/signup" className="btn-primary">
              Start Creating
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
