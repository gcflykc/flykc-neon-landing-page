
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        scrolled ? "bg-flykc-black-alt/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="flykc-container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold flex items-center">
            <span className="text-flykc-cyan">FLYK</span>
            <span className="gradient-text">c</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Produtos", "Benefícios", "Ciência", "Depoimentos"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-flykc-cyan transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contato" className="flykc-btn">Comprar agora</a>
        </nav>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-flykc-cyan"
            aria-label="Menu"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-flykc-black-alt border-t border-flykc-gray-alt">
          <div className="flykc-container py-4 space-y-4">
            {["Produtos", "Benefícios", "Ciência", "Depoimentos"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-flykc-cyan transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contato"
              className="block flykc-btn w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comprar agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
