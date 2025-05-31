import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const XeurXport = () => {
  const currentCapabilities = [
    { name: "Unreal Engine Export", desc: "Direct .uproject file generation from alpha platform", status: "✅ Available" },
    { name: "Web Deployment", desc: "Hosted web-based game output for immediate testing", status: "✅ Available" },
    { name: "Asset Package", desc: "Complete game asset bundle with source files", status: "✅ Available" },
    { name: "Development Ready", desc: "Platform-ready foundation for further development", status: "✅ Available" }
  ];

  const roadmapPlatforms = [
    { name: "Windows PC", desc: "Native .exe deployment with DirectX support", status: "🚀 Roadmap" },
    { name: "macOS", desc: "Optimized .app bundles for Mac distribution", status: "🚀 Roadmap" },
    { name: "iOS", desc: "App Store ready with Metal rendering", status: "🚀 Roadmap" },
    { name: "Android", desc: "Google Play optimized APK deployment", status: "🚀 Roadmap" },
    { name: "Steam", desc: "Steam Workshop integration capabilities", status: "🚀 Roadmap" },
    { name: "Web3/Blockchain", desc: "NFT-enabled games on multiple chains", status: "🔮 Vision" }
  ];

  const deploymentSteps = [
    {
      step: "1",
      title: "Create Game",
      description: "Use XEUR.AI alpha platform to create your game with AI-powered development."
    },
    {
      step: "2", 
      title: "Alpha Export",
      description: "Current: Export Unreal Engine project files for further development and testing."
    },
    {
      step: "3",
      title: "Platform Optimization (Roadmap)",
      description: "Future: Automated optimization for specific platform requirements and constraints."
    },
    {
      step: "4",
      title: "Multi-Platform Deploy (Vision)",
      description: "Future: One-click deployment to mobile, desktop, console, and web platforms."
    }
  ];

  return (
    <>
      <Head>
        <title>XEUR Xport - Multi-Platform Deployment Roadmap | XEUR.AI</title>
        <meta name="description" content="XEUR Xport multi-platform deployment vision. Current alpha export capabilities and Series A development roadmap for comprehensive platform support." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    XEUR Xport
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Multi-Platform Deployment <span className="text-bright_magenta">Vision</span>
                </h2>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Series A Development Roadmap • Alpha Export Foundation Proven
                </p>
                
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
                  <p className="text-yellow-400 font-semibold text-sm">
                    🚀 DEVELOPMENT ROADMAP: Multi-platform export in Series A development pipeline. Alpha platform foundation proven.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Current Capabilities */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Current <span className="text-tech_green">Export Capabilities</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {currentCapabilities.map((capability, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl p-6 hover:border-tech_green/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-tech_green">{capability.name}</h3>
                        <span className="text-sm bg-tech_green/20 px-3 py-1 rounded-full text-tech_green">
                          {capability.status}
                        </span>
                      </div>
                      <p className="text-light_gray_text/80">{capability.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Partnership Foundation */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Partnership Foundation for Platform Expansion
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Microsoft */}
                  <div className="text-center p-8 bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">M</div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Microsoft Azure</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      Cloud infrastructure foundation for scalable multi-platform deployment services.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Global CDN + enterprise deployment capabilities
                    </p>
                  </div>

                  {/* NVIDIA */}
                  <div className="text-center p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">N</div>
                    <h3 className="text-2xl font-bold text-tech_green mb-4">NVIDIA Acceleration</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      Advanced GPU optimization for cross-platform game compilation and deployment.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Platform-specific optimization + performance acceleration
                    </p>
                  </div>

                  {/* Google */}
                  <div className="text-center p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">G</div>
                    <h3 className="text-2xl font-bold text-bright_magenta mb-4">Google Cloud</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      Global deployment infrastructure and mobile platform optimization capabilities.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Play Store integration + global scaling infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deployment Process */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Deployment Evolution Roadmap
                  </span>
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                  {deploymentSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-gradient-to-r from-bright_magenta to-pink-400 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-bright_magenta">{step.title}</h3>
                      <p className="text-sm text-light_gray_text/70">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Platform Roadmap */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Platform <span className="text-bright_magenta">Roadmap</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {roadmapPlatforms.map((platform, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-b from-bright_magenta/10 to-transparent border border-bright_magenta/30 rounded-xl p-6 text-center hover:border-bright_magenta/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-bright_magenta">{platform.name}</h3>
                        <span className="text-xs bg-bright_magenta/20 px-2 py-1 rounded-full text-bright_magenta">
                          {platform.status}
                        </span>
                      </div>
                      <p className="text-sm text-light_gray_text/70">{platform.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Series A Development Focus */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Series A Development Priority
                  </span>
                </h2>
                
                <div className="bg-gradient-to-r from-bright_magenta/20 to-tech_green/20 border border-bright_magenta/30 rounded-2xl p-8 mb-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Multi-Platform Export: The Strategic Advantage</h3>
                    <p className="text-xl text-light_gray_text/80 mb-6">
                      Alpha platform proven for core game creation. Series A acceleration targets 
                      comprehensive multi-platform deployment capabilities.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <h4 className="text-xl font-bold text-tech_green mb-2">Alpha Platform</h4>
                        <p className="text-light_gray_text/80">Working Export Foundation</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-bright_magenta mb-2">Series A Focus</h4>
                        <p className="text-light_gray_text/80">Multi-Platform Deployment</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-purple-400 mb-2">Market Impact</h4>
                        <p className="text-light_gray_text/80">Platform Domination</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6">Experience Current Capabilities</h3>
                  <p className="text-light_gray_text/80 mb-8">
                    See our alpha export capabilities in action. Multi-platform features will build on this foundation.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://www.youtube.com/watch?v=XtI4AndkV24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                    >
                      🎬 Watch Alpha Export Demo
                    </a>
                    
                    <a
                      href="mailto:harshit@cpgplay.com?subject=Multi-Platform Export Development"
                      className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      💼 Discuss Development Roadmap
                    </a>
                  </div>
                  
                  <p className="text-sm text-light_gray_text/60 mt-6">
                    Alpha export proven • Multi-platform roadmap planned • Partnership foundation ready
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default XeurXport;