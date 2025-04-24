import React from 'react';
import { render, screen } from '@testing-library/react';
import { Causes } from './Causes';
import '@testing-library/jest-dom';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ComponentProps<'img'>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock Button component
jest.mock('@/components/ui/Button', () => ({
  Button: ({ children, variant }: { children: React.ReactNode; variant: string }) => (
    <button data-testid={`button-${variant}`}>{children}</button>
  ),
}));

describe('Causes Component', () => {
  it('renders the section heading and description', () => {
    render(<Causes />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Our Causes');
    expect(heading).toHaveClass(
      'text-3xl',
      'font-bold',
      'tracking-tight',
      'text-gray-900',
      'sm:text-4xl'
    );

    const description = screen.getByText(/Join us in supporting these important causes/);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-lg', 'leading-8', 'text-gray-600');
  });

  it('renders default causes', () => {
    render(<Causes />);

    const defaultCauses = [
      {
        title: 'Education for All',
        description: 'Providing quality education to underprivileged children across India.',
        image: '/images/education.jpg',
        raised: 250000,
        goal: 500000,
      },
      {
        title: 'Clean Water Initiative',
        description: 'Bringing clean drinking water to rural communities.',
        image: '/images/water.jpg',
        raised: 180000,
        goal: 300000,
      },
      {
        title: 'Healthcare Access',
        description: 'Improving healthcare access in remote areas.',
        image: '/images/healthcare.jpg',
        raised: 320000,
        goal: 600000,
      },
    ];

    // Check section heading
    expect(screen.getByRole('heading', { name: 'Our Causes' })).toBeInTheDocument();

    // Check default causes are rendered
    defaultCauses.forEach(cause => {
      expect(screen.getByText(cause.title)).toBeInTheDocument();
      expect(screen.getByText(cause.description)).toBeInTheDocument();
      const progress = Math.round((cause.raised / cause.goal) * 100);
      expect(screen.getByText(`${progress}% Funded`)).toBeInTheDocument();
    });

    // Check donate buttons
    const donateButtons = screen.getAllByTestId('button-primary');
    expect(donateButtons).toHaveLength(defaultCauses.length);
    donateButtons.forEach(button => {
      expect(button).toHaveTextContent('Donate Now');
    });
  });

  it('renders custom causes when provided', () => {
    const mockCustomCauses = [
      {
        title: 'Custom Cause 1',
        description: 'Custom description 1',
        image: '/custom-image-1.jpg',
        raised: 50000,
        goal: 100000,
      },
      {
        title: 'Custom Cause 2',
        description: 'Custom description 2',
        image: '/custom-image-2.jpg',
        raised: 75000,
        goal: 100000,
      },
    ];

    render(<Causes causes={mockCustomCauses} />);

    mockCustomCauses.forEach(cause => {
      expect(screen.getByText(cause.title)).toBeInTheDocument();
      expect(screen.getByText(cause.description)).toBeInTheDocument();
      const progress = Math.round((cause.raised / cause.goal) * 100);
      expect(screen.getByText(`${progress}% Funded`)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: cause.title })).toHaveAttribute('src', cause.image);
    });

    // Verify default causes are not rendered
    expect(screen.queryByText('Education for All')).not.toBeInTheDocument();
    expect(screen.queryByText('Clean Water Initiative')).not.toBeInTheDocument();
    expect(screen.queryByText('Healthcare Access')).not.toBeInTheDocument();
  });

  it('has correct layout structure', () => {
    render(<Causes />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass('bg-white', 'py-24', 'sm:py-32');

    const container = section.firstElementChild;
    expect(container).toHaveClass('mx-auto', 'max-w-7xl', 'px-6', 'lg:px-8');

    const grid = container?.lastElementChild;
    expect(grid).toHaveClass(
      'mx-auto',
      'mt-16',
      'grid',
      'max-w-2xl',
      'grid-cols-1',
      'gap-x-8',
      'gap-y-20',
      'lg:mx-0',
      'lg:max-w-none',
      'lg:grid-cols-3'
    );
  });
});
