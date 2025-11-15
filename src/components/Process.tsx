import React from 'react';
import { Card } from './ui';
import { SITE_DATA } from '../constants/theme';

export const Process: React.FC = () => {
  return (
    <section id="proceso" className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight animate-slide-in-left lowercase">
            how we work
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl animate-slide-in-left delay-200">
            No vendemos "paquetes". Cada proyecto es distinto y necesita un enfoque propio. Trabajamos con sprints cortos, objetivos claros y decisiones basadas en datos.
          </p>
        </header>
        
        <ol className="grid md:grid-cols-4 gap-6">
          {SITE_DATA.process.map((step, index) => (
            <li key={step.n} className={`animate-slide-in-up delay-${(index + 1) * 100}`}>
              <Card className="p-6 brutal-hover" shadow={false}>
                <div className="flex items-baseline justify-between">
                  <span className="text-5xl font-black leading-none">{step.n}</span>
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
