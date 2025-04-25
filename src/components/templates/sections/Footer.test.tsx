import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} className="text-sm text-gray-300 hover:text-white">
      {children}
    </a>
  ),
}));

describe('Footer Component', () => {
  it('renders the footer with correct styling', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-white');

    const container = footer.firstElementChild;
    expect(container).toHaveClass('mx-auto');
    expect(container).toHaveClass('max-w-7xl');
    expect(container).toHaveClass('px-6');
    expect(container).toHaveClass('py-12');
    expect(container).toHaveClass('md:flex');
    expect(container).toHaveClass('md:items-center');
    expect(container).toHaveClass('md:justify-between');
    expect(container).toHaveClass('lg:px-8');
  });

  it('renders copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Pattem Foundation. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it('renders social links with correct attributes', () => {
    render(<Footer />);

    const socialLinks = screen
      .getAllByRole('link')
      .filter(
        link =>
          link.getAttribute('aria-label') === 'Facebook' ||
          link.getAttribute('aria-label') === 'Twitter' ||
          link.getAttribute('aria-label') === 'Instagram'
      );
    expect(socialLinks).toHaveLength(3); // Facebook, Instagram, Twitter

    const [facebook, twitter, instagram] = socialLinks;

    expect(facebook).toHaveAttribute('href', '#');
    expect(facebook).toHaveClass('text-gray-400');
    expect(facebook).toHaveClass('hover:text-gray-500');

    expect(twitter).toHaveAttribute('href', '#');
    expect(twitter).toHaveClass('text-gray-400');
    expect(twitter).toHaveClass('hover:text-gray-500');

    expect(instagram).toHaveAttribute('href', '#');
    expect(instagram).toHaveClass('text-gray-400');
    expect(instagram).toHaveClass('hover:text-gray-500');
  });

  it('renders social icons with correct accessibility labels', () => {
    render(<Footer />);

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
  });

  it('renders social links container with correct styling', () => {
    render(<Footer />);

    const socialContainer = screen.getByLabelText('Facebook').closest('div');
    expect(socialContainer).toHaveClass('mt-4');
    expect(socialContainer).toHaveClass('flex');
    expect(socialContainer).toHaveClass('space-x-6');
    expect(socialContainer).toHaveClass('md:order-2');
  });

  it('renders copyright container with correct styling', () => {
    render(<Footer />);

    const copyrightContainer =
      screen.getByText(/© \d{4} Pattem Foundation/).parentElement?.parentElement;
    expect(copyrightContainer).toHaveClass('mt-8');
    expect(copyrightContainer).toHaveClass('md:order-1');
    expect(copyrightContainer).toHaveClass('md:mt-0');
  });

  it('renders copyright text with correct styling', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/© \d{4} Pattem Foundation/);
    expect(copyrightText.parentElement).toHaveClass('text-center');
    expect(copyrightText.parentElement).toHaveClass('text-xs');
    expect(copyrightText.parentElement).toHaveClass('leading-5');
    expect(copyrightText.parentElement).toHaveClass('text-gray-500');
  });

  it('renders the about section', () => {
    render(<Footer />);

    // Check heading
    const aboutHeading = screen.getByRole('heading', { name: 'About Us' });
    expect(aboutHeading).toBeInTheDocument();

    // Check description
    expect(
      screen.getByText(
        'We are dedicated to creating positive change through sustainable development, education, and community empowerment.'
      )
    ).toBeInTheDocument();
  });

  it('renders quick links section', () => {
    render(<Footer />);

    // Check heading
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument();

    // Check all links
    const links = [
      { text: 'About Us', href: '/about' },
      { text: 'Our Causes', href: '/causes' },
      { text: 'Our Team', href: '/team' },
      { text: 'Contact Us', href: '/contact' },
    ];

    links.forEach(link => {
      const linkElement = screen.getByRole('link', { name: link.text });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.href);
    });
  });

  it('renders contact section', () => {
    render(<Footer />);

    // Check heading
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();

    // Check contact information
    expect(screen.getByText('123 Foundation Street')).toBeInTheDocument();
    expect(screen.getByText('City, State 12345')).toBeInTheDocument();
    expect(screen.getByText('Phone: (123) 456-7890')).toBeInTheDocument();
    expect(screen.getByText('Email: info@pattemfoundation.org')).toBeInTheDocument();
  });

  it('renders social media section', () => {
    render(<Footer />);

    // Check heading
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument();

    // Check social media icons
    const socialLinks = screen
      .getAllByRole('link')
      .filter(
        link =>
          link.getAttribute('aria-label') === 'Facebook' ||
          link.getAttribute('aria-label') === 'Twitter' ||
          link.getAttribute('aria-label') === 'Instagram'
      );
    expect(socialLinks).toHaveLength(3);

    // Check social media icons are present
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
  });

  it('renders with correct styling classes', () => {
    render(<Footer />);

    // Check main footer classes
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-white');

    // Check grid container classes
    const gridContainer = screen
      .getByRole('heading', { name: 'About Us' })
      .closest('div')?.parentElement;
    expect(gridContainer).toHaveClass('grid');
    expect(gridContainer).toHaveClass('grid-cols-1');
    expect(gridContainer).toHaveClass('sm:grid-cols-2');
    expect(gridContainer).toHaveClass('lg:grid-cols-4');

    // Check section headings
    const headings = screen.getAllByRole('heading');
    headings.forEach(heading => {
      expect(heading).toHaveClass('text-lg');
      expect(heading).toHaveClass('font-semibold');
    });

    // Check link styles
    const quickLinks = screen.getAllByRole('link').filter(link => !link.getAttribute('aria-label'));
    quickLinks.forEach(link => {
      expect(link).toHaveClass('text-sm');
      expect(link).toHaveClass('text-gray-300');
      expect(link).toHaveClass('hover:text-white');
    });

    // Check social media icons
    const socialIcons = screen.getAllByRole('link').filter(link => link.getAttribute('aria-label'));
    socialIcons.forEach(icon => {
      expect(icon).toHaveClass('text-gray-400');
      expect(icon).toHaveClass('hover:text-gray-500');
    });
  });

  it('renders social media icons with correct attributes', () => {
    render(<Footer />);

    const socialIcons = screen.getAllByRole('link').filter(link => link.getAttribute('aria-label'));

    socialIcons.forEach(icon => {
      const svg = icon.querySelector('svg');
      expect(svg).toHaveClass('h-6');
      expect(svg).toHaveClass('w-6');
      expect(svg).toHaveAttribute('fill', 'currentColor');
    });
  });
});
