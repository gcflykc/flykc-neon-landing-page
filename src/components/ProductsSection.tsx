
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "FLYKc Focus",
    description: "Potencializador cognitivo para melhorar foco, concentração e produtividade.",
    benefits: ["Melhora a memória", "Aumenta a concentração", "Reduz a fadiga mental"],
    price: "199,90",
  },
  {
    id: 2,
    name: "FLYKc Energy",
    description: "Fórmula avançada para aumento de energia, resistência e vitalidade.",
    benefits: ["Energia sustentável", "Melhora do desempenho", "Recuperação rápida"],
    price: "179,90",
  },
  {
    id: 3,
    name: "FLYKc Sleep",
    description: "Complexo natural para melhorar a qualidade do sono e restaurar o organismo.",
    benefits: ["Melhora qualidade do sono", "Reduz insônia", "Acordar revigorado"],
    price: "159,90",
  },
  {
    id: 4,
    name: "FLYKc Immune",
    description: "Fortalecedor imunológico com vitaminas, minerais e compostos bioativos.",
    benefits: ["Fortalece imunidade", "Proteção antioxidante", "Vitalidade diária"],
    price: "189,90",
  },
];

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="produtos" className="flykc-section bg-flykc-black-alt">
      <div className="flykc-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="flykc-heading">
            Nossos <span className="gradient-text">Produtos</span>
          </h2>
          <p className="flykc-subheading">
            Suplementos inovadores desenvolvidos com tecnologia de ponta para resultados excepcionais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flykc-card hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-square bg-flykc-gradient rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0.5 bg-flykc-gray rounded-lg flex items-center justify-center">
                  <span className="text-flykc-cyan font-bold text-4xl">{product.name.split(" ")[1]}</span>
                </div>
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4">
                    <ul className="text-white text-sm">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center mb-2">
                          <svg className="w-4 h-4 mr-2 text-flykc-cyan" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-flykc-gray-alt/30">
                <span className="text-2xl font-bold text-flykc-cyan">R$ {product.price}</span>
                <a 
                  href="#" 
                  className="px-4 py-2 bg-flykc-gray-alt hover:bg-flykc-gray rounded-md text-flykc-cyan hover:text-white transition-colors"
                >
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contato" className="flykc-btn">
            Ver todos os produtos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
