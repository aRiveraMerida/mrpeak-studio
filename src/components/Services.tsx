import React from 'react';
import { Button, Card } from './ui';
import { SITE_DATA } from '../constants/theme';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight animate-slide-in-left">Servicios</h2>
        </header>
        
        <div className="grid md:grid-cols-2 gap-6">
          {SITE_DATA.services.map((service, index) => (
            <Card 
              key={service.title}
              className={`p-8 animate-fade-in-scale delay-${(index + 1) * 100} brutal-hover`}
              invert={service.invert}
            >
              <h3 className="text-2xl md:text-3xl font-black">{service.title}</h3>
              <p className="mt-3 text-lg">{service.desc}</p>
              <Button
                asLink
                href="#contacto"
                variant={service.invert ? "secondary" : "primary"}
                className="mt-6"
                aria-label={`Contactar sobre ${service.title}`}
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
