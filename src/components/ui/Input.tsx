import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, className = '', id, ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-black uppercase" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`input-brutal ${className}`}
        {...props}
      />
    </div>
  );
};

export const TextArea: React.FC<TextAreaProps> = ({ label, className = '', id, ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-black uppercase" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`input-brutal resize-none ${className}`}
        {...props}
      />
    </div>
  );
};

export const Select: React.FC<SelectProps> = ({ label, className = '', id, children, ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-black uppercase" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        className={`input-brutal bg-white ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};
