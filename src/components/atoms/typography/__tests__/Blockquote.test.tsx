import React from 'react';
import { render, screen } from '@testing-library/react';
import Blockquote from '../Blockquote';

describe('Blockquote', () => {
  it('renders with default props', () => {
    render(<Blockquote>Default blockquote</Blockquote>);
    expect(screen.getByText('Default blockquote')).toBeInTheDocument();
  });

  it('applies different variants', () => {
    const { rerender } = render(<Blockquote variant="default">Default variant</Blockquote>);
    expect(screen.getByText('Default variant')).toHaveClass('border-l-4');

    rerender(<Blockquote variant="bordered">Bordered variant</Blockquote>);
    expect(screen.getByText('Bordered variant')).toHaveClass('border-l-4', 'border-r-4');

    rerender(<Blockquote variant="icon">Icon variant</Blockquote>);
    expect(screen.getByText('Icon variant')).toHaveClass('before:content-["""]');
  });

  it('applies background style when background prop is true', () => {
    render(<Blockquote background>With background</Blockquote>);
    expect(screen.getByText('With background')).toHaveClass('bg-gray-50');
  });

  it('combines variant and background styles', () => {
    render(
      <Blockquote variant="icon" background>
        Combined styles
      </Blockquote>
    );

    const element = screen.getByText('Combined styles');
    expect(element).toHaveClass('before:content-["""]');
    expect(element).toHaveClass('bg-gray-50');
  });

  it('applies custom className', () => {
    render(<Blockquote className="custom-class">Custom styled blockquote</Blockquote>);
    expect(screen.getByText('Custom styled blockquote')).toHaveClass('custom-class');
  });
});
