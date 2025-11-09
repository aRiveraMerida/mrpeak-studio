import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
  shadow?: boolean;
  style?: React.CSSProperties;
  as?: 'div' | 'article' | 'section' | 'aside';
  ariaLabel?: string;
  role?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  invert = false, 
  shadow = true,
  style = {},
  as: Component = 'div',
  ariaLabel,
  role
}) => {
  const baseClasses = 'border-4 border-black transition-all duration-200 focus-within:ring-4 focus-within:ring-blue-600 focus-within:ring-offset-2';
  const shadowClass = shadow ? 'card-brutal' : '';
  const invertClass = invert ? 'bg-black text-white' : 'bg-white text-black';
  
  return (
    <Component 
      className={`${baseClasses} ${shadowClass} ${invertClass} ${className}`}
      style={style}
      aria-label={ariaLabel}
      role={role}
    >
      {children}
    </Component>
  );
};
