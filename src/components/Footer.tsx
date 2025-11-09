import React from 'react';
import { SITE_DATA } from '../constants/theme';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <p className="font-semibold text-sm md:text-base">
            © {new Date().getFullYear()} mrPeakStudio
          </p>
          <a 
            href={SITE_DATA.company.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold hover:text-[#00E676] transition-colors underline underline-offset-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Visitar perfil de mrPeakStudio en LinkedIn (abre en nueva pestaña)"
          >
            LinkedIn
          </a>
        </div>
        
        <div className="flex items-center gap-3 text-xs">
          <a 
            href="#top" 
            className="px-4 py-2 border-4 border-white hover:bg-white hover:text-black transition-all duration-200 font-black uppercase cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Volver al inicio de la página"
          >
            Arriba
          </a>
        </div>
      </div>
    </footer>
  );
};
