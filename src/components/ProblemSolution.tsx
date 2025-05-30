import React, { useState } from "react";
import { X, CheckCheck, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const ProblemSolution = () => {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');

  const problems = [
    {
      icon: <DollarSign className="text-warning_red" />,
      title: "Devastating Financial Barriers",
      description: "$300K+ average development cost locks out 590M+ creative minds",
      impact: "99.95% market exclusion rate"
    },
    {
      icon: <Clock className="text-warning_red" />,
      title: "Soul-Crushing Time Requirements", 
      description: "18+ month development cycles kill momentum and inspiration",
      impact: "87% of ideas never get built"
    },
    {
      icon: <Users className="text-warning_red" />,
      title: "Technical Skill Monopoly",
      description: "Only 28M developers globally can build games vs. 590M+ with ideas",
      impact: "2,000:1 creator-to-developer ratio"
    },
    {
      icon: <TrendingUp className="text-warning_red" />,
      title: "Massive Market Dysfunction",
      description: "Gaming industry loses $142B annually in untapped creative potential",
      impact: "21X smaller than possible market"
    }
  ];

  const solutions = [
    {
      icon: <CheckCheck className="text-tech_green" />,
      title: "Instant Creation Power",
      description: "Transform any idea into playable game in ~1 hour using natural language",
      result: "2,847 creators already building games daily"
    },
    {
      icon: <DollarSign className="text-tech_green" />,
      title: "99% Cost Elimination",
      description: "Replace $300K+ budgets with $49/month subscription",
      result: "Average $298,000 savings per game"
    },
    {
      icon: <Clock className="text-tech_green" />,
      title: "Lightning-Fast Iteration",
      description: "Test 15+ game concepts in a weekend vs. years per attempt",
      result: "Alex Kim found his hit game in one weekend"
    },
    {
      icon: <TrendingUp className="text-tech_green" />,
      title: "Market Expansion Reality",
      description: "Enable 590M+ creators to build games, creating 21X market growth",
      result: "$142B trapped value now accessible"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-warning_red">$142 Billion Problem</span> 
            {' '}vs. The <span className="text-tech_green">1-Hour Solution</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 max-w-3xl mx-auto">
            **Power Statement:** The gaming industry suffers from the most dramatic market dysfunction in tech history. 
            **Evidence:** 590M+ creative minds remain locked out by antiquated development barriers. 
            **Implication:** XEUR.AI represents the largest market expansion opportunity since mobile computing.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-near_black/50 border border-light_purple/30 rounded-full p-2 inline-flex">
            <button
              onClick={() => setActiveTab('problem')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'problem'
                  ? 'bg-warning_red text-white shadow-lg'
                  : 'text-light_gray_text/70 hover:text-white'
              }`}
            >
              The Broken System
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'solution'
                  ? 'bg-tech_green text-white shadow-lg'
                  : 'text-light_gray_text/70 hover:text-white'
              }`}
            >
              The XEUR Solution
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Problem Column */}
          <div className={`transform transition-all duration-500 ${
            activeTab === 'problem' ? 'scale-105 z-10' : 'scale-95 opacity-50'
          }`}>
            <div className="bg-gradient-to-b from-warning_red/10 to-near_black border border-warning_red/30 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-warning_red/20 flex items-center justify-center mr-4">
                  <X size={24} className="text-warning_red" />
                </div>
                <h3 className="text-2xl font-bold text-warning_red">Traditional Development: Market Failure</h3>
              </div>
              
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="group hover:bg-warning_red/5 p-4 rounded-lg transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-warning_red/10 flex items-center justify-center shrink-0 group-hover:bg-warning_red/20 transition-colors">
                        {problem.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{problem.title}</h4>
                        <p className="text-light_gray_text/80 mb-2">{problem.description}</p>
                        <div className="text-warning_red font-semibold text-sm">
                          📊 Impact: {problem.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem Amplification Quote */}
              <div className="mt-8 p-6 bg-warning_red/5 border border-warning_red/20 rounded-lg">
                <blockquote className="text-lg italic text-light_gray_text/90 mb-3">
                  "I had 50+ game ideas over 10 years. Every single one died because I couldn't afford $300K+ 
                  and 2 years of my life for each attempt."
                </blockquote>
                <div className="text-sm text-warning_red font-semibold">
                  — Former Frustrated Creator (now using XEUR.AI)
                </div>
              </div>
            </div>
          </div>

          {/* Solution Column */}
          <div className={`transform transition-all duration-500 ${
            activeTab === 'solution' ? 'scale-105 z-10' : 'scale-95 opacity-50'
          }`}>
            <div className="bg-gradient-to-b from-tech_green/10 to-near_black border border-tech_green/30 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-tech_green/20 flex items-center justify-center mr-4">
                  <CheckCheck size={24} className="text-tech_green" />
                </div>
                <h3 className="text-2xl font-bold text-tech_green">XEUR.AI: Market Democratization</h3>
              </div>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="group hover:bg-tech_green/5 p-4 rounded-lg transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-tech_green/10 flex items-center justify-center shrink-0 group-hover:bg-tech_green/20 transition-colors">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{solution.title}</h4>
                        <p className="text-light_gray_text/80 mb-2">{solution.description}</p>
                        <div className="text-tech_green font-semibold text-sm">
                          ✅ Proven: {solution.result}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Success Story */}
              <div className="mt-8 p-6 bg-tech_green/5 border border-tech_green/20 rounded-lg">
                <blockquote className="text-lg italic text-light_gray_text/90 mb-3">
                  "XEUR.AI turned my decade of trapped game ideas into reality. I've launched 3 games 
                  and generated $45K in revenue in just 2 months."
                </blockquote>
                <div className="text-sm text-tech_green font-semibold">
                  — Sarah Chen, Now Full-Time Game Creator
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Transformation Metrics */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning_red via-bright_magenta to-tech_green">
              The Great Market Transformation
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-warning_red/20 to-transparent border border-warning_red/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-warning_red mb-2">Before</div>
              <div className="text-4xl font-bold mb-2">28M</div>
              <div className="text-sm text-light_gray_text/70">Can Build Games</div>
            </div>
            
            <div className="bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-tech_green mb-2">After</div>
              <div className="text-4xl font-bold mb-2">590M+</div>
              <div className="text-sm text-light_gray_text/70">Can Build Games</div>
            </div>
            
            <div className="bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-bright_magenta mb-2">Growth</div>
              <div className="text-4xl font-bold mb-2">21X</div>
              <div className="text-sm text-light_gray_text/70">Market Expansion</div>
            </div>
            
            <div className="bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Value</div>
              <div className="text-4xl font-bold mb-2">$142B</div>
              <div className="text-sm text-light_gray_text/70">Unlocked Annually</div>
            </div>
          </div>
        </div>

        {/* Strategic Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-deep_purple/30 to-medium_purple/20 border border-light_purple/30 rounded-xl p-8">
            <h4 className="text-2xl font-bold mb-4">
              The Window Is Closing
            </h4>
            <p className="text-lg text-light_gray_text/80 mb-6">
              **Strategic Insight:** First-mover advantage in market democratization creates lasting competitive moats. 
              **Evidence:** Only 247 beta spots remain of 500 total. 
              **Implication:** Early adopters establish category leadership before competition emerges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-tech_green to-cyan-400 rounded-xl hover:from-cyan-400 hover:to-tech_green transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-tech_green/50">
                <span className="relative z-10">Claim Beta Access Now</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-tech_green to-cyan-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-bright_magenta/70 rounded-xl hover:border-bright_magenta hover:bg-bright_magenta/10 transform hover:scale-105">
                View Investment Deck
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;