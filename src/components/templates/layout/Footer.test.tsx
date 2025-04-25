import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
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

describe('Footer Component', () => {
  it('renders main navigation links', () => {
    render(<Footer />);
    const expectedLinks = [
      { name: 'About', href: '/about' },
      { name: 'Causes', href: '/causes' },
      { name: 'Donate', href: '/donate' },
      { name: 'Contact', href: '/contact' },
    ];

    expectedLinks.forEach(link => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', link.href);
      expect(linkElement.closest('a')).toHaveClass('text-gray-600', 'hover:text-gray-900');
    });
  });

  it('renders social media links', () => {
    render(<Footer />);
    const socialLinks = ['Facebook', 'Instagram', 'Twitter'];

    socialLinks.forEach(name => {
      const link = screen.getByRole('link', { name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#');
      expect(link).toHaveClass('text-gray-400', 'hover:text-gray-500');

      // Check if social icons are rendered and hidden from screen readers
      const icon = link.querySelector('svg');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('h-6', 'w-6');
      expect(icon).toHaveAttribute('aria-hidden', 'true');

      // Check if social network name is available for screen readers
      const srOnly = link.querySelector('.sr-only');
      expect(srOnly).toBeInTheDocument();
      expect(srOnly).toHaveTextContent(name);
    });
  });

  it('renders the copyright notice with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(`© ${currentYear} Pattem Foundation. All rights reserved.`);
    expect(copyright).toBeInTheDocument();
    expect(copyright).toHaveClass('text-gray-500');
  });

  it('has correct layout structure', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-white');

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Footer');
    expect(nav).toHaveClass('-mb-6', 'columns-2', 'sm:flex', 'sm:justify-center', 'sm:space-x-12');

    const socialContainer = screen.getByRole('navigation').nextElementSibling;
    expect(socialContainer).toHaveClass('mt-10', 'flex', 'justify-center', 'space-x-10');
  });
});
