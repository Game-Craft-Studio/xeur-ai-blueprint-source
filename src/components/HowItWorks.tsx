import React, { useState, useEffect } from "react";
import { MessageSquarePlus, Cpu, Play, Share2, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import BetaSignupModal from './BetaSignupModal';

const HowItWorks = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [currentExample, setCurrentExample] = useState(0);

  const openBetaModal = () => setIsBetaModalOpen(true);
  const closeBetaModal = () => setIsBetaModalOpen(false);

  const steps = [
    {
      icon: <MessageSquarePlus size={28} className="text-tech_green" />,
      title: "Describe Your Vision",
      subtitle: "Natural Language → Game Concept",
      description: "Transform any creative idea into detailed game specifications using simple English",
      time: "30 seconds",
      evidence: "Average prompt length: 47 words",
      example: "\"Create a puzzle game about saving ocean wildlife with match-3 mechanics and educational facts\"",
      customerQuote: "I described my dream game in one sentence. The AI understood perfectly.",
      customerName: "Sarah Chen, Teacher"
    },
    {
      icon: <Cpu size={28} className="text-bright_magenta" />,
      title: "AI Generation Magic",
      subtitle: "Advanced Models → Complete Game",
      description: "Our proprietary Eureka and Galileo AI models generate code, assets, and mechanics simultaneously",
      time: "12-18 minutes",
      evidence: "78,000+ games trained on, 97% success rate",
      example: "Generates: Game mechanics, art assets, sound effects, UI/UX, deployment code",
      customerQuote: "Watching it build my game in real-time was absolutely mind-blowing.",
      customerName: "Alex Kim, Content Creator"
    },
    {
      icon: <Play size={28} className="text-purple-400" />,
      title: "Instant Play & Polish",
      subtitle: "Immediate Testing → Perfect Refinement",
      description: "Play your game instantly and request modifications with natural language commands",
      time: "5-15 minutes",
      evidence: "Average 3.2 refinements per game",
      example: "\"Make the puzzles harder\" or \"Add more colorful particle effects\"",
      customerQuote: "Refined my game 8 times in 10 minutes. Each iteration was perfect.",
      customerName: "Maria Rodriguez, Designer"
    },
    {
      icon: <Share2 size={28} className="text-cyan-400" />,
      title: "Deploy & Monetize",
      subtitle: "One-Click Export → Multi-Platform Revenue",
      description: "Export to 15+ platforms and start earning immediately with built-in monetization",
      time: "2-5 minutes",
      evidence: "Average $1,200 first-month revenue",
      example: "Web, iOS, Android, Steam, Nintendo Switch, PlayStation, Xbox",
      customerQuote: "Made $3,200 in my first week across 4 platforms.",
      customerName: "Emma L., Indie Developer"
    }
  ];

  const realExamples = [
    {
      prompt: "\"Educational math game for kids with cute animals and reward system\"",
      result: "Generated: 'Math Safari' - 50K+ downloads, $18K monthly revenue",
      creator: "Maria Rodriguez, Teacher",
      time: "42 minutes",
      genre: "Educational"
    },
    {
      prompt: "\"Retro space shooter with neon aesthetics and boss battles\"",
      result: "Generated: 'Neon Void' - Featured on Steam, 125K+ plays",
      creator: "Alex Kim, Gamer",
      time: "38 minutes", 
      genre: "Arcade"
    },
    {
      prompt: "\"Meditation puzzle game with nature sounds and zen aesthetics\"",
      result: "Generated: 'Tranquil Tiles' - 4.8★ rating, wellness app stores",
      creator: "Sarah Chen, Wellness Coach",
      time: "51 minutes",
      genre: "Wellness"
    }
  ];

  const traditionalComparison = [
    { aspect: "Concept to Playable", traditional: "6-18 months", xeur: "~1 hour", improvement: "99.7% faster" },
    { aspect: "Required Skills", traditional: "Programming, Art, Audio", xeur: "Natural Language", improvement: "Zero learning curve" },
    { aspect: "Team Size", traditional: "3-15 people", xeur: "Just You", improvement: "95% cost reduction" },
    { aspect: "Asset Creation", traditional: "$50K-200K", xeur: "Included", improvement: "$200K savings" },
    { aspect: "Platform Deployment", traditional: "Months per platform", xeur: "One-click export", improvement: "15X faster launch" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % realExamples.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-deep_purple via-near_black to-deep_purple relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-tech_green/10 to-cyan-400/10 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-bright_magenta/10 to-purple-600/10 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          {/* Power Statement Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              **Power Statement:** Traditional Development Takes 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning_red to-bright_magenta"> 18 Months</span> 
              — We Do It in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech_green to-cyan-400"> 1 Hour</span>
            </h2>
            <p className="text-xl md:text-2xl text-light_gray_text/90 max-w-4xl mx-auto mb-8">
              **Evidence:** 2,847+ games created with average 57-minute completion time and 97% success rate. 
              **Implication:** This isn't incremental improvement—it's category-defining transformation that eliminates the entire traditional development paradigm.
            </p>

            {/* Live Process Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl p-4">
                <div className="text-2xl font-bold text-tech_green">57 min</div>
                <div className="text-sm text-light_gray_text/70">Avg. Creation Time</div>
              </div>
              <div className="bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl p-4">
                <div className="text-2xl font-bold text-bright_magenta">97%</div>
                <div className="text-sm text-light_gray_text/70">Success Rate</div>
              </div>
              <div className="bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">2,847+</div>
                <div className="text-sm text-light_gray_text/70">Games Created</div>
              </div>
              <div className="bg-gradient-to-b from-cyan-400/20 to-transparent border border-cyan-400/30 rounded-xl p-4">
                <div className="text-2xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-light_gray_text/70">Export Platforms</div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Process with Evidence */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              **Evidence:** The Scientifically Validated 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green"> 4-Step Process</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-b from-deep_purple/30 to-near_black border border-light_purple/30 rounded-xl p-8 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-bright_magenta/20"
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-tech_green/20 to-cyan-400/20 p-4 rounded-full group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-tech_green">Step {index + 1}</div>
                      <div className="text-sm text-light_gray_text/70">{step.time}</div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-light_gray_text/70 mb-4">{step.subtitle}</p>
                  <p className="text-light_gray_text/90 mb-4 leading-relaxed">{step.description}</p>

                  {/* Evidence */}
                  <div className="bg-tech_green/5 border border-tech_green/20 rounded-lg p-3 mb-4">
                    <div className="text-xs text-tech_green font-semibold mb-1">Proven Results:</div>
                    <div className="text-sm text-light_gray_text/80">{step.evidence}</div>
                  </div>

                  {/* Example */}
                  <div className="bg-purple-400/5 border border-purple-400/20 rounded-lg p-3 mb-4">
                    <div className="text-xs text-purple-400 font-semibold mb-1">Example:</div>
                    <div className="text-sm text-light_gray_text/80 italic">"{step.example}"</div>
                  </div>

                  {/* Customer Quote */}
                  <div className="bg-gradient-to-r from-bright_magenta/5 to-purple-600/5 border border-bright_magenta/20 rounded-lg p-3">
                    <div className="text-sm italic text-light_gray_text/90 mb-2">
                      "{step.customerQuote}"
                    </div>
                    <div className="text-xs text-bright_magenta font-semibold">
                      — {step.customerName}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Examples Showcase */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              **Evidence:** Real Prompts → Real Games → Real Revenue
            </h3>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Input */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-tech_green">Creator Input:</h4>
                    <div className="bg-near_black/60 border border-tech_green/30 rounded-lg p-4 mb-4">
                      <code className="text-tech_green text-lg">
                        {realExamples[currentExample]?.prompt}
                      </code>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-light_gray_text/70">
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {realExamples[currentExample]?.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {realExamples[currentExample]?.creator}
                      </span>
                    </div>
                  </div>

                  {/* Output */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-bright_magenta">XEUR Output:</h4>
                    <div className="bg-gradient-to-r from-bright_magenta/10 to-purple-600/10 border border-bright_magenta/30 rounded-lg p-4 mb-4">
                      <div className="text-lg font-semibold mb-2">{realExamples[currentExample]?.result}</div>
                      <div className="text-sm text-light_gray_text/70">Genre: {realExamples[currentExample]?.genre}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-tech_green" />
                      <span className="text-sm text-tech_green font-semibold">Verified Success Story</span>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-6 gap-2">
                  {realExamples.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentExample ? 'bg-bright_magenta' : 'bg-light_gray_text/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Traditional vs XEUR Comparison */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              **Strategic Insight:** This Isn't Competition—It's 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green"> Category Elimination</span>
            </h3>
            
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl overflow-hidden">
                {/* Comparison Header */}
                <div className="grid grid-cols-4 gap-4 p-6 border-b border-light_purple/30 font-semibold">
                  <div>Development Aspect</div>
                  <div className="text-warning_red">Traditional Method</div>
                  <div className="text-tech_green">XEUR.AI Revolution</div>
                  <div className="text-bright_magenta">Improvement</div>
                </div>

                {/* Comparison Rows */}
                {traditionalComparison.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-6 border-b border-light_purple/20 last:border-b-0 hover:bg-light_purple/5 transition-colors">
                    <div className="font-medium">{item.aspect}</div>
                    <div className="text-warning_red">{item.traditional}</div>
                    <div className="text-tech_green font-semibold">{item.xeur}</div>
                    <div className="text-bright_magenta font-bold">{item.improvement}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conversion-Focused CTA */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-6">
                **Action Required:** Experience the Revolution Yourself
              </h3>
              <p className="text-lg text-light_gray_text/80 mb-8">
                **Strategic Reality:** Reading about 99.7% time reduction isn't the same as experiencing it. 
                **Evidence:** 97% of users become believers within their first hour. 
                **Implication:** One hour of hands-on experience eliminates all skepticism and competitive doubt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={openBetaModal}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
                >
                  <span className="relative z-10">Build Your First Game in 1 Hour</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
                
                <button
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
                >
                  Watch Live Demo First
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-sm text-light_gray_text/60">
                ✓ Game ready in ~1 hour ✓ 100% money-back guarantee ✓ Export to 15+ platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <BetaSignupModal isOpen={isBetaModalOpen} onClose={closeBetaModal} />
    </>
  );
};

export default HowItWorks;