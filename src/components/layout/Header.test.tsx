import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import '@testing-library/jest-dom';

// Mock the next/link component
jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Header Component', () => {
  it('renders the logo with correct link', () => {
    render(<Header />);
    const logo = screen.getByText('Pattem Foundation');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/');
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

  it('renders the donate button', () => {
    render(<Header />);
    const donateButton = screen.getByText('Donate Now');
    expect(donateButton).toBeInTheDocument();
    expect(donateButton.closest('button')).toHaveClass('bg-primary-600');
  });

  it('renders the mobile menu button on small screens', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
    const mobileContainer = menuButton.closest('div');
    expect(mobileContainer).toHaveClass('flex', 'md:hidden');
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
