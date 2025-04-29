import React from 'react';
import { twMerge } from 'tailwind-merge';

type HighlightVariant = 'warning' | 'info' | 'success';
type PriceVariant = 'default' | 'discounted' | 'large';
type LegalTextVariant = 'copyright' | 'terms' | 'fine-print';
type DividerVariant = 'or' | 'section';

interface HighlightedTextProps {
  variant?: HighlightVariant;
  className?: string;
  children: React.ReactNode;
}

interface PriceTextProps {
  amount: number;
  variant?: PriceVariant;
  className?: string;
}

interface LegalTextProps {
  variant?: LegalTextVariant;
  className?: string;
  children: React.ReactNode;
}

interface TextDividerProps {
  variant?: DividerVariant;
  text?: string;
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  variant = 'info',
  className,
  children,
}) => {
  const baseStyles = 'px-2 py-1 rounded';

  const variantStyles = {
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
  };

  const classes = twMerge(baseStyles, variantStyles[variant], className);

  return <mark className={classes}>{children}</mark>;
};

const PriceText: React.FC<PriceTextProps> = ({ amount, variant = 'default', className }) => {
  const baseStyles = 'font-mono';

  const variantStyles = {
    default: 'text-gray-900',
    discounted: 'text-gray-500 line-through',
    large: 'text-2xl font-bold text-gray-900',
  };

  const classes = twMerge(baseStyles, variantStyles[variant], className);

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

  return <span className={classes}>{formattedAmount}</span>;
};

const LegalText: React.FC<LegalTextProps> = ({ variant = 'copyright', className, children }) => {
  const baseStyles = '';

  const variantStyles = {
    copyright: 'text-sm text-gray-600',
    terms: 'text-sm text-blue-600 hover:underline',
    'fine-print': 'text-xs text-gray-500',
  };

  const classes = twMerge(baseStyles, variantStyles[variant], className);

  return <span className={classes}>{children}</span>;
};

const TextDivider: React.FC<TextDividerProps> = ({ variant = 'or', text, className }) => {
  const baseStyles = 'flex items-center gap-4';

  const variantStyles = {
    or: 'text-gray-500 text-sm',
    section: 'text-gray-700 font-medium',
  };

  const classes = twMerge(baseStyles, variantStyles[variant], className);

  const dividerText = text || (variant === 'or' ? 'OR' : 'Continue with');

  return (
    <div className={classes}>
      <div className="flex-1 h-px bg-gray-200" />
      <span>{dividerText}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
};

export { HighlightedText, PriceText, LegalText, TextDivider };
