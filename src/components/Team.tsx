import React from 'react';
import { Card } from './ui';
import { SITE_DATA } from '../constants/theme';

export const Team: React.FC = () => {
  return (
    <section id="equipo" className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 animate-slide-in-up">
            El <span className="text-black bg-[#00E676] px-1 animate-gentle-glow">equipo</span> detrás de mrPeakStudio
          </h2>
          <p className="text-lg md:text-xl font-semibold max-w-2xl mx-auto animate-slide-in-up delay-200">
            Estrategia, datos y tecnología. Personas que hacen que las cosas pasen.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-6">
          {SITE_DATA.team.map((member, index) => (
            <a 
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block group"
              aria-label={`Ver perfil de LinkedIn de ${member.name}`}
            >
              <Card 
                className={`p-8 animate-fade-in-scale delay-${(index + 3) * 100} brutal-hover cursor-pointer group-hover:scale-[1.02] transition-transform duration-200`}
                invert={member.invert}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black group-hover:underline">
                      {member.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-black opacity-30">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-sm font-black opacity-50 group-hover:opacity-100 transition-opacity">
                      LinkedIn →
                    </div>
                  </div>
                </div>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  {member.description}
                </p>
                <div className="text-xs font-semibold opacity-60 group-hover:opacity-100 transition-opacity">
                  Ver perfil profesional
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
