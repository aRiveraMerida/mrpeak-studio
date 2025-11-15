import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-4 border-black" role="banner">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-black tracking-tight text-xl md:text-2xl transition-colors hover:opacity-80 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2 lowercase" 
          aria-label="Volver al inicio - mrPeakStudio"
        >
          mr<span className="px-1 bg-black text-white">peak</span>studio
        </Link>
        
        <nav aria-label="Navegación principal" className="flex items-center gap-2 md:gap-4">
          {isHome ? (
            <>
              <Link 
                to="/peak-project" 
                className="px-3 md:px-5 py-2 border-4 border-black bg-[#00E676] text-black hover:bg-black hover:text-white transition-all duration-200 uppercase text-xs md:text-sm font-black cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2" 
                aria-label="Ir a Peak Project"
              >
                Peak Project
              </Link>
              <a 
                href="#contacto" 
                className="px-3 md:px-5 py-2 border-4 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 uppercase text-xs md:text-sm font-black cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2" 
                aria-label="Contactar con mrPeakStudio"
              >
                Hablemos
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/" 
                className="px-3 md:px-5 py-2 border-4 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 uppercase text-xs md:text-sm font-black cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2" 
                aria-label="Volver a mrPeakStudio"
              >
                Inicio
              </Link>
              <a 
                href="#contacto" 
                className="px-3 md:px-5 py-2 border-4 border-black bg-[#00E676] text-black hover:bg-black hover:text-white transition-all duration-200 uppercase text-xs md:text-sm font-black cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2" 
                aria-label="Contactar sobre Peak Project"
              >
                Apuntarse
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
