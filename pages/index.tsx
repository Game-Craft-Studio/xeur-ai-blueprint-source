import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnershipValidation from "@/components/PartnershipValidation";
import PlatformStatus from "@/components/PlatformStatus";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import ContactFounders from "@/components/ContactFounders";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-near_black min-h-screen text-gray-100 overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <PartnershipValidation />
        <PlatformStatus />
        <InvestmentOpportunity />
        <ContactFounders />
      </main>

      <Footer />
    </div>
  );
};

export default Index;