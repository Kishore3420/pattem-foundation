import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import '@testing-library/jest-dom';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, src, ...props }: React.ComponentProps<'img'>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} src={src} {...props} />;
  },
}));

// Mock Button component
jest.mock('@/components/atoms/Button/Button', () => ({
  Button: ({
    children,
    variant,
    'data-testid': testId,
  }: {
    children: React.ReactNode;
    variant: string;
    'data-testid'?: string;
  }) => (
    <button data-testid={testId} className={`button-${variant}`}>
      {children}
    </button>
  ),
}));

describe('Header Component', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByText('Pattem Foundation');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders navigation links', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(6); // Logo + 5 nav links
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Causes')).toHaveAttribute('href', '/causes');
    expect(screen.getByText('Donate')).toHaveAttribute('href', '/donate');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contact');
  });

  it('renders the donate button', () => {
    render(<Header />);
    const donateButton = screen.getByText('Donate Now');
    expect(donateButton).toBeInTheDocument();
    expect(donateButton.closest('button')).toHaveClass('button-primary');
  });

  it('renders the mobile menu button on small screens', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveClass('button-ghost');
  });

  it('renders all navigation links', () => {
    render(<Header />);
    const expectedLinks = [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Causes', href: '/causes' },
      { name: 'Donate', href: '/donate' },
      { name: 'Contact', href: '/contact' },
    ];

    expectedLinks.forEach(link => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', link.href);
    });
  });

  it('has correct responsive classes', () => {
    render(<Header />);
    const navigationContainer = screen.getByRole('navigation');
    const desktopNav = navigationContainer.querySelector('.hidden.md\\:flex');
    const mobileNav = navigationContainer.querySelector('.flex.md\\:hidden');

    expect(desktopNav).toBeInTheDocument();
    expect(mobileNav).toBeInTheDocument();
  });

  it('applies correct styles to navigation links', () => {
    render(<Header />);
    const navLinks = screen
      .getAllByRole('link')
      .filter(link => link.textContent !== 'Pattem Foundation');

    navLinks.forEach(link => {
      expect(link).toHaveClass('text-base');
      expect(link).toHaveClass('font-medium');
      expect(link).toHaveClass('text-gray-700');
      expect(link).toHaveClass('hover:text-primary-600');
    });
  });

  it('renders with correct layout structure', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-white', 'shadow-sm');

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('mx-auto', 'max-w-7xl');
    expect(nav).toHaveAttribute('aria-label', 'Top');
  });
});
