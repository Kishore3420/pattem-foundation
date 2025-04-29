import React from 'react';
import { twMerge } from 'tailwind-merge';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type FontWeight = 'light' | 'regular' | 'semibold' | 'bold';
type TextColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'warning'
  | 'info'
  | 'neutral'
  | 'light'
  | 'white';
type TextAlign = 'left' | 'center' | 'right' | 'justify';
type TextSize = 'small' | 'regular' | 'large';
type TextStyle = 'italic' | 'underline' | 'strikethrough';

interface TypographyProps {
  as?: HeadingLevel | 'p' | 'span' | 'pre' | 'code';
  weight?: FontWeight;
  color?: TextColor;
  align?: TextAlign;
  size?: TextSize;
  style?: TextStyle;
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  as = 'p',
  weight = 'regular',
  color = 'primary',
  align = 'left',
  size = 'regular',
  style,
  className,
  children,
}) => {
  const Component = as;

  const baseStyles = 'font-sans';

  const weightStyles = {
    light: 'font-light',
    regular: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    danger: 'text-danger',
    warning: 'text-warning',
    info: 'text-info',
    neutral: 'text-neutral',
    light: 'text-light',
    white: 'text-white',
  };

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const sizeStyles = {
    small: 'text-sm',
    regular: 'text-base',
    large: 'text-lg',
  };

  const styleStyles = {
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
  };

  const headingSizes = {
    h1: 'text-4xl md:text-5xl',
    h2: 'text-3xl md:text-4xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
    h5: 'text-lg md:text-xl',
    h6: 'text-base md:text-lg',
  };

  const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as);
  const headingSize = isHeading ? headingSizes[as as HeadingLevel] : '';

  const classes = twMerge(
    baseStyles,
    weightStyles[weight],
    colorStyles[color],
    alignStyles[align],
    !isHeading && sizeStyles[size],
    style && styleStyles[style],
    headingSize,
    className
  );

  return <Component className={classes}>{children}</Component>;
};

export default Typography;
