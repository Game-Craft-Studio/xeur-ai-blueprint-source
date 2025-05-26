import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, Smartphone, Monitor, Globe, Gamepad2, Zap, Clock, Shield, Target } from "lucide-react";

const XeurXport = () => {
  const platforms = [
    { icon: <Monitor className="w-8 h-8" />, name: "Windows PC", desc: "Native .exe deployment with full DirectX support" },
    { icon: <Monitor className="w-8 h-8" />, name: "macOS", desc: "Optimized .app bundles for Mac App Store" },
    { icon: <Smartphone className="w-8 h-8" />, name: "iOS", desc: "App Store ready with Metal rendering" },
    { icon: <Smartphone className="w-8 h-8" />, name: "Android", desc: "Google Play optimized APK/AAB" },
    { icon: <Globe className="w-8 h-8" />, name: "Web (PWA)", desc: "Progressive Web App with offline support" },
    { icon: <Globe className="w-8 h-8" />, name: "Web3/Blockchain", desc: "NFT-enabled games on multiple chains" },
    { icon: <Gamepad2 className="w-8 h-8" />, name: "Steam", desc: "Steam Workshop integration ready" },
    { icon: <Target className="w-8 h-8" />, name: "App Stores", desc: "Automated store submission & optimization" }
  ];

  const deploymentSteps = [
    {
      step: "1",
      title: "Select Platforms",
      description: "Choose your target platforms from our comprehensive list. Multiple selections supported for simultaneous deployment."
    },
    {
      step: "2", 
      title: "Platform Optimization",
      description: "XEUR Xport automatically optimizes assets, controls, and performance for each selected platform's unique requirements."
    },
    {
      step: "3",
      title: "Native Compilation", 
      description: "Advanced compilation engine generates platform-specific code, ensuring optimal performance and native user experience."
    },
    {
      step: "4",
      title: "Quality Assurance",
      description: "Automated testing ensures compatibility, performance benchmarks, and platform compliance before final build."
    },
    {
      step: "5",
      title: "Package & Deploy",
      description: "Final packages created with all necessary assets, metadata, and store-ready configurations for immediate distribution."
    }
  ];

  const pricingPlans = [
    {
      name: "Per-Export",
      price: "$29",
      period: "per platform export",
      description: "Perfect for testing and single deployments",
      features: [
        "Single platform deployment",
        "Standard optimization", 
        "48-hour processing",
        "Basic store metadata",
        "Standard support",
        "Download delivery"
      ],
      ctaText: "Export Now",
      ctaLink: "/signup?plan=export-single",
      highlighted: false
    },
    {
      name: "Multi-Platform Bundle",
      price: "$99", 
      period: "up to 5 platforms",
      description: "Most popular for serious developers",
      features: [
        "5 platform simultaneous export",
        "Advanced optimization",
        "24-hour processing", 
        "Enhanced store metadata",
        "Priority support",
        "Cloud delivery + CDN",
        "Version control"
      ],
      ctaText: "Bundle Export",
      ctaLink: "/signup?plan=export-bundle",
      highlighted: true
    },
    {
      name: "Enterprise Volume",
      price: "Custom",
      period: "high-volume deployment", 
      description: "For studios and enterprises",
      features: [
        "Unlimited platform exports",
        "Custom optimization profiles",
        "1-hour processing SLA",
        "White-label deployment",
        "Dedicated support team",
        "API integration",
        "Custom delivery options",
        "Advanced analytics"
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact?service=export-enterprise",
      highlighted: false
    }
  ];

  const performanceMetrics = [
    { number: "99%", label: "Platform Compatibility" },
    { number: "3.2s", label: "Average Deploy Time" },
    { number: "60fps", label: "Guaranteed Performance" },
    { number: "8", label: "Simultaneous Platforms" }
  ];

  const technicalSpecs = [
    {
      title: "Supported Engines",
      content: [
        "Native Compilation: Custom XEUR engine optimized for each platform",
        "Web Technologies: WebGL, WebAssembly, Progressive Web Apps", 
        "Mobile Frameworks: Native iOS/Android with cross-platform optimization",
        "Desktop: DirectX 12, Metal, Vulkan API support"
      ]
    },
    {
      title: "Asset Optimization",
      content: [
        "Texture Compression: Platform-specific formats (ASTC, ETC2, PVRTC)",
        "Model Optimization: LOD generation, polygon reduction",
        "Audio Compression: Adaptive bitrate based on platform capabilities", 
        "Bundle Size: 70% average reduction from source"
      ]
    },
    {
      title: "Performance Targets",
      content: [
        "Frame Rate: 60fps minimum on target hardware",
        "Loading Times: <3 seconds initial load",
        "Memory Usage: Optimized for device constraints",
        "Battery Efficiency: Mobile-optimized power consumption"
      ]
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-bright_magenta">XEUR.AI</span>
                <span className="text-light_gray_text mx-4">×</span>
                <span className="text-pink-400">XPORT</span>
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              One Game, <span className="text-bright_magenta">Every Platform</span>
            </h2>
            <p className="text-xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Revolutionary cross-platform deployment engine. Create once with XEUR.AI, deploy everywhere with XEUR Xport. 
              From web to mobile to blockchain - instant multi-platform distribution.
            </p>
          </div>
        </div>
      </div>

      {/* Platform Showcase */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Deploy to <span className="text-bright_magenta">Every Platform</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-6 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="text-bright_magenta mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-bright_magenta transition-colors">
                  {platform.name}
                </h3>
                <p className="text-sm text-light_gray_text/70">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deployment Process */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Zap className="inline-block w-10 h-10 text-tech_green mr-2" />
            One-Click Deployment Process
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            From game selection to multi-platform distribution in minutes, not months
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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

      {/* Performance Metrics */}
      <div className="py-16 bg-gradient-to-r from-tech_green/10 to-cyan-400/10">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Clock className="inline-block w-10 h-10 text-tech_green mr-2" />
            Performance Benchmarks
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-tech_green mb-2">
                  {metric.number}
                </div>
                <div className="text-light_gray_text/70">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Target className="inline-block w-10 h-10 text-pink-400 mr-2" />
            Export Pricing Models
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Flexible pricing to match your deployment needs - from single exports to enterprise volumes
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.highlighted 
                    ? 'bg-purple-gradient border-bright_magenta shadow-lg shadow-bright_magenta/20' 
                    : 'bg-medium_purple/20 border-light_purple/30'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-tech_green text-near_black font-bold py-1 px-4 rounded-full text-sm">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-bright_magenta mb-1">{plan.price}</div>
                  <div className="text-sm text-light_gray_text/70 mb-3">{plan.period}</div>
                  <p className="text-light_gray_text/70">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check size={18} className="text-tech_green mr-3 shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={plan.ctaLink}
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.highlighted 
                      ? 'bg-bright_magenta text-light_gray_text hover:bg-bright_magenta/90' 
                      : 'bg-medium_purple text-light_gray_text hover:bg-medium_purple/80'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Shield className="inline-block w-10 h-10 text-cyan-400 mr-2" />
            Technical Specifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30">
                <h3 className="text-xl font-semibold mb-6 text-cyan-400">{spec.title}</h3>
                <ul className="space-y-3">
                  {spec.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-light_gray_text/80">
                      <span className="font-semibold text-light_gray_text">
                        {item.split(':')[0]}:
                      </span>{' '}
                      {item.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-bright_magenta/20 to-pink-400/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Deploy <span className="text-bright_magenta">Everywhere?</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Transform your XEUR.AI created game into a multi-platform phenomenon. One click, infinite reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?plan=export" className="btn-primary">
              Start Export Process
            </Link>
            <Link href="/demo?service=xport" className="btn-secondary">
              View Demo
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default XeurXport;