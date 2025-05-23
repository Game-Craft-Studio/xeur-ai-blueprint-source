
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import TargetAudience from "@/components/TargetAudience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Benefits />
      <TargetAudience />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
