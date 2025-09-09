import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  asLink = false,
  href,
  ...props
}) => {
  const baseClasses = 'border-4 border-black font-black uppercase transition-colors inline-block text-center';
  
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-[#00E676] hover:text-black',
    secondary: 'bg-white text-black hover:bg-black hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-4 text-base md:text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asLink) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
