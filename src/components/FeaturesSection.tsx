
import React from "react";

const features = [
  {
    id: 1,
    title: "Fórmulas Inovadoras",
    description: "Combinações únicas de ingredientes pesquisados cientificamente para máxima eficácia.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Absorção Avançada",
    description: "Tecnologia de bioabsorção que garante aproveitamento máximo dos nutrientes pelo organismo.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Qualidade Premium",
    description: "Ingredientes da mais alta qualidade, sem conservantes artificiais, corantes ou aditivos nocivos.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Resultados Comprovados",
    description: "Eficácia comprovada por estudos clínicos e milhares de clientes satisfeitos.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section id="benefícios" className="flykc-section relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-flykc-cyan/20 to-transparent"></div>
      
      <div className="flykc-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="flykc-heading">
            Benefícios <span className="gradient-text">Revolucionários</span>
          </h2>
          <p className="flykc-subheading">
            Descubra como os suplementos FLYKc podem transformar sua saúde e qualidade de vida
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flykc-card group hover:transform hover:scale-105">
              <div className="mb-6 text-flykc-cyan group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#ciencia" className="flykc-btn">
            Conheça nossa tecnologia
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
