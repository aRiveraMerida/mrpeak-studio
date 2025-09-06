import React from 'react';
import { SITE_DATA } from '../constants/theme';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <p className="font-semibold">
            © {new Date().getFullYear()} mrPeakStudio
          </p>
          <a 
            href={SITE_DATA.company.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold hover:text-gray-300 transition-colors underline underline-offset-2"
            aria-label="Seguir mrPeakStudio en LinkedIn"
          >
            LinkedIn
          </a>
        </div>
        
        <div className="flex items-center gap-3 text-xs">
          <a 
            href="#top" 
            className="px-3 py-1 border-4 border-white hover:bg-white hover:text-black transition-colors font-black uppercase"
          >
            Arriba
          </a>
        </div>
      </div>
    </footer>
  );
};
