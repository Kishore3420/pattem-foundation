import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, buttonVariants } from './Button';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary-600');
    expect(button).toHaveClass('h-10');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    let button = screen.getByRole('button', { name: 'Secondary' });
    expect(button).toHaveClass('bg-secondary-600');

    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole('button', { name: 'Outline' });
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-input');

    rerender(<Button variant="ghost">Ghost</Button>);
    button = screen.getByRole('button', { name: 'Ghost' });
    expect(button).toHaveClass('hover:bg-accent');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByRole('button', { name: 'Small' });
    expect(button).toHaveClass('h-9');
    expect(button).toHaveClass('px-3');

    rerender(<Button size="md">Medium</Button>);
    button = screen.getByRole('button', { name: 'Medium' });
    expect(button).toHaveClass('h-10');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('py-2');

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole('button', { name: 'Large' });
    expect(button).toHaveClass('h-11');
    expect(button).toHaveClass('px-8');
  });

  it('applies additional className prop', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button', { name: 'Custom' });
    expect(button).toHaveClass('custom-class');
  });

  it('forwards additional props to button element', () => {
    render(
      <Button disabled type="submit" data-testid="test-button">
        Test
      </Button>
    );
    const button = screen.getByRole('button', { name: 'Test' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('data-testid', 'test-button');
  });

  it('applies focus and disabled styles', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: 'Disabled' });

    expect(button).toHaveClass('disabled:opacity-50');
    expect(button).toHaveClass('disabled:pointer-events-none');
    expect(button).toHaveClass('focus-visible:outline-none');
    expect(button).toHaveClass('focus-visible:ring-2');
    expect(button).toHaveClass('focus-visible:ring-offset-2');
  });

  it('forwards ref to button element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Test</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveTextContent('Ref Test');
  });

  it('has correct displayName', () => {
    expect(Button.displayName).toBe('Button');
  });
});

describe('buttonVariants', () => {
  it('generates correct class names with default variants', () => {
    const classes = buttonVariants({});
    expect(classes).toContain('bg-primary-600'); // primary variant
    expect(classes).toContain('h-10'); // md size
  });

  it('generates correct class names with custom variants', () => {
    const classes = buttonVariants({ variant: 'secondary', size: 'lg' });
    expect(classes).toContain('bg-secondary-600');
    expect(classes).toContain('h-11');
  });

  it('includes base classes regardless of variants', () => {
    const classes = buttonVariants({});
    expect(classes).toContain('inline-flex');
    expect(classes).toContain('items-center');
    expect(classes).toContain('justify-center');
    expect(classes).toContain('rounded-md');
    expect(classes).toContain('text-sm');
    expect(classes).toContain('font-medium');
    expect(classes).toContain('transition-colors');
  });
});
