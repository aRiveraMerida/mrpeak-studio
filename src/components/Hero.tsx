import React from 'react';
import { Button, Card } from './ui';
import { SITE_DATA } from '../constants/theme';

export const Hero: React.FC = () => {
  return (
    <section 
      id="top" 
      className="border-b-4 border-black" 
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <h1 
            id="hero-title"
            className="text-4xl md:text-6xl leading-tight font-black tracking-tight animate-slide-in-left"
          >
            {SITE_DATA.tagline.split(' ').map((word, index) => 
              word === 'transforman' ? (
                <span key={index} className="bg-black text-white px-2 animate-gentle-glow">
                  {word}
                </span>
              ) : (
                <span key={index}> {word}</span>
              )
            )}
          </h1>
          
          <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed animate-slide-in-left delay-200">
            {SITE_DATA.description} <span className="font-bold text-black bg-[#00C853] px-2 py-1">Solo resultados medibles.</span>
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-slide-in-left delay-300">
            <Button 
              asLink 
              href="#contacto" 
              variant="primary" 
              size="lg" 
              ariaLabel="Ir a contacto para obtener resultados"
            >
              Quiero resultados
            </Button>
            <Button 
              asLink 
              href="#servicios" 
              variant="secondary" 
              size="lg"
              ariaLabel="Ver todos nuestros servicios"
            >
              Ver servicios
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
            style={{ backgroundColor: '#00E676' }}
          >
            <p className="text-sm font-black uppercase tracking-wide">Propuesta directa</p>
            <p className="mt-3 text-lg font-semibold leading-relaxed">
              Menos ruido, más crecimiento. Estrategia clara, ejecución real, medición continua.
            </p>
          </Card>
        </aside>
      </div>
    </section>
  );
};
