import React from 'react';
import { HeroSection, Card } from './ui';
import { PeakTeam } from './PeakTeam';
import { SITE_DATA } from '../constants/theme';
import { PEAK_PROJECT_DATA } from '../constants/peakProject';

export const PeakProject: React.FC = () => {
  return (
    <>
      {/* HERO Section */}
      <HeroSection
        badge={PEAK_PROJECT_DATA.hero.badge}
        title={
          <>
            Un finde para{' '}
            <span className="bg-black text-white px-2">hablar en serio</span>{' '}
            de tu futuro sin agobios
          </>
        }
        description={PEAK_PROJECT_DATA.hero.description}
        tags={PEAK_PROJECT_DATA.hero.tags}
        sideCard={{
          title: PEAK_PROJECT_DATA.hero.sideCard.title,
          description: PEAK_PROJECT_DATA.hero.sideCard.description,
          backgroundColor: '#00E676',
        }}
      />

      {/* ES PARA TI Section */}
      <section id="para-ti" className="border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <header className="mb-12">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight animate-slide-in-left lowercase">
              {PEAK_PROJECT_DATA.forYou.title}
            </h2>
          </header>
          
          <div className="grid md:grid-cols-2 gap-6">
            {PEAK_PROJECT_DATA.forYou.items.map((item, index) => {
              const itemWithBg = item as typeof item & { backgroundColor?: string };
              return (
              <Card
                key={item.number}
                className={`p-8 animate-fade-in-scale delay-${(index + 1) * 100}`}
                style={itemWithBg.backgroundColor ? { backgroundColor: itemWithBg.backgroundColor } : undefined}
              >
                <div className="text-sm font-black opacity-30 mb-3">{item.number}</div>
                <h3 className="text-2xl md:text-3xl font-black mb-4">{item.title}</h3>
                <p className="text-base md:text-lg leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.label} className="flex flex-col gap-1">
                      <span className="text-sm font-black uppercase tracking-wide">{bullet.label}</span>
                      <span className="text-base leading-relaxed">{bullet.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* DE QUÉ VA ESTO Section */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-8 animate-slide-in-up lowercase">
              {PEAK_PROJECT_DATA.about.title}
            </h2>
            <div className="space-y-5 text-lg md:text-xl leading-relaxed animate-slide-in-up delay-200">
              {PEAK_PROJECT_DATA.about.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ VAMOS A HACER Section */}
      <section id="programa" className="border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <header className="mb-12">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight animate-slide-in-left lowercase">
              {PEAK_PROJECT_DATA.program.title}
            </h2>
            <p className="mt-4 text-sm md:text-base font-bold uppercase tracking-wide text-gray-600 animate-slide-in-left delay-200">
              {PEAK_PROJECT_DATA.program.subtitle}
            </p>
          </header>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PEAK_PROJECT_DATA.program.items.map((item, index) => (
              <Card
                key={item.number}
                className={`p-8 animate-fade-in-scale delay-${(index + 1) * 100}`}
                invert={item.invert}
              >
                <div className="text-sm font-black opacity-30 mb-3">{item.number}</div>
                <h3 className="text-2xl md:text-3xl font-black mb-4">{item.title}</h3>
                <p className="text-lg leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS Section */}
      <PeakTeam
        title={PEAK_PROJECT_DATA.team.title}
        subtitle={PEAK_PROJECT_DATA.team.subtitle}
        members={SITE_DATA.team.map((member) => ({
          name: member.name,
          description: member.description,
          linkedin: member.linkedin,
          invert: member.invert,
        }))}
      />

      {/* CONTACTO Section */}
      <section id="contacto" className="border-b-8 border-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight animate-slide-in-up lowercase">
              {PEAK_PROJECT_DATA.contact.title}
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-in-up delay-200">
              {PEAK_PROJECT_DATA.contact.description}
            </p>
            
            <button
              onClick={() => window.location.href = `mailto:${PEAK_PROJECT_DATA.contact.email}`}
              className="inline-block px-8 md:px-12 py-6 md:py-8 text-xl md:text-2xl font-black bg-[#00E676] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 cursor-pointer"
              aria-label={`Enviar email a ${PEAK_PROJECT_DATA.contact.email}`}
            >
              {PEAK_PROJECT_DATA.contact.email}
            </button>
            
            <p className="mt-8 text-sm md:text-base font-semibold text-gray-600">
              {PEAK_PROJECT_DATA.contact.note}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
