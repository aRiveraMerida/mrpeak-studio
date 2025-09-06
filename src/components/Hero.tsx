import React from 'react';
import { Button, Card } from './ui';
import { SITE_DATA, THEME } from '../constants/theme';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <h1 className="text-4xl md:text-6xl leading-tight font-black tracking-tight animate-slide-in-left" role="banner" aria-label="Título principal de mrPeakStudio">
            {SITE_DATA.tagline.split(' ').map((word, index) => 
              word === 'transforman' ? (
                <span key={index} className="bg-black text-white px-2 animate-blink">
                  {word}
                </span>
              ) : (
                <span key={index}> {word}</span>
              )
            )}
          </h1>
          
          <p className="mt-6 text-lg md:text-xl max-w-2xl animate-slide-in-left delay-200">
            {SITE_DATA.description} <span className="font-bold animate-blink">Solo resultados medibles.</span>
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-slide-in-left delay-300">
            <Button asLink href="#contacto" variant="primary" size="lg" className="animate-pulse-hover">
              Quiero resultados
            </Button>
            <Button asLink href="#servicios" variant="secondary" size="lg" className="animate-pulse-hover">
              Ver servicios
            </Button>
          </div>
          
          <ul className="mt-8 flex flex-wrap gap-3 text-sm font-semibold animate-slide-in-left delay-400" aria-label="Etiquetas">
            {SITE_DATA.tags.map((tag, index) => (
              <li 
                key={tag} 
                className={`px-3 py-1 border-4 border-black brutal-hover animate-slide-in-up delay-${(index + 1) * 100}`}
                style={{ backgroundColor: THEME.colors.accent }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        
        <aside className="md:col-span-4">
          <Card 
            className="p-6 animate-slide-in-right brutal-hover" 
            shadow={false}
            style={{ backgroundColor: THEME.colors.accent }}
          >
            <p className="text-sm font-black uppercase">Propuesta directa</p>
            <p className="mt-2 text-lg font-semibold">
              Menos ruido, más crecimiento. Estrategia clara, ejecución real, medición continua.
            </p>
          </Card>
        </aside>
      </div>
    </section>
  );
};
