import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle, Clock, DollarSign, TrendingUp, Shield, Target, Zap, Star, Award, Rocket, Globe } from 'lucide-react';

const NVIDIAPartnership = () => {
  const benefitsActive = [
    {
      title: "NVIDIA Inception Membership",
      status: "Active",
      value: "$500K+ Total Benefits",
      description: "Full ecosystem access with enterprise credibility boost",
      icon: <CheckCircle className="w-6 h-6 text-tech_green" />
    },
    {
      title: "Capital Connect Access",
      status: "3-Month Active Period",
      value: "Direct VC Network Access",
      description: "May-August 2025 priority access to AI-focused investors",
      icon: <TrendingUp className="w-6 h-6 text-bright_magenta" />
    },
    {
      title: "DGX Cloud Credits",
      status: "Application Submitted",
      value: "Up to $100K",
      description: "GPU infrastructure for LLM training and inference",
      icon: <Clock className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Technical Resources",
      status: "Available",
      value: "$75K+ Value",
      description: "Workshops, training, and technical support access",
      icon: <Zap className="w-6 h-6 text-purple-400" />
    }
  ];

  const strategicAdvantages = [
    {
      title: "Technology Validation",
      description: "NVIDIA's endorsement validates our AI architecture and technical approach",
      impact: "Enhanced credibility with enterprises and investors",
      icon: <Shield className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Infrastructure Advantage",
      description: "Access to cutting-edge GPU infrastructure and optimization tools",
      impact: "60% reduction in inference costs, 50% improvement in speed",
      icon: <Rocket className="w-8 h-8 text-tech_green" />
    },
    {
      title: "Capital Access",
      description: "Direct pipeline to AI-focused VCs through Capital Connect program",
      impact: "Streamlined Series A fundraising process",
      icon: <DollarSign className="w-8 h-8 text-bright_magenta" />
    },
    {
      title: "Competitive Moat",
      description: "Partnership creates differentiation from competitors",
      impact: "Brand association with industry leader",
      icon: <Award className="w-8 h-8 text-purple-400" />
    }
  ];

  const timeline = [
    {
      phase: "Q2 2025",
      status: "Completed",
      title: "Partnership Secured",
      details: "NVIDIA Inception acceptance with Capital Connect access",
      className: "bg-tech_green/20 border-tech_green/50"
    },
    {
      phase: "Q2-Q3 2025",
      status: "Active",
      title: "Capital Connect Maximization",
      details: "3-month intensive VC outreach and relationship building",
      className: "bg-bright_magenta/20 border-bright_magenta/50"
    },
    {
      phase: "Q3 2025",
      status: "Target",
      title: "DGX Credits Activation",
      details: "$100K GPU infrastructure for production scaling",
      className: "bg-yellow-400/20 border-yellow-400/50"
    },
    {
      phase: "Q4 2025",
      status: "Planned",
      title: "Co-Marketing Initiative",
      details: "Joint case studies and technical showcase opportunities",
      className: "bg-purple-400/20 border-purple-400/50"
    }
  ];

  const metrics = [
    { label: "Total Partnership Value", value: "$500K+", color: "text-tech_green" },
    { label: "Capital Connect Duration", value: "3 Months", color: "text-bright_magenta" },
    { label: "VC Network Access", value: "200+ VCs", color: "text-cyan-400" },
    { label: "Infrastructure Credits", value: "$275K", color: "text-purple-400" }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep_purple/30 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-tech_green/20 to-cyan-400/20 border border-tech_green/30 rounded-full text-tech_green text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Strategic Partnership Active
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech_green via-cyan-400 to-bright_magenta animate-gradient">
                NVIDIA Partnership
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Strategic alliance providing $500K+ in resources, exclusive VC access, and cutting-edge AI infrastructure 
              to accelerate XEUR.AI's game creation revolution
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-medium_purple/20 rounded-xl p-4 border border-light_purple/30 text-center">
                  <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                  <div className="text-sm text-light_gray_text/70">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Shield className="inline-block w-10 h-10 text-tech_green mr-2" />
            Active Partnership <span className="text-tech_green">Benefits</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefitsActive.map((benefit, index) => (
              <div key={index} className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30 hover:border-tech_green/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-tech_green font-semibold text-sm">{benefit.status}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-bright_magenta font-bold">{benefit.value}</div>
                  </div>
                </div>
                <p className="text-light_gray_text/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Advantages */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Target className="inline-block w-10 h-10 text-bright_magenta mr-2" />
            Strategic <span className="text-bright_magenta">Advantages</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {strategicAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-deep_purple/50 to-medium_purple/30 rounded-xl p-8 border border-light_purple/30 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{advantage.title}</h3>
                </div>
                <p className="text-light_gray_text/80 mb-4">{advantage.description}</p>
                <div className="bg-near_black/50 rounded-lg p-4 border border-light_purple/20">
                  <div className="text-sm text-bright_magenta font-semibold mb-1">Impact:</div>
                  <p className="text-sm text-light_gray_text/80">{advantage.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Timeline */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Clock className="inline-block w-10 h-10 text-purple-400 mr-2" />
            Partnership <span className="text-purple-400">Timeline</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className={`rounded-xl p-6 border-2 ${item.className}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-white/10 rounded-full px-3 py-1 text-sm font-semibold mr-4">
                        {item.phase}
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Completed' ? 'bg-tech_green/20 text-tech_green' :
                      item.status === 'Active' ? 'bg-bright_magenta/20 text-bright_magenta' :
                      item.status === 'Target' ? 'bg-yellow-400/20 text-yellow-400' :
                      'bg-purple-400/20 text-purple-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-light_gray_text/80">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capital Connect Focus */}
      <div className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-bright_magenta/20 to-purple-400/20 rounded-2xl p-8 border border-bright_magenta/30 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <DollarSign className="inline-block w-10 h-10 text-bright_magenta mr-2" />
              Capital Connect <span className="text-bright_magenta">Priority</span>
            </h2>
            <p className="text-xl text-light_gray_text/80 mb-8">
              Currently in the 3-month Capital Connect program (May-August 2025), providing direct access to 
              NVIDIA's network of AI-focused VCs for our $2.5M seed round and future Series A preparation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-near_black/50 rounded-xl p-6 border border-light_purple/20">
                <div className="text-3xl font-bold text-bright_magenta mb-2">200+</div>
                <div className="text-sm text-light_gray_text/70">VCs in Network</div>
              </div>
              <div className="bg-near_black/50 rounded-xl p-6 border border-light_purple/20">
                <div className="text-3xl font-bold text-tech_green mb-2">15-20</div>
                <div className="text-sm text-light_gray_text/70">Target Contacts</div>
              </div>
              <div className="bg-near_black/50 rounded-xl p-6 border border-light_purple/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">Q4 2025</div>
                <div className="text-sm text-light_gray_text/70">Series A Target</div>
              </div>
            </div>
            
            <p className="text-light_gray_text/70">
              This partnership significantly accelerates our fundraising timeline and provides validation 
              from one of the world's leading AI companies.
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps & ROI */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Rocket className="inline-block w-10 h-10 text-cyan-400 mr-2" />
            Partnership <span className="text-cyan-400">ROI & Next Steps</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Immediate ROI</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-light_gray_text/80">Direct Cost Savings</span>
                  <span className="text-tech_green font-bold">$275K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light_gray_text/80">Brand Value Enhancement</span>
                  <span className="text-bright_magenta font-bold">$500K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light_gray_text/80">Fundraising Acceleration</span>
                  <span className="text-purple-400 font-bold">6+ Months</span>
                </div>
                <div className="flex justify-between items-center border-t border-light_purple/30 pt-4">
                  <span className="text-white font-bold">Total Strategic Value</span>
                  <span className="text-yellow-400 font-bold text-xl">$1M+</span>
                </div>
              </div>
            </div>
            
            <div className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30">
              <h3 className="text-2xl font-bold mb-6 text-bright_magenta">Next 30 Days</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-tech_green mr-3" />
                  <span className="text-light_gray_text/80">Maximize Capital Connect outreach</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-light_gray_text/80">Apply for additional cloud credits</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-light_gray_text/80">Develop co-marketing materials</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-light_gray_text/80">Optimize technical infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partnership-Powered <span className="text-bright_magenta">Growth</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Our NVIDIA partnership provides the infrastructure, credibility, and capital access needed to 
            accelerate XEUR.AI's mission of democratizing game creation worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company-overview" className="btn-primary">
              Learn More About XEUR.AI
            </Link>
            <Link href="/contact?service=partnership" className="btn-secondary">
              Partnership Inquiries
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NVIDIAPartnership;