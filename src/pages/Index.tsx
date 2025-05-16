
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScienceSection from "@/components/ScienceSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CalculatorPanel from "@/components/CalculatorPanel";
import GitHubLink from "@/components/GitHubLink";

const Index = () => {
  return (
    <div className="min-h-screen bg-flykc-black text-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <section className="flykc-section py-16 md:py-20">
          <div className="flykc-container">
            <div className="text-center mb-12">
              <h2 className="flykc-heading gradient-text">Cálculo Personalizado</h2>
              <p className="flykc-subheading mt-4 max-w-2xl mx-auto">
                Descubra a suplementação ideal para o seu perfil e objetivos
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <CalculatorPanel />
            </div>
          </div>
        </section>
        <FeaturesSection />
        <ScienceSection />
        <CTASection />
        <ContactSection />
        <GitHubLink />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
