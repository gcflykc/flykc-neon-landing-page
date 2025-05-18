
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScienceSection from "@/components/ScienceSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CalculatorPanel from "@/components/CalculatorPanel";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-flykc-black text-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <section className="flykc-section py-16 md:py-20 relative">
          <div className="flykc-container">
            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
              <div className="order-2 md:order-1">
                <h2 className="flykc-heading gradient-text mb-6">Potencialize Seu Desempenho Cognitivo</h2>
                <p className="flykc-subheading mt-4 max-w-2xl">
                  O suplemento FLYKc foi desenvolvido com uma fórmula avançada para melhorar foco, memória e clareza mental.
                </p>
                <div className="mt-8">
                  <a href="#contato" className="flykc-btn">Experimente Agora</a>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <img 
                    src="/uploads/product-image.png" 
                    alt="Suplemento Cognitivo FLYKc" 
                    className="max-h-96 object-contain drop-shadow-2xl animate-float"
                  />
                  <div className="absolute inset-0 bg-flykc-cyan/20 blur-3xl rounded-full opacity-30 -z-10"></div>
                </div>
              </div>
            </div>
            
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
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
