import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  asLink = false,
  href,
  ariaLabel,
  ...props
}) => {
  const baseClasses = 'border-4 border-black font-black uppercase transition-all duration-200 inline-block text-center cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-[#00E676] hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none',
    secondary: 'bg-white text-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,230,118,1)] active:translate-x-1 active:translate-y-1 active:shadow-none'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-4 text-base md:text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asLink) {
    return (
      <a 
        href={href} 
        className={classes} 
        aria-label={ariaLabel}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={classes} 
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};
