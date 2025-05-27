import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Code, Plus, Minus, Bug, Zap, Filter } from "lucide-react";

const LeverageChangelogs = () => {
  const [selectedVersion, setSelectedVersion] = useState("all");

  const versions = [
    { id: "all", name: "All Versions" },
    { id: "3.2", name: "v3.2.x" },
    { id: "3.1", name: "v3.1.x" },
    { id: "3.0", name: "v3.0.x" },
    { id: "2.9", name: "v2.9.x" }
  ];

  const changelogs = [
    {
      version: "3.2.1",
      releaseDate: "2025-05-25",
      status: "stable",
      majorVersion: "3.2",
      newFeatures: [
        "Enhanced cross-platform deployment with 40% faster rendering",
        "Advanced texture compression for mobile platforms",
        "Real-time multiplayer game template library", 
        "Integrated voice synthesis for NPC dialogue generation"
      ],
      improvements: [
        "Optimized memory usage in physics simulation engine",
        "Improved asset loading times by 25%",
        "Enhanced error reporting with detailed stack traces",
        "Better mobile touch controls calibration"
      ],
      bugFixes: [
        "Fixed occasional crash when exporting to iOS platform",
        "Resolved texture bleeding issues in 3D model rendering",
        "Fixed API rate limiting edge cases",
        "Corrected audio synchronization in cut-scenes"
      ],
      codeSnippets: [
        {
          title: "New Multi-Platform Export API",
          language: "javascript",
          code: `// Export to multiple platforms simultaneously
const exportResult = await xeur.deploy({
  platforms: ['ios', 'android', 'web'],
  optimization: 'aggressive',
  compression: true
});`
        }
      ]
    },
    {
      version: "3.1.8",
      releaseDate: "2025-05-10", 
      status: "stable",
      majorVersion: "3.1",
      newFeatures: [
        "Web3 blockchain integration beta support",
        "NFT asset generation and minting capabilities",
        "Smart contract deployment automation",
        "Decentralized game hosting options"
      ],
      improvements: [
        "Enhanced AI model training efficiency by 30%",
        "Improved natural language processing accuracy",
        "Better game balance optimization algorithms",
        "Streamlined onboarding process for new users"
      ],
      bugFixes: [
        "Fixed memory leaks in continuous game generation",
        "Resolved WebGL compatibility issues on older browsers",
        "Fixed asset pipeline corruption on large projects",
        "Corrected timezone handling in analytics dashboard"
      ],
      codeSnippets: [
        {
          title: "Web3 Integration Example",
          language: "javascript", 
          code: `// Deploy game with NFT support
const web3Game = await xeur.createWeb3Game({
  blockchain: 'ethereum',
  nftCollection: 'game-assets',
  smartContract: true
});`
        }
      ]
    },
    {
      version: "3.0.12",
      releaseDate: "2025-04-28",
      status: "stable", 
      majorVersion: "3.0",
      newFeatures: [
        "Revolutionary physics engine with realistic simulations",
        "Advanced AI behavior trees for NPCs",
        "Dynamic weather and environmental systems",
        "Procedural quest generation algorithms"
      ],
      improvements: [
        "Major performance overhaul - 50% faster game creation",
        "Enhanced user interface with modern design patterns",
        "Improved documentation and code examples",
        "Better integration with third-party services"
      ],
      bugFixes: [
        "Fixed rare data corruption in save game systems",
        "Resolved animation blending issues",
        "Fixed OAuth authentication edge cases",
        "Corrected asset versioning conflicts"
      ],
      codeSnippets: [
        {
          title: "New Physics Engine API",
          language: "javascript",
          code: `// Create realistic physics simulation
const physics = xeur.physics.create({
  gravity: { x: 0, y: -9.81, z: 0 },
  collisionDetection: 'continuous',
  solver: 'iterative'
});`
        }
      ]
    },
    {
      version: "2.9.15",
      releaseDate: "2025-04-15",
      status: "legacy",
      majorVersion: "2.9", 
      newFeatures: [
        "Enhanced mobile game optimization suite",
        "Advanced analytics and player behavior tracking",
        "Social features integration (leaderboards, achievements)",
        "Cloud save synchronization across devices"
      ],
      improvements: [
        "Optimized asset compression for mobile devices",
        "Improved battery life on mobile games",
        "Enhanced security for user data protection",
        "Better error handling and user feedback"
      ],
      bugFixes: [
        "Fixed crashes on low-memory Android devices", 
        "Resolved audio playback issues on iOS Safari",
        "Fixed social login integration problems",
        "Corrected analytics data collection edge cases"
      ]
    }
  ];

  const filteredChangelogs = selectedVersion === "all" 
    ? changelogs 
    : changelogs.filter(log => log.majorVersion === selectedVersion);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable": return "text-tech_green bg-tech_green/20 border-tech_green/30";
      case "beta": return "text-purple-400 bg-purple-400/20 border-purple-400/30";
      case "legacy": return "text-light_gray_text bg-light_gray_text/20 border-light_gray_text/30";
      default: return "text-light_gray_text bg-light_gray_text/20 border-light_gray_text/30";
    }
  };

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                Technical Insights & Changelogs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Delve into detailed release notes, API updates, and the mechanics of our innovation. 
              Every line of code, every improvement documented.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium">
              <Code className="w-4 h-4 mr-2" />
              Semantic Versioning • Detailed Documentation
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-8 bg-deep_purple/30 sticky top-[73px] z-40 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-blue-400" />
            <span className="text-lg font-semibold text-blue-400">Filter by Version</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {versions.map((version) => (
              <button
                key={version.id}
                onClick={() => setSelectedVersion(version.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedVersion === version.id
                    ? "bg-blue-400 text-near_black"
                    : "bg-medium_purple/30 text-light_gray_text hover:bg-blue-400/20 hover:text-blue-400 border border-light_purple/30"
                }`}
              >
                {version.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Changelogs */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {selectedVersion === "all" ? "All Versions" : `Version ${selectedVersion}`}
              </h2>
              <p className="text-light_gray_text/70">
                {filteredChangelogs.length} release{filteredChangelogs.length !== 1 ? "s" : ""} documented
              </p>
            </div>

            <div className="space-y-12">
              {filteredChangelogs.map((changelog) => (
                <article 
                  key={changelog.version}
                  className="bg-gradient-to-br from-medium_purple/20 to-deep_purple/20 rounded-2xl border border-light_purple/30 overflow-hidden hover:border-blue-400/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 p-8 border-b border-light_purple/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-3xl font-bold text-blue-400">
                            Version {changelog.version}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(changelog.status)}`}>
                            {changelog.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center text-light_gray_text/60">
                          <Calendar className="w-4 h-4 mr-2" />
                          Released {formatDate(changelog.releaseDate)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* New Features */}
                      <div>
                        <h4 className="flex items-center text-xl font-semibold mb-4 text-tech_green">
                          <Plus className="w-5 h-5 mr-2" />
                          New Features
                        </h4>
                        <ul className="space-y-3">
                          {changelog.newFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-tech_green rounded-full mr-3 mt-2 shrink-0"></div>
                              <span className="text-light_gray_text/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Improvements */}
                      <div>
                        <h4 className="flex items-center text-xl font-semibold mb-4 text-blue-400">
                          <Zap className="w-5 h-5 mr-2" />
                          Improvements
                        </h4>
                        <ul className="space-y-3">
                          {changelog.improvements.map((improvement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 shrink-0"></div>
                              <span className="text-light_gray_text/80">{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bug Fixes */}
                    <div className="mt-8">
                      <h4 className="flex items-center text-xl font-semibold mb-4 text-bright_magenta">
                        <Bug className="w-5 h-5 mr-2" />
                        Bug Fixes
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {changelog.bugFixes.map((fix, idx) => (
                          <div key={idx} className="flex items-start">
                            <Minus className="w-4 h-4 text-bright_magenta mr-3 mt-1 shrink-0" />
                            <span className="text-light_gray_text/80">{fix}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Code Snippets */}
                    {changelog.codeSnippets && (
                      <div className="mt-8">
                        <h4 className="flex items-center text-xl font-semibold mb-4 text-cyan-400">
                          <Code className="w-5 h-5 mr-2" />
                          Code Examples
                        </h4>
                        <div className="space-y-4">
                          {changelog.codeSnippets.map((snippet, idx) => (
                            <div key={idx} className="bg-near_black/50 rounded-lg border border-light_purple/20 overflow-hidden">
                              <div className="bg-light_purple/10 px-4 py-2 border-b border-light_purple/20">
                                <span className="text-sm font-medium text-cyan-400">{snippet.title}</span>
                              </div>
                              <pre className="p-4 text-sm text-light_gray_text/90 overflow-x-auto">
                                <code>{snippet.code}</code>
                              </pre>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {filteredChangelogs.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-4 text-light_gray_text">No Changelogs Found</h3>
                <p className="text-light_gray_text/70 mb-8">
                  No changelogs match the selected version. Try selecting a different filter.
                </p>
                <button 
                  onClick={() => setSelectedVersion("all")}
                  className="btn-primary"
                >
                  View All Versions
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Developer Resources */}
      <div className="py-16 bg-gradient-to-r from-blue-400/10 to-cyan-400/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Developer <span className="text-blue-400">Resources</span>
            </h2>
            <p className="text-xl text-light_gray_text/80 mb-8">
              Access comprehensive documentation, API references, and integration guides to make the most of our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/docs" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Documentation
              </Link>
              <Link 
                href="/xeur-api" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-blue-400/70 rounded-xl hover:border-blue-400 hover:bg-blue-400/10 transform hover:scale-105"
              >
                API Reference
              </Link>
              <Link 
                href="/leverage" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-cyan-400/70 rounded-xl hover:border-cyan-400 hover:bg-cyan-400/10 transform hover:scale-105"
              >
                Back to Leverage
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LeverageChangelogs;