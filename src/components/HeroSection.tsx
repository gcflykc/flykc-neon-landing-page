
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-72 h-72 bg-flykc-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-flykc-cyan/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="flykc-container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Revolucione sua 
              <span className="gradient-text block mt-2">saúde</span> 
              <span className="text-flykc-cyan">hoje mesmo</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
              Suplementos inteligentes com fórmulas avançadas que potencializam seu 
              desempenho, saúde e qualidade de vida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#produtos" className="flykc-btn flykc-glow">
                Explorar produtos
              </a>
              <a href="#ciencia" className="px-6 py-3 border border-flykc-cyan/50 text-flykc-cyan rounded-md hover:bg-flykc-cyan/10 transition-colors">
                Nossa ciência
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="pt-6 border-t border-flykc-gray-alt/50 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-flykc-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">100% Natural</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-flykc-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Cientificamente testado</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-flykc-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Entrega em 24h</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute -inset-0.5 bg-flykc-gradient rounded-full blur-2xl opacity-30"></div>
            <div className="bg-flykc-gray-alt rounded-2xl overflow-hidden border border-flykc-gray p-2 relative">
              <div className="aspect-[4/5] bg-flykc-gray rounded-xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-flykc-gradient flex items-center justify-center">
                    <span className="text-black text-4xl font-bold">FLYKc</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Suplemento Cognitivo</h3>
                  <p className="text-gray-300">Potencialize sua mente</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-flykc-gradient px-6 py-2 rounded-full text-black font-semibold animate-pulse-glow">
              NOVO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
