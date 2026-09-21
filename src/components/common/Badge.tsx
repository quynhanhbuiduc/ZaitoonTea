import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'amber' | 'neutral' | 'sale' | 'organic';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
}) => {
  const variants = {
    primary: 'bg-emerald-50 text-emerald-800 border-emerald-200/70',
    amber: 'bg-amber-50 text-amber-800 border-amber-200/80',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
    sale: 'bg-rose-50 text-rose-700 border-rose-200/80 font-bold',
    organic: 'bg-emerald-100/80 text-emerald-900 border-emerald-300 font-semibold',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};
