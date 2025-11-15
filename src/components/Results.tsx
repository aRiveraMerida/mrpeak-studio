import React from 'react';
import { Card } from './ui';
import { SITE_DATA } from '../constants/theme';

export const Results: React.FC = () => {
  return (
    <section id="resultados" className="border-b-4 border-black section-spacing">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 animate-slide-in-left">
          Resultados y <span className="text-black bg-[#00E676] px-1 animate-gentle-glow">confianza</span>
        </h2>
        
        {/* Bloque de KPIs */}
        <Card className="p-8 animate-slide-in-up delay-200 brutal-hover max-w-4xl mx-auto" shadow={false} aria-label="Indicadores clave de resultados">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {SITE_DATA.kpis.map((kpi, index) => (
              <div
                key={kpi.number + kpi.text}
                className={`text-center animate-slide-in-up delay-${(index + 3) * 100}`}
              >
                <div className="text-3xl md:text-5xl font-black leading-none mb-2">
                  {kpi.number}
                </div>
                <div className="text-xs md:text-sm font-semibold leading-tight max-w-[10rem] mx-auto">
                  {kpi.text}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Casos reales debajo, fuera de la card */}
        <section className="mt-12" aria-label="Casos de proyectos en los que hemos trabajado">
          <header className="mb-6">
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              Algunos proyectos en los que tenía sentido que estuviéramos:
            </p>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
              Casos <span className="bg-black text-white px-1">reales</span>
            </h3>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SITE_DATA.cases.map((caseStudy, index) => (
              <Card 
                key={caseStudy.c} 
                className={`p-4 animate-fade-in-scale delay-${(index + 1) * 50} brutal-hover group`} 
                shadow={true}
                invert={index % 2 === 1}
              >
                <h4 className="text-lg md:text-xl font-black mb-2">{caseStudy.c}</h4>
                <p className="text-sm leading-snug">{caseStudy.d}</p>
                <div className="mt-3 text-xs font-black opacity-50 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
