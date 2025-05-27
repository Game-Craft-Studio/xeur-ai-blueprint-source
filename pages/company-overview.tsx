import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Award, Crown, Globe, Heart, Lightbulb, Rocket, Shield, Star, Target, TrendingUp, Users, Zap } from "lucide-react";

const CompanyOverview = () => {
  const storyCards = [
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-400" />,
      title: "The Problem We Saw",
      content: "590 million people worldwide have game ideas, but only 6% ever complete them. Technical barriers, prohibitive costs ($300K+ per game), and time requirements (1+ years) create an insurmountable gap between creativity and reality. We witnessed a $142 billion annual opportunity lost to this fundamental market dysfunction."
    },
    {
      icon: <Zap className="w-12 h-12 text-bright_magenta" />,
      title: "The Breakthrough",
      content: "What if AI could eliminate technical barriers entirely? Our founders envisioned a world where natural language becomes the only programming language needed. After training our proprietary LLM on 78,000 games, we achieved the impossible: complete game creation from text prompts in approximately one hour."
    },
    {
      icon: <Target className="w-12 h-12 text-tech_green" />,
      title: "The Vision Realized",
      content: "XEUR.AI represents an 'extinction event' for traditional game development. We've achieved >99% cost reduction, >99% time reduction, and expanded the addressable market by 21X. From individual creators to enterprise brands, we're unleashing unprecedented creative potential through AI-powered democratization."
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-400" />,
      title: "Made in India, for the World",
      content: "Proudly built in India, XEUR.AI leverages our nation's exceptional tech talent while addressing global challenges. We're not just creating a product; we're establishing India as the epicenter of AI-driven content creation, contributing to PM Modi's vision of global tech leadership."
    }
  ];

  const founders = [
    {
      name: "Harshit Verma",
      role: "CEO & Co-Founder",
      avatar: "H",
      bio: "Visionary leader with deep expertise in AI and gaming convergence. Harshit recognized the massive opportunity in democratizing game creation and has been instrumental in defining XEUR.AI's revolutionary approach. His leadership combines technical innovation with strategic market positioning, driving the company's mission to transform how interactive content is created globally.",
      gradient: "from-bright_magenta to-purple-400"
    },
    {
      name: "Rishav Goyal", 
      role: "COO & Co-Founder",
      avatar: "R",
      bio: "Operational excellence meets strategic execution. Rishav brings crucial operational expertise and industry network leverage to XEUR.AI's ambitious growth plans. His focus on scalable systems, partnership development, and execution discipline ensures the company can deliver on its revolutionary promises while building sustainable competitive advantages.",
      gradient: "from-tech_green to-cyan-400"
    }
  ];

  const aiModels = [
    { name: "XEUR LLM Core", icon: "🧠", desc: "Proprietary Large Language Model trained on 78,000 games" },
    { name: "Eureka & Galileo", icon: "🔍", desc: "Exploration and ideation models for game concept expansion" },
    { name: "Newton & Faraday", icon: "⚛️", desc: "Physics and mechanics models for realistic game systems" },
    { name: "Curie & Albert", icon: "📚", desc: "Narrative and quest models for compelling storylines" },
    { name: "Hawking", icon: "🌌", desc: "World generation model for immersive environments" },
    { name: "Ramanujan & Ratan", icon: "🎨", desc: "High-fidelity asset generation for visual content" }
  ];

  const milestones = [
    { date: "Q1 2025", event: "Company Foundation", desc: "XEUR.AI founded with revolutionary vision of AI-powered game creation democratization", status: "completed" },
    { date: "Q2 2025", event: "NVIDIA Partnership", desc: "Accepted into NVIDIA Inception program with Capital Connect access and $500K+ in benefits", status: "completed" },
    { date: "Q2 2025", event: "Alpha Development", desc: "Core AI models operational, alpha build functional with initial user testing", status: "current" },
    { date: "Q3 2025", event: "Beta Launch & Funding", desc: "Public beta with 5,000 users, complete $2.5M seed round, Web3 integration", status: "upcoming" },
    { date: "Q4 2025", event: "Mobile & Series A", desc: "Mobile platform support, Series A funding, 10,000+ active users", status: "upcoming" },
    { date: "Q1 2026", event: "Full Production Launch", desc: "50,000+ users, international expansion, advanced AI model updates", status: "upcoming" }
  ];

  const coreValues = [
    { icon: <Rocket className="w-8 h-8 text-bright_magenta" />, title: "Revolutionary Innovation", desc: "Pushing boundaries of what's possible with AI" },
    { icon: <Users className="w-8 h-8 text-tech_green" />, title: "Creator Empowerment", desc: "Democratizing creative expression for everyone" },
    { icon: <Zap className="w-8 h-8 text-yellow-400" />, title: "Extreme Speed", desc: "From idea to reality in unprecedented time" },
    { icon: <Award className="w-8 h-8 text-purple-400" />, title: "Global Quality", desc: "World-class standards in everything we build" },
    { icon: <Shield className="w-8 h-8 text-cyan-400" />, title: "Ethical AI", desc: "Responsible development with human values" },
    { icon: <TrendingUp className="w-8 h-8 text-pink-400" />, title: "Continuous Learning", desc: "Always evolving, always improving" }
  ];

  const partnerships = [
    {
      name: "NVIDIA Inception",
      status: "Active Member",
      benefits: "Capital Connect access, DGX Cloud Credits, Co-branding opportunities",
      icon: "🚀"
    },
    {
      name: "Google for Startups",
      status: "Accelerator Member", 
      benefits: "Cloud credits, TPU access, Gemini API integration",
      icon: "☁️"
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-bright_magenta via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                XEUR.AI
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Democratizing <span className="text-bright_magenta">Game Creation</span>
            </h1>
            <p className="text-xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Transforming ideas into complete games in ~1 hour through revolutionary AI technology
            </p>
            
            {/* Current Status Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              Alpha/Beta Stage • Currently Raising $2.5M Seed • NVIDIA Inception Member
            </div>
            
            {/* Mission Statement */}
            <div className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30 max-w-4xl mx-auto">
              <p className="text-xl text-light_gray_text italic leading-relaxed">
                "To democratize game creation, empowering anyone to bring their interactive visions to life through the power of AI, 
                establishing India as a global hub for gaming technology innovation."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The XEUR.AI Story */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <Rocket className="inline-block w-10 h-10 text-bright_magenta mr-2" />
            The XEUR.AI Story
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Born from the frustration of brilliant ideas trapped by technical barriers
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {storyCards.map((card, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bright_magenta">{card.title}</h3>
                </div>
                <p className="text-light_gray_text/80 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Visionaries */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Users className="inline-block w-10 h-10 text-tech_green mr-2" />
            Meet the Visionaries
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="bg-tech_green/10 rounded-xl p-8 border border-tech_green/20 hover:border-tech_green/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${founder.gradient} flex items-center justify-center text-3xl font-bold text-white mr-6`}>
                    {founder.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-tech_green">{founder.name}</h3>
                    <p className="text-cyan-400 font-semibold">{founder.role}</p>
                  </div>
                </div>
                <p className="text-light_gray_text/80 leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Partnerships */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Globe className="inline-block w-10 h-10 text-cyan-400 mr-2" />
            Strategic Partnerships
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partnerships.map((partnership, index) => (
              <div 
                key={index}
                className="bg-cyan-400/10 rounded-xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{partnership.icon}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{partnership.name}</h3>
                <p className="text-bright_magenta font-semibold mb-4">{partnership.status}</p>
                <p className="text-light_gray_text/70 text-sm">{partnership.benefits}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-light_gray_text/80 text-lg">
              <span className="text-tech_green font-semibold">$500K+</span> in partnership benefits secured
            </p>
          </div>
        </div>
      </div>

      {/* Revolutionary Technology */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <Star className="inline-block w-10 h-10 text-yellow-400 mr-2" />
            Revolutionary Technology
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            8 specialized AI models working in harmony to create complete games
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiModels.map((model, index) => (
              <div 
                key={index}
                className="bg-yellow-400/10 rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">{model.name}</h3>
                <p className="text-sm text-light_gray_text/70">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Milestones & Roadmap */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <TrendingUp className="inline-block w-10 h-10 text-pink-400 mr-2" />
            Key Milestones & Roadmap
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className={`w-6 h-6 rounded-full mr-6 mt-2 ${
                  milestone.status === 'completed' ? 'bg-tech_green' : 
                  milestone.status === 'current' ? 'bg-bright_magenta animate-pulse' : 'bg-light_purple/30'
                }`}></div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-bright_magenta mr-4">{milestone.date}</span>
                    <h3 className="text-lg font-bold text-white">{milestone.event}</h3>
                    {milestone.status === 'current' && (
                      <span className="ml-4 px-3 py-1 bg-bright_magenta/20 text-bright_magenta text-xs rounded-full">CURRENT</span>
                    )}
                  </div>
                  <p className="text-light_gray_text/70">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Funding Status */}
      <div className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-cyan-400/20 to-bright_magenta/20 rounded-xl p-8 border border-cyan-400/30 text-center">
            <h3 className="text-2xl font-bold mb-4">
              <TrendingUp className="inline-block w-8 h-8 text-cyan-400 mr-2" />
              Current Funding Status
            </h3>
            <p className="text-light_gray_text/80 mb-6">
              <strong>Currently Raising:</strong> $2.5M Seed Round at $25M pre-money valuation<br />
              <strong>Use of Funds:</strong> AI development, product scaling, and market expansion
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="bg-cyan-400/20 px-4 py-2 rounded-full text-cyan-400 font-semibold">Engineering: 60%</span>
              <span className="bg-tech_green/20 px-4 py-2 rounded-full text-tech_green font-semibold">GTM: 25%</span>
              <span className="bg-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 font-semibold">Operations: 15%</span>
            </div>
            <p className="text-sm text-light_gray_text/70">
              NVIDIA Inception Capital Connect access provides direct pipeline to AI-focused VCs
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision for the Future */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-bright_magenta/20 to-purple-400/20 rounded-xl p-8 border border-bright_magenta/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <Crown className="inline-block w-10 h-10 text-purple-400 mr-2" />
              Our Vision for the Future
            </h2>
            <p className="text-xl text-light_gray_text/80 mb-6 max-w-4xl mx-auto">
              We envision a world where creativity knows no technical boundaries. Where a teacher in rural India can create 
              educational games as easily as a Hollywood studio produces blockbusters. Where entrepreneurs can prototype game 
              ideas in minutes, not months. Where every human's creative potential can be unleashed through the power of AI.
            </p>
            <p className="text-xl text-light_gray_text/80 max-w-4xl mx-auto">
              XEUR.AI isn't just democratizing game creation—we're catalyzing a fundamental shift in how interactive content 
              is conceived, created, and consumed globally.
            </p>
            
            {/* Made in India Pride */}
            <div className="bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-lg p-6 mt-8 border border-orange-500/30">
              <div className="text-4xl mb-4">🇮🇳</div>
              <p className="text-light_gray_text/80 mb-2">Proudly contributing to India's emergence as a global technology powerhouse</p>
              <p className="text-xl font-bold bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
                "Made in India, for the World"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Heart className="inline-block w-10 h-10 text-red-400 mr-2" />
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-6 border border-light_purple/30 hover:border-red-400/50 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-red-400">{value.title}</h3>
                <p className="text-sm text-light_gray_text/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join the Revolution CTA */}
      <div className="py-16 bg-gradient-to-r from-tech_green/20 to-bright_magenta/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the <span className="text-bright_magenta">Revolution</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Whether you're a creator with an idea, an investor seeking the next big opportunity, or an enterprise looking 
            to transform engagement—XEUR.AI offers the platform to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#demo" className="btn-primary">
              Watch Demo
            </Link>
            <Link href="/contact?service=partnership" className="btn-secondary">
              Partner With Us
            </Link>
            <Link href="/contact?service=investment" className="btn-secondary">
              Investment Opportunities
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CompanyOverview;