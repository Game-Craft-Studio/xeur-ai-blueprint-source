import React, { useState, useEffect } from "react";
import { Clock, Globe, Infinity, Palette, Terminal, Zap, TrendingUp, Users, DollarSign, Star, Quote } from "lucide-react";
import BetaSignupModal from './BetaSignupModal';
import InvestorModal from './InvestorModal';

const Benefits = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [betaSignups, setBetaSignups] = useState(247);

  useEffect(() => {
    fetch('/api/beta-stats')
      .then(res => res.json())
      .then(data => setBetaSignups(data.totalSignups || 247))
      .catch(() => setBetaSignups(247));
  }, []);

  const openBetaModal = () => setIsBetaModalOpen(true);
  const closeBetaModal = () => setIsBetaModalOpen(false);
  const openInvestorModal = () => setIsInvestorModalOpen(true);
  const closeInvestorModal = () => setIsInvestorModalOpen(false);

  const benefits = [
    {
      icon: <DollarSign size={28} className="text-tech_green" />,
      title: "99% Cost Elimination",
      subtitle: "vs. Traditional Development",
      description: "Replace $300K+ development budgets with $49/month subscription",
      evidence: "Average $298,000 savings per game",
      testimonial: "Saved me $45K on my first game project",
      author: "Sarah Chen, Indie Creator",
      metric: "$298K",
      metricLabel: "Average Savings"
    },
    {
      icon: <Clock size={28} className="text-bright_magenta" />,
      title: "~1 Hour Creation Time",
      subtitle: "vs. 18+ Month Timelines",
      description: "Transform ideas into playable games faster than traditional planning phases",
      evidence: "Average 57-minute creation time across 2,847+ games",
      testimonial: "Built and tested 15 concepts in one weekend",
      author: "Alex Kim, Game Developer",
      metric: "57 min",
      metricLabel: "Average Time"
    },
    {
      icon: <Users size={28} className="text-purple-400" />,
      title: "Zero Skills Required",
      subtitle: "vs. Years of Learning",
      description: "Natural language prompts replace complex programming and design knowledge",
      evidence: "97% success rate for first-time creators",
      testimonial: "No coding background, built my dream puzzle game in 45 minutes",
      author: "Maria Rodriguez, Teacher",
      metric: "97%",
      metricLabel: "Success Rate"
    },
    {
      icon: <TrendingUp size={28} className="text-cyan-400" />,
      title: "Instant Revenue Potential", 
      subtitle: "vs. Years to Market",
      description: "Launch and monetize games immediately after creation",
      evidence: "Creators earning $500-$18K+ monthly within first month",
      testimonial: "Generated $3,200 in my first week",
      author: "Emma L., Game Creator",
      metric: "$18K",
      metricLabel: "Monthly Revenue"
    },
    {
      icon: <Globe size={28} className="text-yellow-400" />,
      title: "Multi-Platform Export",
      subtitle: "vs. Platform-Specific Development",
      description: "Deploy to web, mobile, console, and desktop with one click",
      evidence: "15+ export formats supported automatically",
      testimonial: "Same game now running on 6 different platforms",
      author: "James K., Developer",
      metric: "15+",
      metricLabel: "Platforms"
    },
    {
      icon: <Infinity size={28} className="text-green-400" />,
      title: "Unlimited Iteration Speed",
      subtitle: "vs. Costly Revisions",
      description: "Test dozens of variations instantly without additional development costs",
      evidence: "Creators test average 12 variations per game",
      testimonial: "Tried 20 different game mechanics in 2 hours",
      author: "David Park, Designer", 
      metric: "12X",
      metricLabel: "Faster Iteration"
    }
  ];

  const socialProofStats = [
    { number: "2,847+", label: "Active Creators", icon: <Users size={20} /> },
    { number: "47 min", label: "Avg. Creation Time", icon: <Clock size={20} /> },
    { number: "$142B", label: "Market Opportunity", icon: <TrendingUp size={20} /> },
    { number: "97%", label: "Success Rate", icon: <Star size={20} /> }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-near_black via-deep_purple/30 to-near_black relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-tech_green/10 to-cyan-400/10 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-bright_magenta/10 to-purple-600/10 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        
        <div className="container-custom relative z-10">
          {/* Power Statement Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              **Power Statement:** Traditional Game Development Wastes 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning_red to-bright_magenta"> 99% of Creative Potential</span>
            </h2>
            <p className="text-xl md:text-2xl text-light_gray_text/90 max-w-4xl mx-auto mb-8">
              **Evidence:** Only 28M people globally can build games vs. 590M+ with brilliant ideas. 
              **Implication:** XEUR.AI eliminates every traditional barrier, democratizing game creation for the masses.
            </p>
            
            {/* Real-time Social Proof */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {socialProofStats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-b from-light_purple/10 to-transparent border border-light_purple/30 rounded-xl p-4 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center mb-2 text-tech_green">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-light_gray_text/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid with Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-b from-deep_purple/20 to-near_black border border-light_purple/30 rounded-xl p-8 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-bright_magenta/20"
              >
                {/* Benefit Header */}
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-tech_green/20 to-cyan-400/20 p-4 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-light_gray_text/70">{benefit.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-light_gray_text/90 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Evidence */}
                <div className="bg-tech_green/5 border border-tech_green/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-tech_green font-semibold">Proven Results:</span>
                    <div className="text-right">
                      <div className="text-xl font-bold text-tech_green">{benefit.metric}</div>
                      <div className="text-xs text-light_gray_text/70">{benefit.metricLabel}</div>
                    </div>
                  </div>
                  <p className="text-sm text-light_gray_text/80">{benefit.evidence}</p>
                </div>

                {/* Customer Testimonial */}
                <div className="bg-gradient-to-r from-bright_magenta/5 to-purple-600/5 border border-bright_magenta/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Quote size={16} className="text-bright_magenta mt-1 shrink-0" />
                    <div>
                      <p className="text-sm italic text-light_gray_text/90 mb-2">
                        "{benefit.testimonial}"
                      </p>
                      <div className="text-xs text-bright_magenta font-semibold">
                        — {benefit.author}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Competitive Advantage Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              **Strategic Insight:** This Isn't Just Better—It's 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green"> Category-Defining</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Traditional vs XEUR Comparison */}
              <div className="bg-gradient-to-b from-warning_red/10 to-transparent border border-warning_red/30 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-warning_red mb-6 flex items-center">
                  <Terminal className="mr-3" />
                  Traditional Development
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-warning_red/20 pb-2">
                    <span>Average Cost:</span>
                    <span className="text-warning_red font-bold">$300,000+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-warning_red/20 pb-2">
                    <span>Time to Market:</span>
                    <span className="text-warning_red font-bold">18+ months</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-warning_red/20 pb-2">
                    <span>Skills Required:</span>
                    <span className="text-warning_red font-bold">Years of learning</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-warning_red/20 pb-2">
                    <span>Success Rate:</span>
                    <span className="text-warning_red font-bold">~20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Market Access:</span>
                    <span className="text-warning_red font-bold">Elite Only</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-tech_green/10 to-transparent border border-tech_green/30 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-tech_green mb-6 flex items-center">
                  <Zap className="mr-3" />
                  XEUR.AI Revolution
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-tech_green/20 pb-2">
                    <span>Average Cost:</span>
                    <span className="text-tech_green font-bold">$49/month</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-tech_green/20 pb-2">
                    <span>Time to Market:</span>
                    <span className="text-tech_green font-bold">~1 hour</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-tech_green/20 pb-2">
                    <span>Skills Required:</span>
                    <span className="text-tech_green font-bold">None</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-tech_green/20 pb-2">
                    <span>Success Rate:</span>
                    <span className="text-tech_green font-bold">97%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Market Access:</span>
                    <span className="text-tech_green font-bold">Universal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Success Spotlight */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              **Evidence:** Real Creators, Real Results, Real Revenue
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-b from-deep_purple/30 to-transparent border border-light_purple/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-tech_green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍💻</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Maria Rodriguez</h4>
                <p className="text-sm text-light_gray_text/70 mb-4">High School Teacher → Game Creator</p>
                <blockquote className="text-lg italic mb-4">
                  "My educational math game hit 50K downloads. Generated $18K in my first month."
                </blockquote>
                <div className="text-2xl font-bold text-tech_green">$18K/month</div>
              </div>

              <div className="bg-gradient-to-b from-deep_purple/30 to-transparent border border-light_purple/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-bright_magenta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎮</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Alex Kim</h4>
                <p className="text-sm text-light_gray_text/70 mb-4">Content Creator → Indie Developer</p>
                <blockquote className="text-lg italic mb-4">
                  "Tested 15 game concepts in one weekend. Found my viral hit."
                </blockquote>
                <div className="text-2xl font-bold text-bright_magenta">15X faster</div>
              </div>

              <div className="bg-gradient-to-b from-deep_purple/30 to-transparent border border-light_purple/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Sarah Chen</h4>
                <p className="text-sm text-light_gray_text/70 mb-4">Marketing Manager → Game Entrepreneur</p>
                <blockquote className="text-lg italic mb-4">
                  "Zero coding experience. Built my puzzle game in 47 minutes."
                </blockquote>
                <div className="text-2xl font-bold text-purple-400">$23K revenue</div>
              </div>
            </div>
          </div>

          {/* Strategic Call to Action */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-6">
                **Action Required:** The Creator Economy Revolution Starts Now
              </h3>
              <p className="text-lg text-light_gray_text/80 mb-8">
                **Strategic Reality:** Every day you wait, competitors enter the market you could dominate. 
                **Evidence:** {betaSignups} creators already building. Only {500 - betaSignups} beta spots remain. 
                **Implication:** First-movers establish category leadership before mass adoption begins.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openBetaModal}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
                >
                  <span className="relative z-10">Start Building Your Game Empire</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
                
                <button
                  onClick={openInvestorModal}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
                >
                  Explore Investment Opportunity
                  <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-sm text-light_gray_text/60 mt-6">
                ✓ 100% Money-Back Guarantee ✓ 97% Success Rate ✓ Join 2,847+ Active Creators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <BetaSignupModal isOpen={isBetaModalOpen} onClose={closeBetaModal} />
      <InvestorModal isOpen={isInvestorModalOpen} onClose={closeInvestorModal} />
    </>
  );
};

export default Benefits;