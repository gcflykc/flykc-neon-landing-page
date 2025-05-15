
import React from "react";

const ScienceSection = () => {
  return (
    <section id="ciência" className="flykc-section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10">
        <svg viewBox="0 0 200 200" width="600" height="600" xmlns="http://www.w3.org/2000/svg" className="opacity-5">
          <path fill="currentColor" className="text-flykc-cyan" d="M43.5,-63.2C55,-52.9,62.2,-38.1,67.9,-22.5C73.6,-6.9,77.8,9.6,73.4,23.5C69,37.4,55.9,48.7,42,54.9C28.1,61.1,14.1,62.3,-0.5,63C-15.1,63.7,-30.3,64,-42.3,57.1C-54.4,50.3,-63.4,36.3,-67.7,21.2C-71.9,6.1,-71.4,-10.1,-65.8,-23.8C-60.2,-37.5,-49.4,-48.7,-37.2,-58.5C-25,-68.3,-12.5,-76.8,1.8,-79.3C16.1,-81.8,32.1,-78.3,43.5,-69.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="flykc-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-flykc-gray-alt/50 backdrop-blur-sm rounded-2xl p-8 border border-flykc-gray-alt relative">
              <div className="absolute -inset-0.5 bg-flykc-gradient rounded-2xl blur opacity-20 -z-10"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Nossa Tecnologia Proprietária</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-flykc-gradient flex items-center justify-center text-black font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-flykc-cyan mb-1">Extração de alta pureza</h4>
                    <p className="text-gray-300">Tecnologia exclusiva que extrai componentes ativos com pureza superior a 98%, garantindo máxima eficácia.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-flykc-gradient flex items-center justify-center text-black font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-flykc-cyan mb-1">Nanopartículas bioativas</h4>
                    <p className="text-gray-300">Ingredientes encapsulados em nanopartículas que aumentam a biodisponibilidade em até 300%.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-flykc-gradient flex items-center justify-center text-black font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-flykc-cyan mb-1">Sinergismo avançado</h4>
                    <p className="text-gray-300">Fórmulas desenvolvidas para que os ingredientes potencializem a ação uns dos outros, criando efeitos superiores.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-flykc-gradient flex items-center justify-center text-black font-bold">4</div>
                  <div>
                    <h4 className="text-lg font-semibold text-flykc-cyan mb-1">Liberação controlada</h4>
                    <p className="text-gray-300">Sistema patenteado que libera os nutrientes gradualmente, mantendo níveis ótimos no organismo por mais tempo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="flykc-heading mb-6">
              Ciência <span className="gradient-text">Revolucionária</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Na FLYKc, a ciência é o coração de tudo o que fazemos. Nosso time de PhDs e pesquisadores desenvolveu tecnologias exclusivas que levam nossos suplementos a um novo patamar de eficácia.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flykc-card text-center">
                <div className="text-3xl font-bold text-flykc-cyan mb-2">15+</div>
                <p className="text-gray-300">Patentes registradas</p>
              </div>
              
              <div className="flykc-card text-center">
                <div className="text-3xl font-bold text-flykc-cyan mb-2">8</div>
                <p className="text-gray-300">Estudos clínicos</p>
              </div>
              
              <div className="flykc-card text-center">
                <div className="text-3xl font-bold text-flykc-cyan mb-2">97%</div>
                <p className="text-gray-300">Taxa de satisfação</p>
              </div>
              
              <div className="flykc-card text-center">
                <div className="text-3xl font-bold text-flykc-cyan mb-2">3x</div>
                <p className="text-gray-300">Mais absorção</p>
              </div>
            </div>
            
            <div className="flex items-center border-l-4 border-flykc-cyan pl-4">
              <p className="text-gray-300 italic">
                "Nossa missão é transformar a indústria de suplementos com produtos genuinamente eficazes, baseados em ciência séria e comprovada."
              </p>
            </div>
            <p className="text-flykc-cyan mt-2 pl-4">Dr. Marcos Oliveira, Diretor de Pesquisa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
