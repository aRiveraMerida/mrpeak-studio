import React from 'react';
import { Button, Card } from './ui';
import { SITE_DATA } from '../constants/theme';

export const Services: React.FC = () => {
  return (
    <section 
      id="servicios" 
      className="border-b-4 border-black" 
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="mb-10">
          <h2 
            id="services-title"
            className="text-3xl md:text-4xl font-black tracking-tight animate-slide-in-left"
          >
            Servicios
          </h2>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8">
          {SITE_DATA.services.map((service, index) => (
            <Card 
              key={service.title}
              as="article"
              className={`p-8 animate-fade-in-scale delay-${(index + 1) * 100}`}
              invert={service.invert}
              ariaLabel={`Servicio: ${service.title}`}
            >
              <h3 className="text-2xl md:text-3xl font-black mb-4">{service.title}</h3>
              <p className="text-lg leading-relaxed">{service.desc}</p>
              <Button
                asLink
                href="#contacto"
                variant={service.invert ? "secondary" : "primary"}
                className="mt-6"
                ariaLabel={`Contactar sobre ${service.title}`}
              >
                Me interesa
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
