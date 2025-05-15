
import React from "react";
import { Github } from "lucide-react";

const GitHubLink = () => {
  return (
    <section className="py-8 bg-flykc-black-alt">
      <div className="flykc-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="https://github.com/flykc/supplements"
            target="_blank" 
            rel="noopener noreferrer"
            className="flykc-btn flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Github size={20} />
            <span>Visite nosso GitHub</span>
          </a>
          <p className="text-gray-400 text-sm">
            Nosso código é aberto. Contribua com o desenvolvimento dos suplementos inteligentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHubLink;
