import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BlockquoteProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'icon';
  background?: boolean;
}

const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  className,
  variant = 'default',
  background = false,
}) => {
  const baseStyles = 'pl-4 border-l-4 border-gray-300 my-4';

  const variantStyles = {
    default: 'border-l-4 border-gray-300',
    bordered: 'border-l-4 border-r-4 border-gray-300 px-4',
    icon: 'border-l-4 border-gray-300 pl-8 relative before:content-["""] before:absolute before:left-2 before:top-0 before:text-4xl before:text-gray-400',
  };

  const backgroundStyles = background ? 'bg-gray-50 dark:bg-gray-800 rounded-lg p-4' : '';

  const classes = twMerge(baseStyles, variantStyles[variant], backgroundStyles, className);

  return <blockquote className={classes}>{children}</blockquote>;
};

export default Blockquote;
