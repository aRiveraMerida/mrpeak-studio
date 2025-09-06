import React from 'react';
import { Card } from './ui';
import { SITE_DATA } from '../constants/theme';

export const Results: React.FC = () => {
  return (
    <section id="resultados" className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 animate-slide-in-left">
          Resultados y <span className="animate-blink">confianza</span>
        </h2>
        
        <Card className="p-8 animate-slide-in-up delay-200 brutal-hover max-w-4xl mx-auto" shadow={false}>
          {/* KPIs Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {SITE_DATA.kpis.map((kpi, index) => (
              <div key={kpi.number + kpi.text} className={`text-center animate-slide-in-up delay-${(index + 3) * 100}`}>
                <div className="text-3xl md:text-5xl font-black leading-none mb-2">
                  {kpi.number}
                </div>
                <div className="text-xs md:text-sm font-semibold leading-tight">
                  {kpi.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Separator Line */}
          <div className="border-t-4 border-black mb-6"></div>
          
          {/* Companies Section */}
          <div className="text-center animate-slide-in-up delay-500">
            <p className="text-sm font-black uppercase mb-4 tracking-wider">en empresas como</p>
            <p className="text-base md:text-lg font-semibold leading-relaxed">
              Airbnb, Volkswagen, LaLiga, Skyscanner, ThePowerMBA, Factorial, <br className="hidden md:block" />
              Nuvola, Movimer, Upsocl, Gilsa, Gea <span className="animate-blink font-black">y muchas más</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
