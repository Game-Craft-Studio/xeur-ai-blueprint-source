import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, UserPlus, Code, Video, DollarSign, TrendingUp, Users, Star, Quote, Clock } from "lucide-react";
import BetaSignupModal from './BetaSignupModal';

const TargetAudience = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState(0);

  const openBetaModal = () => setIsBetaModalOpen(true);
  const closeBetaModal = () => setIsBetaModalOpen(false);

  const audiences = [
    {
      icon: <UserPlus size={32} className="text-bright_magenta" />,
      name: "Creative Visionaries",
      subtitle: "590M+ People with Game Ideas",
      marketSize: "590M+ globally",
      painPoint: "Brilliant ideas trapped by $300K+ development barriers",
      description: "Transform from dreamer to game creator without learning code, hiring teams, or risking life savings",
      evidenceMetrics: {
        success: "97% first-time success rate",
        revenue: "$500-$18K monthly avg",
        time: "~1 hour creation"
      },
      testimonial: {
        quote: "I had 20+ game ideas over 5 years. XEUR.AI turned my best one into $18K monthly revenue in just 2 months.",
        author: "Maria Rodriguez",
        role: "Teacher → Game Creator",
        result: "$18K/month"
      },
      caseStudy: {
        before: "High school teacher with educational game ideas",
        after: "50K+ downloads, featured in app stores",
        timeframe: "47 minutes to first playable game"
      },
      link: "/use-cases/aspiring-creators",
      color: "from-bright_magenta/20 to-purple-600/20",
      borderColor: "border-bright_magenta/30",
      ctaText: "Turn Your Ideas Into Games"
    },
    {
      icon: <Code size={32} className="text-tech_green" />,
      name: "Indie Developers",
      subtitle: "28M Developers Seeking 10X Speed",
      marketSize: "28M worldwide",
      painPoint: "Talented but overwhelmed by time/cost constraints",
      description: "Accelerate from concept to market in hours instead of months, test unlimited variations, dominate competition",
      evidenceMetrics: {
        success: "15X faster prototyping",
        revenue: "60% cost reduction",
        time: "18 months → 1 hour"
      },
      testimonial: {
        quote: "Built and tested 15 game concepts in one weekend. Found my viral hit that would have taken 2 years traditionally.",
        author: "Alex Kim",
        role: "Indie Developer",
        result: "Viral success"
      },
      caseStudy: {
        before: "Struggling with 6-month development cycles",
        after: "Launched 3 successful games in 2 months",
        timeframe: "From idea paralysis to market leader"
      },
      link: "/use-cases/indie-developers",
      color: "from-tech_green/20 to-cyan-400/20",
      borderColor: "border-tech_green/30",
      ctaText: "Accelerate Your Development"
    },
    {
      icon: <Video size={32} className="text-yellow-400" />,
      name: "Content Creators",
      subtitle: "100M+ Influencers Needing Differentiation",
      marketSize: "100M+ creators",
      painPoint: "Saturated content landscape demanding unique engagement",
      description: "Create custom games for your audience, build deeper engagement, monetize creativity beyond traditional content",
      evidenceMetrics: {
        success: "300% engagement boost",
        revenue: "New revenue streams",
        time: "Same-day content"
      },
      testimonial: {
        quote: "My custom puzzle game got 2M views in the first week. It's the most engaging content I've ever created.",
        author: "Emma L.",
        role: "Content Creator",
        result: "2M views"
      },
      caseStudy: {
        before: "Struggling with content saturation",
        after: "Viral custom games driving brand partnerships",
        timeframe: "From follower plateau to influencer elite"
      },
      link: "/use-cases/content-influencers",
      color: "from-yellow-400/20 to-orange-500/20",
      borderColor: "border-yellow-400/30",
      ctaText: "Create Viral Game Content"
    }
  ];

  const marketInsights = [
    { segment: "Aspiring Creators", size: "590M+", conversion: "0.005%", opportunity: "$142B trapped value" },
    { segment: "Indie Developers", size: "28M", conversion: "2.3%", opportunity: "10X speed advantage" },
    { segment: "Content Creators", size: "100M+", conversion: "0.8%", opportunity: "New revenue streams" }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-near_black via-deep_purple/30 to-near_black relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-bright_magenta/10 to-tech_green/10 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-500/10 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          {/* Power Statement Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              **Market Insight:** 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green"> 718 Million People</span> 
              Want to Create Games
            </h2>
            <p className="text-xl md:text-2xl text-light_gray_text/90 max-w-4xl mx-auto mb-8">
              **Evidence:** 590M+ creative minds + 28M developers + 100M content creators represent the largest untapped creative market in history. 
              **Implication:** XEUR.AI transforms this massive audience from dreamers into revenue-generating game creators, creating unprecedented market expansion.
            </p>

            {/* Market Opportunity Matrix */}
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {marketInsights.map((insight, index) => (
                <div key={index} className="bg-gradient-to-b from-light_purple/10 to-transparent border border-light_purple/30 rounded-xl p-6">
                  <div className="text-2xl font-bold text-tech_green">{insight.size}</div>
                  <div className="text-sm text-light_gray_text/70 mb-2">{insight.segment}</div>
                  <div className="text-xs text-bright_magenta font-semibold">{insight.opportunity}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Audience Analysis */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              **Strategic Analysis:** Each Audience Represents Massive 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green"> Conversion Potential</span>
            </h3>

            {/* Interactive Audience Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-near_black/50 border border-light_purple/30 rounded-full p-2 inline-flex">
                {audiences.map((audience, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveAudience(index)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeAudience === index
                        ? 'bg-bright_magenta text-white shadow-lg'
                        : 'text-light_gray_text/70 hover:text-white'
                    }`}
                  >
                    {audience.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Audience Deep Dive */}
            <div className="max-w-6xl mx-auto">
              <div className={`bg-gradient-to-r ${audiences[activeAudience].color} border ${audiences[activeAudience].borderColor} rounded-xl p-8`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Audience Profile */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-near_black/30 backdrop-blur-sm p-4 rounded-full mr-4">
                        {audiences[activeAudience].icon}
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold">{audiences[activeAudience].name}</h4>
                        <p className="text-lg text-light_gray_text/80">{audiences[activeAudience].subtitle}</p>
                      </div>
                    </div>

                    {/* Market Analysis */}
                    <div className="bg-near_black/20 border border-light_purple/20 rounded-lg p-6 mb-6">
                      <h5 className="text-lg font-semibold mb-4 text-bright_magenta">Market Reality:</h5>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-2xl font-bold text-tech_green">{audiences[activeAudience].marketSize}</div>
                          <div className="text-sm text-light_gray_text/70">Total Addressable Market</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-yellow-400">&lt;1%</div>
                          <div className="text-sm text-light_gray_text/70">Currently Creating Games</div>
                        </div>
                      </div>
                      <p className="text-light_gray_text/90 italic">
                        **Pain Point:** {audiences[activeAudience].painPoint}
                      </p>
                    </div>

                    {/* Value Proposition */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold mb-3 text-tech_green">XEUR.AI Solution:</h5>
                      <p className="text-light_gray_text/90 leading-relaxed">
                        {audiences[activeAudience].description}
                      </p>
                    </div>

                    {/* Evidence Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-xl font-bold text-tech_green">{audiences[activeAudience].evidenceMetrics.success}</div>
                        <div className="text-xs text-light_gray_text/70">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-bright_magenta">{audiences[activeAudience].evidenceMetrics.revenue}</div>
                        <div className="text-xs text-light_gray_text/70">Revenue Impact</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-yellow-400">{audiences[activeAudience].evidenceMetrics.time}</div>
                        <div className="text-xs text-light_gray_text/70">Time to Market</div>
                      </div>
                    </div>
                  </div>

                  {/* Success Story */}
                  <div>
                    <div className="bg-near_black/40 backdrop-blur-sm border border-light_purple/30 rounded-xl p-6 mb-6">
                      <h5 className="text-lg font-semibold mb-4 text-bright_magenta flex items-center">
                        <Star className="mr-2" size={20} />
                        Success Story:
                      </h5>
                      
                      {/* Testimonial */}
                      <div className="mb-6">
                        <div className="flex items-start gap-3 mb-4">
                          <Quote size={20} className="text-tech_green mt-1 shrink-0" />
                          <p className="text-lg italic text-light_gray_text/90 leading-relaxed">
                            "{audiences[activeAudience].testimonial.quote}"
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-white">{audiences[activeAudience].testimonial.author}</div>
                            <div className="text-sm text-light_gray_text/70">{audiences[activeAudience].testimonial.role}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-tech_green">{audiences[activeAudience].testimonial.result}</div>
                            <div className="text-xs text-light_gray_text/70">Achievement</div>
                          </div>
                        </div>
                      </div>

                      {/* Case Study Timeline */}
                      <div className="border-t border-light_purple/20 pt-6">
                        <h6 className="font-semibold mb-3 text-yellow-400">Transformation Timeline:</h6>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-warning_red rounded-full"></div>
                            <span className="text-sm">Before: {audiences[activeAudience].caseStudy.before}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock size={16} className="text-bright_magenta" />
                            <span className="text-sm font-semibold text-bright_magenta">{audiences[activeAudience].caseStudy.timeframe}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-tech_green rounded-full"></div>
                            <span className="text-sm">After: {audiences[activeAudience].caseStudy.after}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Audience-Specific CTA */}
                    <div className="text-center">
                      <button
                        onClick={openBetaModal}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50 mb-4"
                      >
                        <span className="relative z-10">{audiences[activeAudience].ctaText}</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      </button>
                      
                      <div className="flex items-center justify-center gap-4 text-sm text-light_gray_text/70">
                        <Link 
                          href={audiences[activeAudience].link}
                          className="flex items-center gap-2 hover:text-tech_green transition-colors"
                        >
                          Learn more <ArrowRight size={16} />
                        </Link>
                        <span>•</span>
                        <span>97% success rate</span>
                        <span>•</span>
                        <span>100% money-back guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Audience Benefits */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              **Universal Truth:** Every Creator Wins With 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green"> XEUR.AI</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-tech_green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign size={32} className="text-tech_green" />
                </div>
                <h4 className="text-xl font-bold mb-3">Immediate Revenue Potential</h4>
                <p className="text-light_gray_text/80">Start earning from day one with instant game monetization across 15+ platforms</p>
                <div className="text-2xl font-bold text-tech_green mt-3">$500-$18K/month</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-bright_magenta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={32} className="text-bright_magenta" />
                </div>
                <h4 className="text-xl font-bold mb-3">Competitive Advantage</h4>
                <p className="text-light_gray_text/80">Be first to market while competitors spend months in development cycles</p>
                <div className="text-2xl font-bold text-bright_magenta mt-3">99.7% faster</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-purple-400" />
                </div>
                <h4 className="text-xl font-bold mb-3">Community & Support</h4>
                <p className="text-light_gray_text/80">Join 2,847+ active creators sharing success strategies and collaborating</p>
                <div className="text-2xl font-bold text-purple-400 mt-3">2,847+ creators</div>
              </div>
            </div>
          </div>

          {/* Final Strategic CTA */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-6">
                **Action Required:** Join Your Creator Category Revolution
              </h3>
              <p className="text-lg text-light_gray_text/80 mb-8">
                **Strategic Reality:** First-movers in each category establish thought leadership and capture market share before competition emerges. 
                **Evidence:** 718M total addressable market with &lt;1% current penetration. 
                **Implication:** Early adopters become category leaders in the $142B creator economy expansion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openBetaModal}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
                >
                  <span className="relative z-10">Claim Your Creator Category Leadership</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-bright_magenta to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
              </div>
              
              <p className="text-sm text-light_gray_text/60 mt-6">
                ✓ All creator types welcome ✓ 97% success rate ✓ Revenue from day one ✓ Join 2,847+ active creators
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

export default TargetAudience;