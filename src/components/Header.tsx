import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-4 border-black" role="banner">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a 
          href="#top" 
          className="font-black tracking-tight text-xl md:text-2xl transition-colors hover:opacity-80 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2" 
          aria-label="Volver al inicio - mrPeakStudio"
        >
          mr<span className="px-1 bg-black text-white">Peak</span>Studio
        </a>
        
        <nav aria-label="Navegación principal">
          <a 
            href="#contacto" 
            className="px-5 py-2 border-4 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 uppercase text-sm font-black cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2" 
            aria-label="Contactar con mrPeakStudio"
          >
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  );
};
