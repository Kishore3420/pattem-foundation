import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
}

interface PriceTextProps {
  amount: number;
  currency?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

interface LegalTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'warning' | 'info' | 'success';
}

interface TextDividerProps {
  text: string;
  className?: string;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({ children, className }) => {
  return (
    <span
      className={twMerge(
        'bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md font-medium',
        className
      )}
    >
      {children}
    </span>
  );
};

export const PriceText: React.FC<PriceTextProps> = ({
  amount,
  currency = '₹',
  className,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <span className={twMerge('font-semibold text-gray-900', sizeClasses[size], className)}>
      {currency}
      {amount.toLocaleString('en-IN')}
    </span>
  );
};

export const LegalText: React.FC<LegalTextProps> = ({ children, className, variant = 'info' }) => {
  const variantClasses = {
    warning: 'text-amber-600 bg-amber-50',
    info: 'text-blue-600 bg-blue-50',
    success: 'text-green-600 bg-green-50',
  };

  return (
    <p className={twMerge('text-sm p-3 rounded-md', variantClasses[variant], className)}>
      {children}
    </p>
  );
};

export const TextDivider: React.FC<TextDividerProps> = ({ text, className }) => {
  return (
    <div className={twMerge('flex items-center', className)}>
      <div className="flex-grow border-t border-gray-300" />
      <span className="mx-4 text-sm text-gray-500">{text}</span>
      <div className="flex-grow border-t border-gray-300" />
    </div>
  );
};
