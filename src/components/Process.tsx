import React from 'react';
import { Card } from './ui';
import { SITE_DATA, THEME } from '../constants/theme';

export const Process: React.FC = () => {
  return (
    <section id="proceso" className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 animate-slide-in-left">
          Proceso en <span className="text-black bg-[#00E676] px-1 animate-gentle-glow">4 pasos</span>
        </h2>
        
        <ol className="grid md:grid-cols-4 gap-6">
          {SITE_DATA.process.map((step, index) => (
            <li key={step.n} className={`animate-slide-in-up delay-${(index + 1) * 100}`}>
              <Card className="p-6 brutal-hover" shadow={false}>
                <div className="flex items-baseline justify-between">
                  <span className="text-5xl font-black leading-none">{step.n}</span>
                  <span 
                    className="px-2 py-1 border-4 border-black text-xs font-black uppercase" 
                    style={{ backgroundColor: THEME.colors.accent }}
                  >
                    paso
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-black">{step.t}</h3>
                <p className="mt-2 text-base">{step.d}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
