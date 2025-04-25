import React from 'react';
import { twMerge } from 'tailwind-merge';

type TextAlign = 'left' | 'center' | 'right' | 'justify';
type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
type TextOverflow = 'truncate' | 'break-words' | 'break-all' | 'no-wrap';
type LineClamp = 1 | 2 | 3 | 4 | 5;

interface TextModifiersProps {
  align?: TextAlign;
  transform?: TextTransform;
  overflow?: TextOverflow;
  lineClamp?: LineClamp;
  className?: string;
  children: React.ReactNode;
}

const TextModifiers: React.FC<TextModifiersProps> = ({
  align,
  transform,
  overflow,
  lineClamp,
  className,
  children,
}) => {
  const baseStyles = '';

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const transformStyles = {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    'normal-case': 'normal-case',
  };

  const overflowStyles = {
    truncate: 'truncate',
    'break-words': 'break-words',
    'break-all': 'break-all',
    'no-wrap': 'whitespace-nowrap',
  };

  const lineClampStyles = {
    1: 'line-clamp-1',
    2: 'line-clamp-2',
    3: 'line-clamp-3',
    4: 'line-clamp-4',
    5: 'line-clamp-5',
  };

  const classes = twMerge(
    baseStyles,
    align && alignStyles[align],
    transform && transformStyles[transform],
    overflow && overflowStyles[overflow],
    lineClamp && lineClampStyles[lineClamp],
    className
  );

  return <div className={classes}>{children}</div>;
};

export default TextModifiers;
