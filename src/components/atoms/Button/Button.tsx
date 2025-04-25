'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonShape = 'rounded' | 'square' | 'circle';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  ghost: 'text-gray-700 hover:bg-gray-100',
  link: 'text-primary-600 hover:underline',
};

const shapeStyles: Record<ButtonShape, string> = {
  rounded: 'rounded-md',
  square: 'rounded-none',
  circle: 'rounded-full',
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
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
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
