import React from 'react';
import { render, screen } from '@testing-library/react';
import TextModifiers from '../TextModifiers';

describe('TextModifiers', () => {
  it('renders children with default props', () => {
    render(<TextModifiers>Default text</TextModifiers>);
    expect(screen.getByText('Default text')).toBeInTheDocument();
  });

  it('applies text alignment', () => {
    const { rerender } = render(<TextModifiers align="center">Centered text</TextModifiers>);
    expect(screen.getByText('Centered text')).toHaveClass('text-center');

    rerender(<TextModifiers align="right">Right text</TextModifiers>);
    expect(screen.getByText('Right text')).toHaveClass('text-right');

    rerender(<TextModifiers align="justify">Justified text</TextModifiers>);
    expect(screen.getByText('Justified text')).toHaveClass('text-justify');
  });

  it('applies text transformation', () => {
    const { rerender } = render(<TextModifiers transform="uppercase">Upper text</TextModifiers>);
    expect(screen.getByText('Upper text')).toHaveClass('uppercase');

    rerender(<TextModifiers transform="lowercase">Lower text</TextModifiers>);
    expect(screen.getByText('Lower text')).toHaveClass('lowercase');

    rerender(<TextModifiers transform="capitalize">Cap text</TextModifiers>);
    expect(screen.getByText('Cap text')).toHaveClass('capitalize');
  });

  it('applies text overflow handling', () => {
    const { rerender } = render(<TextModifiers overflow="truncate">Truncated text</TextModifiers>);
    expect(screen.getByText('Truncated text')).toHaveClass('truncate');

    rerender(<TextModifiers overflow="break-words">Break words</TextModifiers>);
    expect(screen.getByText('Break words')).toHaveClass('break-words');

    rerender(<TextModifiers overflow="no-wrap">No wrap</TextModifiers>);
    expect(screen.getByText('No wrap')).toHaveClass('whitespace-nowrap');
  });

  it('applies line clamping', () => {
    const { rerender } = render(<TextModifiers lineClamp={1}>One line</TextModifiers>);
    expect(screen.getByText('One line')).toHaveClass('line-clamp-1');

    rerender(<TextModifiers lineClamp={3}>Three lines</TextModifiers>);
    expect(screen.getByText('Three lines')).toHaveClass('line-clamp-3');
  });

  it('applies custom className', () => {
    render(<TextModifiers className="custom-class">Custom text</TextModifiers>);
    expect(screen.getByText('Custom text')).toHaveClass('custom-class');
  });

  it('combines multiple modifiers', () => {
    render(
      <TextModifiers
        align="center"
        transform="uppercase"
        overflow="truncate"
        lineClamp={2}
        className="custom-class"
      >
        Combined modifiers
      </TextModifiers>
    );

    const element = screen.getByText('Combined modifiers');
    expect(element).toHaveClass(
      'text-center',
      'uppercase',
      'truncate',
      'line-clamp-2',
      'custom-class'
    );
  });
});
