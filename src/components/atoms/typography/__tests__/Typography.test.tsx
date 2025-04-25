import React from 'react';
import { render, screen } from '@testing-library/react';
import Typography from '../Typography';

describe('Typography', () => {
  it('renders with default props', () => {
    render(<Typography>Default text</Typography>);
    expect(screen.getByText('Default text')).toBeInTheDocument();
  });

  it('renders as different heading levels', () => {
    const { rerender } = render(<Typography as="h1">Heading 1</Typography>);
    expect(screen.getByText('Heading 1').tagName).toBe('H1');

    rerender(<Typography as="h2">Heading 2</Typography>);
    expect(screen.getByText('Heading 2').tagName).toBe('H2');

    rerender(<Typography as="h3">Heading 3</Typography>);
    expect(screen.getByText('Heading 3').tagName).toBe('H3');
  });

  it('applies different font weights', () => {
    const { rerender } = render(<Typography weight="light">Light text</Typography>);
    expect(screen.getByText('Light text')).toHaveClass('font-light');

    rerender(<Typography weight="bold">Bold text</Typography>);
    expect(screen.getByText('Bold text')).toHaveClass('font-bold');
  });

  it('applies different colors', () => {
    const { rerender } = render(<Typography color="primary">Primary text</Typography>);
    expect(screen.getByText('Primary text')).toHaveClass('text-gray-900');

    rerender(<Typography color="error">Error text</Typography>);
    expect(screen.getByText('Error text')).toHaveClass('text-red-600');
  });

  it('applies different alignments', () => {
    const { rerender } = render(<Typography align="center">Centered text</Typography>);
    expect(screen.getByText('Centered text')).toHaveClass('text-center');

    rerender(<Typography align="right">Right-aligned text</Typography>);
    expect(screen.getByText('Right-aligned text')).toHaveClass('text-right');
  });

  it('applies different sizes', () => {
    const { rerender } = render(<Typography size="small">Small text</Typography>);
    expect(screen.getByText('Small text')).toHaveClass('text-sm');

    rerender(<Typography size="large">Large text</Typography>);
    expect(screen.getByText('Large text')).toHaveClass('text-lg');
  });

  it('applies different styles', () => {
    const { rerender } = render(<Typography style="italic">Italic text</Typography>);
    expect(screen.getByText('Italic text')).toHaveClass('italic');

    rerender(<Typography style="underline">Underlined text</Typography>);
    expect(screen.getByText('Underlined text')).toHaveClass('underline');
  });

  it('combines multiple styles', () => {
    render(
      <Typography weight="bold" color="primary" align="center" size="large" style="italic">
        Combined styles
      </Typography>
    );

    const element = screen.getByText('Combined styles');
    expect(element).toHaveClass('font-bold');
    expect(element).toHaveClass('text-gray-900');
    expect(element).toHaveClass('text-center');
    expect(element).toHaveClass('text-lg');
    expect(element).toHaveClass('italic');
  });

  it('applies custom className', () => {
    render(<Typography className="custom-class">Custom styled text</Typography>);
    expect(screen.getByText('Custom styled text')).toHaveClass('custom-class');
  });
});
