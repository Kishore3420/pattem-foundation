import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../List';

describe('List', () => {
  const sampleItems = ['First item', 'Second item', 'Third item'];

  it('renders ordered list with default props', () => {
    render(<List type="ordered" items={sampleItems} />);
    const list = screen.getByRole('list');
    expect(list.tagName).toBe('OL');
    sampleItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders unordered list with default props', () => {
    render(<List type="unordered" items={sampleItems} />);
    const list = screen.getByRole('list');
    expect(list.tagName).toBe('UL');
    sampleItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('applies different list styles', () => {
    const { rerender } = render(<List type="ordered" items={sampleItems} style="decimal" />);
    expect(screen.getByRole('list')).toHaveClass('list-decimal');

    rerender(<List type="ordered" items={sampleItems} style="lower-alpha" />);
    expect(screen.getByRole('list')).toHaveClass('list-[lower-alpha]');

    rerender(<List type="unordered" items={sampleItems} style="circle" />);
    expect(screen.getByRole('list')).toHaveClass('list-[circle]');
  });

  it('applies different variants', () => {
    const { rerender } = render(<List type="unordered" items={sampleItems} variant="default" />);
    expect(screen.getByRole('list')).toHaveClass('space-y-2');

    rerender(<List type="unordered" items={sampleItems} variant="inline" />);
    expect(screen.getByRole('list')).toHaveClass('flex', 'flex-wrap', 'gap-4');

    rerender(<List type="unordered" items={sampleItems} variant="stacked" />);
    expect(screen.getByRole('list')).toHaveClass('space-y-4');
  });

  it('applies inline styles to list items in inline variant', () => {
    render(<List type="unordered" items={sampleItems} variant="inline" />);
    const items = screen.getAllByRole('listitem');
    items.forEach(item => {
      expect(item).toHaveClass('inline');
    });
  });

  it('applies custom className', () => {
    render(<List type="unordered" items={sampleItems} className="custom-class" />);
    expect(screen.getByRole('list')).toHaveClass('custom-class');
  });
});
