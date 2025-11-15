import React from 'react';
import { Button } from './ui';

export const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hola@mrpeakstudio.com';
  };

  return (
    <section 
      id="contacto" 
      className="border-b-8 border-black section-spacing" 
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 
            id="contact-title" 
            className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight animate-slide-in-up lowercase"
          >
            Let's talk about your project
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-in-up delay-200">
            Si crees que podemos encajar, cuéntanos en qué estás. Lo revisamos y te decimos si tiene sentido que trabajemos juntos o si es mejor otro enfoque.
          </p>
          
          <Button 
            onClick={handleEmailClick}
            variant="primary" 
            size="lg"
            className="text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8 font-black cursor-pointer"
            ariaLabel="Enviar email a hola@mrpeakstudio.com"
          >
            hola@mrpeakstudio.com
          </Button>
          
          <p className="mt-8 text-sm md:text-base font-semibold text-gray-600">
            Respondemos en 48h. Si no somos la mejor opción, también te lo diremos.
          </p>
        </div>
      </div>
    </section>
  );
};
