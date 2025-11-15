import React from 'react';
import { Card } from './ui';

interface TeamMember {
  name: string;
  description: string;
  linkedin: string;
  invert?: boolean;
}

interface PeakTeamProps {
  members: TeamMember[];
  title: string;
  subtitle: string;
}

export const PeakTeam: React.FC<PeakTeamProps> = ({ members, title, subtitle }) => {
  return (
    <section id="equipo" className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <header className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 animate-slide-in-up lowercase">
            {title}
          </h2>
          <p className="text-base md:text-lg font-semibold max-w-3xl animate-slide-in-up delay-200">
            {subtitle}
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-6">
          {members.map((member, index) => (
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
