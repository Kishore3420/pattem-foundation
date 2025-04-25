import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary-600'); // primary variant
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary-600');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gray-200');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-primary-600');

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-gray-700');

    rerender(<Button variant="link">Link</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-primary-600');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-3 py-1.5 text-sm');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-4 py-2 text-base');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-6 py-3 text-lg');

    rerender(<Button size="xl">Extra Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-8 py-4 text-xl');
  });

  it('renders with different shapes', () => {
    const { rerender } = render(<Button shape="rounded">Rounded</Button>);
    expect(screen.getByRole('button')).toHaveClass('rounded-md');

    rerender(<Button shape="square">Square</Button>);
    expect(screen.getByRole('button')).toHaveClass('rounded-none');

    rerender(<Button shape="circle">Circle</Button>);
    expect(screen.getByRole('button')).toHaveClass('rounded-full');
  });

  it('renders with loading state', () => {
    render(<Button isLoading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders with icons', () => {
    const MockIcon = () => <span data-testid="mock-icon">Icon</span>;
    render(
      <Button leftIcon={MockIcon} rightIcon={MockIcon}>
        With Icons
      </Button>
    );
    const icons = screen.getAllByTestId('mock-icon');
    expect(icons).toHaveLength(2);
  });

  it('renders with full width', () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('renders as icon only', () => {
    render(<Button isIconOnly>Icon Only</Button>);
    expect(screen.getByRole('button')).toHaveClass('p-2');
  });

  it('applies hover styles', () => {
    render(<Button>Hover me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('hover:bg-primary-700');
  });

  it('applies focus styles', () => {
    render(<Button>Focus me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('focus:ring-2');
    expect(button).toHaveClass('focus:ring-primary-500');
    expect(button).toHaveClass('focus:ring-offset-2');
  });

  it('applies transition styles', () => {
    render(<Button>Transition</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('transition-colors');
  });
});
