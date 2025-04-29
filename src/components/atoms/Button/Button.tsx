'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'warning'
  | 'info'
  | 'outline'
  | 'ghost'
  | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonShape = 'rounded' | 'square' | 'circle' | 'pill';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  isLoading?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  fullWidth?: boolean;
  isIconOnly?: boolean;
  isToggle?: boolean;
  isActive?: boolean;
  children?: React.ReactNode;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-secondary text-white hover:bg-secondary-700 focus:ring-secondary-500',
  tertiary: 'bg-tertiary text-white hover:bg-tertiary-700 focus:ring-tertiary-500',
  danger: 'bg-danger text-white hover:bg-danger-700 focus:ring-danger-500',
  warning: 'bg-warning text-white hover:bg-warning-700 focus:ring-warning-500',
  info: 'bg-info text-white hover:bg-info-700 focus:ring-info-500',
  outline: 'border-2 border-primary text-primary hover:bg-primary-50 focus:ring-primary-500',
  ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500',
  link: 'text-primary hover:underline focus:ring-primary-500',
};

const shapeStyles: Record<ButtonShape, string> = {
  rounded: 'rounded-md',
  square: 'rounded-none',
  circle: 'rounded-full',
  pill: 'rounded-full',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      shape = 'rounded',
      isLoading = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      fullWidth = false,
      className = '',
      children,
      disabled,
      isIconOnly = false,
      isToggle = false,
      isActive = false,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const buttonStyles = twMerge(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      shapeStyles[shape],
      fullWidth ? 'w-full' : '',
      isIconOnly ? 'p-2' : '',
      className
    );

    const buttonAriaLabel =
      ariaLabel || (isIconOnly && typeof children === 'string' ? children : undefined);

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        className={buttonStyles}
        disabled={disabled || isLoading}
        aria-label={buttonAriaLabel}
        aria-busy={isLoading}
        aria-pressed={isToggle ? isActive : undefined}
        {...props}
      >
        {isLoading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="mr-2"
            role="status"
            aria-label="Loading"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </motion.div>
        )}
        {!isLoading && LeftIcon && <LeftIcon className="mr-2" aria-hidden="true" />}
        {children}
        {!isLoading && RightIcon && <RightIcon className="ml-2" aria-hidden="true" />}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
