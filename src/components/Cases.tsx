import React from 'react';
import { Card } from './ui';
import { SITE_DATA, THEME } from '../constants/theme';

export const Cases: React.FC = () => {
  return (
    <section id="casos" className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight animate-slide-in-left">Casos <span className="text-black bg-[#00E676] px-1 animate-gentle-glow">reales</span></h2>
          <span 
            className="hidden md:inline-block px-3 py-1 border-4 border-black font-black uppercase animate-pulse-hover"
            style={{ backgroundColor: THEME.colors.accent }}
          >
            real
          </span>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SITE_DATA.cases.map((caseStudy, index) => (
            <Card 
              key={caseStudy.c} 
              className={`p-4 animate-fade-in-scale delay-${(index + 1) * 50} brutal-hover group`} 
              shadow={false}
              invert={index % 2 === 1}
            >
              <h3 className="text-lg md:text-xl font-black mb-2">{caseStudy.c}</h3>
              <p className="text-sm leading-snug">{caseStudy.d}</p>
              <div className="mt-3 text-xs font-black opacity-50 group-hover:opacity-100 transition-opacity">
                {String(index + 1).padStart(2, '0')}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
