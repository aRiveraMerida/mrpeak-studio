import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b-4 border-black" role="banner">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a 
          href="#top" 
          className="font-black tracking-tight text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" 
          aria-label="Ir al inicio - mrPeakStudio"
        >
          mr<span className="px-1 bg-black text-white">Peak</span>Studio
        </a>
        
        <a 
          href="#contacto" 
          className="px-4 py-2 border-4 border-black bg-white text-black hover:bg-black hover:text-white transition-colors uppercase text-sm font-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" 
          aria-label="Ir a la sección de contacto para hablar con nosotros"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
};
