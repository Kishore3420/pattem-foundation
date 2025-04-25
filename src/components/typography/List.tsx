import React from 'react';
import { twMerge } from 'tailwind-merge';

type ListType = 'ordered' | 'unordered';
type ListStyle = 'decimal' | 'lower-alpha' | 'upper-roman' | 'disc' | 'circle' | 'square';
type ListVariant = 'default' | 'inline' | 'stacked';

interface ListProps {
  type: ListType;
  style?: ListStyle;
  variant?: ListVariant;
  items: string[];
  className?: string;
}

const List: React.FC<ListProps> = ({ type, style, variant = 'default', items, className }) => {
  const baseStyles = 'my-4';

  const typeStyles = {
    ordered: 'list-decimal',
    unordered: 'list-disc',
  };

  const styleStyles = {
    decimal: 'list-decimal',
    'lower-alpha': 'list-[lower-alpha]',
    'upper-roman': 'list-[upper-roman]',
    disc: 'list-disc',
    circle: 'list-[circle]',
    square: 'list-[square]',
  };

  const variantStyles = {
    default: 'space-y-2',
    inline: 'flex flex-wrap gap-4',
    stacked: 'space-y-4',
  };

  const classes = twMerge(
    baseStyles,
    typeStyles[type],
    style && styleStyles[style],
    variantStyles[variant],
    className
  );

  const ListComponent = type === 'ordered' ? 'ol' : 'ul';

  return (
    <ListComponent className={classes}>
      {items.map((item, index) => (
        <li key={index} className={variant === 'inline' ? 'inline' : ''}>
          {item}
        </li>
      ))}
    </ListComponent>
  );
};

export default List;
