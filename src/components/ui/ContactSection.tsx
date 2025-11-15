import React from 'react';
import { Button } from './Button';

interface ContactSectionProps {
  title: React.ReactNode;
  description: string;
  email: string;
  note?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  email,
  note,
}) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section 
      id="contacto" 
      className="border-b-8 border-black"
      aria-labelledby="contacto-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 
            id="contacto-title"
            className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight animate-slide-in-up"
          >
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-in-up delay-200">
            {description}
          </p>
          
          <Button 
            onClick={handleEmailClick}
            variant="primary" 
            size="lg"
            className="text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8 font-black cursor-pointer animate-slide-in-up delay-300"
            ariaLabel={`Enviar email a ${email}`}
          >
            {email}
          </Button>
          
          {note && (
            <p className="mt-8 text-sm md:text-base font-semibold text-gray-600 animate-slide-in-up delay-400">
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
