
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingPlans = [
    {
      name: "Free Trial",
      price: {
        monthly: "$0",
        annually: "$0"
      },
      description: "Try XEUR.AI with basic features",
      features: [
        { name: "3 game generations per month", included: true },
        { name: "Basic templates only", included: true },
        { name: "Web export only", included: true },
        { name: "XEUR.AI branding", included: true },
        { name: "Community support", included: true },
        { name: "Advanced customization", included: false },
        { name: "Priority rendering", included: false },
        { name: "Commercial usage", included: false }
      ],
      ctaText: "Start Free Trial",
      ctaLink: "/signup",
      isHighlighted: false
    },
    {
      name: "Creator",
      price: {
        monthly: "$29",
        annually: "$19"
      },
      description: "For individual creators and hobbyists",
      features: [
        { name: "20 game generations per month", included: true },
        { name: "All basic templates", included: true },
        { name: "Web and mobile export", included: true },
        { name: "Optional XEUR.AI branding", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced customization", included: true },
        { name: "Priority rendering", included: false },
        { name: "Commercial usage", included: true }
      ],
      ctaText: "Choose Creator",
      ctaLink: "/signup?plan=creator",
      isHighlighted: true
    },
    {
      name: "Pro",
      price: {
        monthly: "$79",
        annually: "$59"
      },
      description: "For professional developers and teams",
      features: [
        { name: "Unlimited game generations", included: true },
        { name: "All templates and custom styles", included: true },
        { name: "All platform exports", included: true },
        { name: "No XEUR.AI branding", included: true },
        { name: "Dedicated support", included: true },
        { name: "Advanced customization", included: true },
        { name: "Priority rendering", included: true },
        { name: "Commercial usage", included: true }
      ],
      ctaText: "Choose Pro",
      ctaLink: "/signup?plan=pro",
      isHighlighted: false
    }
  ];
  
  const faqs = [
    {
      question: "Do I own the games I create?",
      answer: "Yes! You retain 100% ownership of all games created with XEUR.AI, including all intellectual property rights. You're free to distribute, monetize, and modify these games as you wish, subject to the terms of your chosen subscription plan."
    },
    {
      question: "Can I export my games to popular app stores?",
      answer: "Absolutely! Depending on your subscription plan, you can export your games to web, mobile platforms (iOS and Android), and desktop. Pro subscribers get additional export options including console platform preparation."
    },
    {
      question: "What if I need help with my generated game?",
      answer: "All plans come with varying levels of support. Free trials include community support, Creator plans include priority email support, and Pro plans include dedicated support channels. Our team is ready to help with technical questions, export issues, or customization guidance."
    },
    {
      question: "Can I modify the generated code?",
      answer: "Yes! Creator and Pro plans provide access to the underlying code and assets. This allows you to further customize your games beyond what's possible through our interface, or integrate them with existing projects."
    },
    {
      question: "Is there a limit to game complexity?",
      answer: "Each plan has different capabilities regarding game complexity. While all plans can create complete, playable games, Pro plans allow for more complex mechanics, larger worlds, and more sophisticated assets."
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Unlock <span className="text-bright_magenta">God Mode</span>: Pricing That Makes Sense
          </h1>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Choose the plan that fuels your creative ambition. From hobbyists to professional studios,
            we have options for every creator.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12 space-x-4">
            <span className={`text-lg ${!isAnnual ? 'text-bright_magenta font-semibold' : 'text-light_gray_text/70'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-tech_green"
            />
            <span className={`text-lg ${isAnnual ? 'text-bright_magenta font-semibold' : 'text-light_gray_text/70'}`}>
              Annual <span className="text-tech_green">(Save up to 30%)</span>
            </span>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg border p-8 ${
                  plan.isHighlighted 
                    ? 'bg-purple-gradient border-bright_magenta relative shadow-lg shadow-bright_magenta/20' 
                    : 'bg-medium_purple/20 border-light_purple/30'
                }`}
              >
                {plan.isHighlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tech_green text-near_black font-bold py-1 px-4 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-bright_magenta mb-2">
                    {isAnnual ? plan.price.annually : plan.price.monthly}
                    {plan.name !== "Free Trial" && (
                      <span className="text-lg text-light_gray_text/70 font-normal">
                        {isAnnual ? "/mo (billed annually)" : "/month"}
                      </span>
                    )}
                  </div>
                  <p className="text-light_gray_text/70">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check size={18} className="text-tech_green mr-2 shrink-0" />
                      ) : (
                        <div className="w-[18px] h-[18px] bg-light_purple/30 rounded-full mr-2 shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-light_gray_text/50"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <Link 
                    href={plan.ctaLink} 
                    className={`inline-block w-full py-3 px-6 rounded-md font-semibold ${
                      plan.isHighlighted 
                        ? 'bg-bright_magenta text-light_gray_text hover:bg-bright_magenta/90' 
                        : 'bg-medium_purple text-light_gray_text hover:bg-medium_purple/80'
                    } transition-colors`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enterprise */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-medium_purple/30 rounded-lg p-8 border border-light_purple/30">
            <h2 className="text-3xl font-bold mb-4 text-center">Need a Custom Solution?</h2>
            <p className="text-center text-xl mb-8">
              For studios, educational institutions, and enterprises with specific requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-2">
                <Check size={24} className="text-tech_green shrink-0 mt-1" />
                <p>Custom AI model fine-tuning</p>
              </div>
              <div className="flex items-start space-x-2">
                <Check size={24} className="text-tech_green shrink-0 mt-1" />
                <p>Private cloud deployment</p>
              </div>
              <div className="flex items-start space-x-2">
                <Check size={24} className="text-tech_green shrink-0 mt-1" />
                <p>Dedicated support team</p>
              </div>
              <div className="flex items-start space-x-2">
                <Check size={24} className="text-tech_green shrink-0 mt-1" />
                <p>Custom integration services</p>
              </div>
              <div className="flex items-start space-x-2">
                <Check size={24} className="text-tech_green shrink-0 mt-1" />
                <p>Volume licensing</p>
              </div>
              <div className="flex items-start space-x-2">
                <Check size={24} className="text-tech_green shrink-0 mt-1" />
                <p>Training and onboarding</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/contact" className="btn-primary">
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQs */}
      <div className="py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-medium_purple/20 rounded-lg p-6 border border-light_purple/30">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-light_gray_text/80">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl mb-4">Still have questions?</p>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
