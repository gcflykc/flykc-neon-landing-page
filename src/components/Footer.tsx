
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-flykc-black-alt pt-16 pb-8">
      <div className="flykc-container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-2xl font-bold flex items-center mb-4">
              <span className="text-flykc-cyan">FLYK</span>
              <span className="gradient-text">c</span>
            </a>
            <p className="text-gray-400 mb-4">
              Revolucionando o mercado de suplementos com tecnologia e ciência avançada para melhorar sua saúde e qualidade de vida.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-flykc-cyan">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-flykc-cyan">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-flykc-cyan">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Links Rápidos</h5>
            <ul className="space-y-2">
              <li><a href="#produtos" className="text-gray-400 hover:text-flykc-cyan">Produtos</a></li>
              <li><a href="#benefícios" className="text-gray-400 hover:text-flykc-cyan">Benefícios</a></li>
              <li><a href="#ciência" className="text-gray-400 hover:text-flykc-cyan">Nossa Ciência</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-flykc-cyan">Depoimentos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-flykc-cyan">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Informações</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-flykc-cyan">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-flykc-cyan">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-flykc-cyan">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-flykc-cyan">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-flykc-cyan">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Cadastre-se</h5>
            <p className="text-gray-400 mb-4">Receba novidades, promoções exclusivas e conteúdo sobre saúde e bem-estar.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flykc-input" 
                required
              />
              <button type="submit" className="flykc-btn">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-flykc-gray/30 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} FLYKc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
