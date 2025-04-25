import React from 'react';
import { render, screen } from '@testing-library/react';
import DefinitionList from '../DefinitionList';

describe('DefinitionList', () => {
  const sampleItems = [
    {
      term: 'HTML',
      description: 'HyperText Markup Language',
    },
    {
      term: 'CSS',
      description: 'Cascading Style Sheets',
    },
  ];

  it('renders with default props', () => {
    render(<DefinitionList items={sampleItems} />);
    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText('HyperText Markup Language')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('Cascading Style Sheets')).toBeInTheDocument();
  });

  it('applies stacked variant styles', () => {
    const { container } = render(<DefinitionList items={sampleItems} variant="stacked" />);
    const list = container.querySelector('dl');
    expect(list).toHaveClass('space-y-4');

    const terms = container.querySelectorAll('dt');
    terms.forEach(term => {
      expect(term).toHaveClass('font-bold', 'mb-1');
    });

    const descriptions = container.querySelectorAll('dd');
    descriptions.forEach(desc => {
      expect(desc).toHaveClass('ml-4');
    });
  });

  it('applies inline variant styles', () => {
    const { container } = render(<DefinitionList items={sampleItems} variant="inline" />);
    const list = container.querySelector('dl');
    expect(list).toHaveClass('grid', 'grid-cols-[auto_1fr]', 'gap-x-4', 'gap-y-2');

    const terms = container.querySelectorAll('dt');
    terms.forEach(term => {
      expect(term).toHaveClass('font-semibold');
    });
  });

  it('applies custom className', () => {
    const { container } = render(<DefinitionList items={sampleItems} className="custom-class" />);
    const list = container.querySelector('dl');
    expect(list).toHaveClass('custom-class');
  });

  it('renders empty list when no items provided', () => {
    const { container } = render(<DefinitionList items={[]} />);
    const list = container.querySelector('dl');
    expect(list?.children.length).toBe(0);
  });
});
