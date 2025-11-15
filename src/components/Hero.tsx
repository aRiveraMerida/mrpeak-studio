import React from 'react';
import { Button, Card } from './ui';
import { SITE_DATA } from '../constants/theme';

export const Hero: React.FC = () => {
  return (
    <section 
      id="top" 
      className="border-b-4 border-black section-spacing" 
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-8">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-6 animate-slide-in-left text-gray-600">
            STRATEGY · AI · SEO STUDIO
          </p>

          <h1 
            id="hero-title"
            className="text-4xl md:text-6xl leading-tight font-black tracking-tight animate-slide-in-left"
          >
            {SITE_DATA.tagline}
          </h1>
          
          <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed animate-slide-in-left delay-200">
            {SITE_DATA.description}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-slide-in-left delay-300">
            <Button 
              asLink 
              href="#contacto" 
              variant="primary" 
              size="lg" 
              ariaLabel="Contáctanos sobre tu proyecto"
            >
              Cuéntame tu proyecto
            </Button>
            <Button 
              asLink 
              href="#proceso" 
              variant="secondary" 
              size="lg"
                ariaLabel="Ver cómo trabajamos"
            >
              Ver cómo trabajamos
            </Button>
          </div>
          
          <ul className="mt-8 flex flex-wrap gap-3 text-sm font-bold animate-slide-in-left delay-400" aria-label="Áreas de especialización">
            {SITE_DATA.tags.map((tag, index) => {
              const delayClass = index === 0 ? 'delay-seq-1' : index === 1 ? 'delay-seq-2' : index === 2 ? 'delay-seq-3' : index === 3 ? 'delay-seq-4' : 'delay-seq-5';
              return (
                <li 
                  key={tag} 
                  className={`px-4 py-2 border-4 border-black bg-white hover:bg-[#00E676] transition-all duration-200 cursor-default animate-slide-in-up ${delayClass}`}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        
        <aside className="md:col-span-4">
          <Card 
            as="aside"
            className="p-6 animate-slide-in-right" 
            shadow={true}
            ariaLabel="Propuesta de valor de mrPeakStudio"
          >
            <p className="text-sm font-black uppercase tracking-wide">En qué encajamos</p>
            <p className="mt-3 text-lg font-semibold leading-relaxed">
              Pocos proyectos, trabajo cerca del equipo y foco en lo que mueve el negocio: más clientes, mejores procesos y decisiones con datos.
            </p>
          </Card>
        </aside>
      </div>
    </section>
  );
};
