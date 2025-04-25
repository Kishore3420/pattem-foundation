import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type LinkVariant = 'default' | 'underline' | 'bold' | 'icon';
type LinkColor = 'primary' | 'secondary' | 'danger';
type IconPosition = 'left' | 'right';

interface LinkProps {
  href: string;
  variant?: LinkVariant;
  color?: LinkColor;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  className?: string;
  children: React.ReactNode;
}

interface CopyableTextProps {
  text: string;
  className?: string;
  children: React.ReactNode;
}

interface TextWithIconProps {
  icon: React.ReactNode;
  iconPosition?: IconPosition;
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  href,
  variant = 'default',
  color = 'primary',
  icon,
  iconPosition = 'right',
  className,
  children,
}) => {
  const baseStyles = 'transition-colors duration-200';

  const variantStyles = {
    default: 'hover:text-blue-600',
    underline: 'underline hover:text-blue-600',
    bold: 'font-bold hover:text-blue-600',
    icon: 'flex items-center gap-2 hover:text-blue-600',
  };

  const colorStyles = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    danger: 'text-red-600',
  };

  const classes = twMerge(baseStyles, variantStyles[variant], colorStyles[color], className);

  return (
    <a href={href} className={classes}>
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </a>
  );
};

const CopyableText: React.FC<CopyableTextProps> = ({ text, className, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const classes = twMerge('inline-flex items-center gap-2 cursor-pointer', className);

  return (
    <div className={classes} onClick={handleCopy}>
      {children}
      <span className="text-sm text-gray-500">{copied ? '✓ Copied!' : '📋 Copy'}</span>
    </div>
  );
};

const TextWithIcon: React.FC<TextWithIconProps> = ({
  icon,
  iconPosition = 'left',
  className,
  children,
}) => {
  const classes = twMerge('inline-flex items-center gap-2', className);

  return (
    <span className={classes}>
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </span>
  );
};

export { Link, CopyableText, TextWithIcon };
