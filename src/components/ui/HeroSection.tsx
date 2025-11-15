import React from 'react';
import { Button, Card } from './';

interface HeroSectionProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
    ariaLabel: string;
  }>;
  tags?: string[];
  sideCard?: {
    title: string;
    description: string;
    backgroundColor?: string;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  description,
  buttons,
  tags,
  sideCard,
}) => {
  return (
    <section 
      id="hero" 
      className="border-b-4 border-black" 
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-12 gap-8">
        <div className={sideCard ? "md:col-span-8" : "md:col-span-12"}>
          {badge && (
            <div className="inline-block px-4 py-2 border-4 border-black bg-white mb-6 text-sm font-bold animate-slide-in-up">
              {badge}
            </div>
          )}
          
          <h1 
            id="hero-title"
            className="text-4xl md:text-6xl leading-tight font-black tracking-tight animate-slide-in-left"
          >
            {title}
          </h1>
          
          <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed animate-slide-in-left delay-200">
            {description}
          </p>
          
          {buttons && buttons.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-in-left delay-300">
              {buttons.map((button, index) => (
                <Button 
                  key={index}
                  asLink 
                  href={button.href} 
                  variant={button.variant} 
                  size="lg" 
                  ariaLabel={button.ariaLabel}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          )}
          
          {tags && tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3 animate-slide-in-left delay-300">
              {tags.map((tag, index) => (
                <span 
                  key={tag} 
                  className={`px-4 py-2 border-4 border-black bg-white text-sm font-bold animate-slide-in-up delay-seq-${index + 1}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {sideCard && (
          <aside className="md:col-span-4">
            <Card 
              as="aside"
              className="p-6 animate-slide-in-right" 
              shadow={true}
              ariaLabel={sideCard.title}
              style={{ backgroundColor: sideCard.backgroundColor || '#00E676' }}
            >
              <p className="text-sm font-black uppercase tracking-wide">{sideCard.title}</p>
              <p className="mt-3 text-lg font-semibold leading-relaxed">
                {sideCard.description}
              </p>
            </Card>
          </aside>
        )}
      </div>
    </section>
  );
};
