import React from 'react';
import { twMerge } from 'tailwind-merge';

type DefinitionListVariant = 'inline' | 'stacked';

interface DefinitionItem {
  term: string;
  description: string;
}

interface DefinitionListProps {
  items: DefinitionItem[];
  variant?: DefinitionListVariant;
  className?: string;
}

const DefinitionList: React.FC<DefinitionListProps> = ({
  items,
  variant = 'stacked',
  className,
}) => {
  const baseStyles = 'my-4';

  const variantStyles = {
    inline: 'grid grid-cols-[auto_1fr] gap-x-4 gap-y-2',
    stacked: 'space-y-4',
  };

  const classes = twMerge(baseStyles, variantStyles[variant], className);

  return (
    <dl className={classes}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <dt className={variant === 'inline' ? 'font-semibold' : 'font-bold mb-1'}>{item.term}</dt>
          <dd className={variant === 'inline' ? '' : 'ml-4'}>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default DefinitionList;
