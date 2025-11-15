import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_DATA } from '../constants/theme';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-black text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center md:justify-start">
            <p className="font-semibold text-sm md:text-base lowercase">
              © {new Date().getFullYear()} mrpeakstudio
            </p>
            <span className="hidden md:inline text-white/30">|</span>
            <Link 
              to={isHome ? "/peak-project" : "/"}
              className="text-sm font-semibold hover:text-[#00E676] transition-colors underline underline-offset-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label={isHome ? "Ir a Peak Project" : "Volver al inicio"}
            >
              {isHome ? "Peak Project" : "Inicio"}
            </Link>
            <span className="hidden md:inline text-white/30">|</span>
            <a 
              href={SITE_DATA.company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:text-[#00E676] transition-colors underline underline-offset-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Visitar perfil de mrPeakStudio en LinkedIn (abre en nueva pestaña)"
            >
              LinkedIn
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <a 
              href="mailto:hola@mrpeakstudio.com"
              className="text-sm font-semibold hover:text-[#00E676] transition-colors underline underline-offset-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Enviar email a mrPeakStudio"
            >
              Contacto
            </a>
          </div>
          
          <div className="flex items-center gap-3 text-xs">
            <a 
              href="#top" 
              className="px-4 py-2 border-4 border-white hover:bg-white hover:text-black transition-all duration-200 font-black uppercase cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Volver al inicio de la página"
            >
              ↑ Arriba
            </a>
          </div>
        </div>
        
        <div className="text-center md:text-left text-xs text-white/60 pt-6 border-t border-white/10">
          <p>strategy, ai & seo studio</p>
        </div>
      </div>
    </footer>
  );
};
