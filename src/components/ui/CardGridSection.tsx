import React from 'react';
import { Card } from './Card';

interface CardItem {
  title: string;
  description: string | React.ReactNode;
  number?: string;
  invert?: boolean;
  backgroundColor?: string;
  bullets?: Array<{
    label: string;
    text: string;
  }>;
}

interface CardGridSectionProps {
  id: string;
  title: React.ReactNode;
  subtitle?: string;
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

export const CardGridSection: React.FC<CardGridSectionProps> = ({
  id,
  title,
  subtitle,
  items,
  columns = 2,
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <section 
      id={id} 
      className="border-b-4 border-black"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 
            id={`${id}-title`}
            className="text-3xl md:text-5xl font-black tracking-tight mb-4 animate-slide-in-up"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl font-semibold max-w-2xl mx-auto animate-slide-in-up delay-200">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className={`grid ${gridCols[columns]} gap-6`}>
          {items.map((item, index) => (
            <Card 
              key={index}
              className={`p-8 animate-fade-in-scale delay-${(index + 1) * 100}`}
              shadow={true}
              invert={item.invert}
              style={item.backgroundColor ? { backgroundColor: item.backgroundColor } : undefined}
            >
              {item.number && (
                <div className="text-4xl font-black mb-4 opacity-50">{item.number}</div>
              )}
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              {typeof item.description === 'string' ? (
                <p className="text-lg leading-relaxed mb-4">{item.description}</p>
              ) : (
                <div className="text-lg leading-relaxed mb-4">{item.description}</div>
              )}
              {item.bullets && item.bullets.length > 0 && (
                <ul className="space-y-3">
                  {item.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2">
                      <span className="font-black">→</span>
                      <div>
                        <span className="font-bold">{bullet.label}:</span> {bullet.text}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
