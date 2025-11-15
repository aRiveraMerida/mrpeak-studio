import React from 'react';
import { Button, Card } from './ui';
import { SITE_DATA } from '../constants/theme';

export const Services: React.FC = () => {
  return (
    <section 
      id="servicios" 
      className="border-b-4 border-black section-spacing" 
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12">
          <h2 
            id="services-title"
            className="text-2xl md:text-3xl font-black tracking-tight animate-slide-in-left lowercase"
          >
            services
          </h2>
          <p className="mt-4 text-sm md:text-base font-bold uppercase tracking-wide text-gray-600 animate-slide-in-left delay-200">
            WE BUILD STRATEGY, AI & SEO SYSTEMS THAT HELP YOUR BUSINESS MOVE FASTER.
          </p>
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
              <div className="text-sm font-black opacity-30 mb-3">{service.number}</div>
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
