
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    title: "Atleta profissional",
    image: "",
    quote: "Depois que comecei a tomar o FLYKc Energy, meu desempenho nos treinos melhorou significativamente. Tenho mais energia e minha recuperação está muito mais rápida.",
    rating: 5,
  },
  {
    id: 2,
    name: "Juliana Alves",
    title: "Empresária",
    image: "",
    quote: "O FLYKc Focus mudou completamente minha produtividade. Consigo me manter concentrada por horas e minha memória melhorou consideravelmente.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fernando Santos",
    title: "Médico",
    image: "",
    quote: "Como médico, sou muito criterioso com suplementos. O FLYKc Immune é excepcional, baseado em evidências científicas sólidas. Recomendo aos meus pacientes.",
    rating: 5,
  },
  {
    id: 4,
    name: "Camila Oliveira",
    title: "Professora",
    image: "",
    quote: "Sofria com insônia há anos. O FLYKc Sleep foi a única coisa que realmente funcionou para mim, sem efeitos colaterais. Agora acordo renovada todos os dias.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="depoimentos" className="flykc-section bg-flykc-black-alt">
      <div className="flykc-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="flykc-heading">
            O que <span className="gradient-text">Dizem</span> sobre nós
          </h2>
          <p className="flykc-subheading">
            Experiências reais de pessoas que transformaram sua saúde com FLYKc
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`flykc-card transition-all duration-300 ${
                  activeIndex === index ? "scale-105 border-flykc-cyan" : "opacity-75 hover:opacity-100"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-flykc-gradient flex items-center justify-center text-black font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-flykc-cyan">{testimonial.title}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "text-flykc-cyan" : "text-gray-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Junte-se a milhares de clientes satisfeitos</h3>
          <a href="#contato" className="flykc-btn">
            Experimente FLYKc hoje
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
