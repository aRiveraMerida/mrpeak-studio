import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
  shadow?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  invert = false, 
  shadow = true,
  style = {}
}) => {
  const baseClasses = 'border-4 border-black';
  const shadowClass = shadow ? 'card-brutal' : '';
  const invertClass = invert ? 'bg-black text-white' : 'bg-white text-black';
  
  return (
    <div 
      className={`${baseClasses} ${shadowClass} ${invertClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
