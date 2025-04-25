import React from 'react';
import { render, screen } from '@testing-library/react';
import { Banner } from './Banner';
import '@testing-library/jest-dom';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, src, ...props }: React.ComponentProps<'img'> & { priority?: boolean }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} src={src} {...props} />;
  },
}));

// Mock Button component
jest.mock('@/components/Button/Button', () => ({
  Button: ({
    children,
    variant,
    size,
    'data-testid': testId,
  }: {
    children: React.ReactNode;
    variant: string;
    size?: string;
    'data-testid'?: string;
  }) => (
    <button data-testid={testId} className={`button-${variant} button-${size}`}>
      {children}
    </button>
  ),
}));

describe('Banner Component', () => {
  it('renders the main heading', () => {
    render(<Banner />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Making a Difference Together');
    expect(heading).toHaveClass(
      'text-4xl',
      'font-bold',
      'tracking-tight',
      'text-gray-900',
      'sm:text-6xl'
    );
  });

  it('renders the description text', () => {
    render(<Banner />);
    const description = screen.getByText(/Join us in our mission to create positive change/);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-lg', 'leading-8', 'text-gray-600');
  });

  it('renders the call-to-action buttons', () => {
    render(<Banner />);

    const donateButton = screen.getByTestId('button-primary-lg');
    expect(donateButton).toBeInTheDocument();
    expect(donateButton).toHaveTextContent('Donate Now');

    const learnMoreButton = screen.getByTestId('button-outline-lg');
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveTextContent('Learn More');
  });

  it('renders the banner image', () => {
    render(<Banner />);
    const image = screen.getByAltText('App screenshot');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/banner-image.jpg');
  });

  it('has correct layout structure', () => {
    render(<Banner />);
    const mainContainer = screen.getByTestId('banner-container');
    expect(mainContainer).toHaveClass(
      'relative',
      'isolate',
      'overflow-hidden',
      'bg-gradient-to-b',
      'from-primary-100/20'
    );

    const contentContainer = screen.getByTestId('banner-content');
    expect(contentContainer).toHaveClass(
      'mx-auto',
      'max-w-7xl',
      'px-6',
      'pb-24',
      'pt-10',
      'sm:pb-32',
      'lg:flex',
      'lg:px-8',
      'lg:py-40'
    );

    const textSection = screen.getByTestId('banner-text');
    expect(textSection).toHaveClass(
      'mx-auto',
      'max-w-2xl',
      'lg:mx-0',
      'lg:max-w-xl',
      'lg:flex-shrink-0',
      'lg:pt-8'
    );

    const imageSection = screen.getByTestId('banner-image-container');
    expect(imageSection).toHaveClass(
      'mx-auto',
      'mt-16',
      'flex',
      'max-w-2xl',
      'sm:mt-24',
      'lg:ml-10',
      'lg:mr-0',
      'lg:mt-0',
      'lg:max-w-none',
      'lg:flex-none',
      'xl:ml-32'
    );
  });
});
