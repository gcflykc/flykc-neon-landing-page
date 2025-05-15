
import React from "react";

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flykc-cyan/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flykc-cyan/30 to-transparent"></div>
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-flykc-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-flykc-cyan/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="flykc-container relative">
        <div className="bg-flykc-gradient p-0.5 rounded-2xl">
          <div className="bg-flykc-black-alt rounded-2xl px-8 py-12 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comece sua jornada para uma saúde melhor hoje
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Junte-se a milhares de pessoas que já transformaram sua saúde e qualidade de vida com os suplementos inteligentes FLYKc.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#produtos" className="flykc-btn px-8 py-4 text-lg">
                Comprar agora
              </a>
              <a 
                href="#contato" 
                className="px-8 py-4 border border-flykc-cyan/50 text-flykc-cyan rounded-md hover:bg-flykc-cyan/10 transition-colors text-lg"
              >
                Fale conosco
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-flykc-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Garantia de 30 dias
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-flykc-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Frete grátis acima de R$200
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-flykc-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Parcelamento em até 12x
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
