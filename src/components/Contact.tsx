import React from 'react';
import { Button } from './ui';

export const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hola@mrpeakstudio.com';
  };

  return (
    <section id="contacto" className="border-b-8 border-black" aria-labelledby="cta-title">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="cta-title" className="text-4xl md:text-5xl font-black tracking-tight mb-6 animate-slide-in-up">
            ¿Quieres <span className="text-black bg-[#00E676] px-1 animate-gentle-glow">resultados</span> o discursos?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-slide-in-up delay-200">
            Escríbenos y en <span className="font-bold text-black bg-[#00E676] px-1 animate-gentle-glow">48 horas</span> te proponemos un plan claro. Sin rodeos.
          </p>
          
          <Button 
            onClick={handleEmailClick}
            variant="primary" 
            size="lg"
            className="text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8 font-black cursor-pointer"
          >
            hola@mrpeakstudio.com
          </Button>
          
          <p className="mt-6 text-sm md:text-base font-semibold opacity-70">
            Respondemos en 48h. Sin spam.
          </p>
        </div>
      </div>
    </section>
  );
};
