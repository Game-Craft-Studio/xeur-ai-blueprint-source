
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, Zap, Target, Puzzle, Coins } from "lucide-react";

const IndieDevelopers = () => {
  const challenges = [
    {
      title: "Time Constraints",
      description: "Traditional development cycles can take months or years, delaying your time to market.",
      icon: <Clock className="h-8 w-8 text-electric_blue" />
    },
    {
      title: "Limited Resources",
      description: "Small teams struggle to handle all aspects of game development effectively.",
      icon: <Puzzle className="h-8 w-8 text-electric_blue" />
    },
    {
      title: "Market Competition",
      description: "Standing out among thousands of indie games requires innovation and quality.",
      icon: <Target className="h-8 w-8 text-electric_blue" />
    },
    {
      title: "Budget Constraints",
      description: "Costly assets, tools, and marketing can quickly deplete limited indie budgets.",
      icon: <Coins className="h-8 w-8 text-electric_blue" />
    }
  ];

  const benefits = [
    {
      title: "Rapid Prototyping",
      description: "Test game concepts in hours instead of weeks. Validate ideas quickly before committing resources.",
      icon: <Zap className="h-8 w-8 text-tech_green" />
    },
    {
      title: "Asset Generation",
      description: "Create custom game assets on demand - models, textures, animations, music, and more.",
      icon: <Puzzle className="h-8 w-8 text-tech_green" />
    },
    {
      title: "Workflow Integration",
      description: "Seamlessly export to major game engines and platforms, maintaining your existing workflow.",
      icon: <Target className="h-8 w-8 text-tech_green" />
    },
    {
      title: "Cost Efficiency",
      description: "Reduce development costs by automating time-consuming tasks and asset creation.",
      icon: <Coins className="h-8 w-8 text-tech_green" />
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-hero-pattern">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-bright_magenta">Supercharge</span> Your Indie Game Development
            </h1>
            <p className="text-xl text-light_gray_text/80 mb-8">
              XEUR.AI helps indie developers overcome resource limitations and compete with larger studios.
              Build more, faster, while maintaining your creative vision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/signup" className="btn-primary">
                Amplify Your Development
              </Link>
              <Link href="#indie-benefits" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Challenges Section */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Challenges Facing <span className="text-electric_blue">Indie Developers</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30 flex gap-4 card-hover">
                <div className="shrink-0">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-light_gray_text/80">{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div id="indie-benefits" className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            The <span className="text-tech_green">XEUR.AI Advantage</span> for Indies
          </h2>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            Our platform gives indie developers the power to compete with major studios
            while maintaining their unique creative vision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30 flex gap-4 card-hover">
                <div className="shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-light_gray_text/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-purple-gradient rounded-lg border border-light_purple/30">
            <h3 className="text-2xl font-bold mb-4">How Indie Developers Are Using XEUR.AI</h3>
            <ul className="list-disc list-inside space-y-2 text-light_gray_text/90">
              <li>Generating complete game prototypes in hours to test market viability</li>
              <li>Creating custom assets that would otherwise require specialized skills</li>
              <li>Developing multiple game concepts in parallel to increase release frequency</li>
              <li>Expanding small game jam projects into full commercial releases</li>
              <li>Building complete games with small teams that would traditionally require much larger studios</li>
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/signup" className="btn-primary">
              Join Successful Indie Developers
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IndieDevelopers;
