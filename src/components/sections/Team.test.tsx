import { render, screen } from '@testing-library/react';
import Team from './Team';
import '@testing-library/jest-dom';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
    className,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} className={className} />
  ),
}));

describe('Team Component', () => {
  it('renders the main heading', () => {
    render(<Team />);
    expect(screen.getByText('Our Team')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Team />);
    expect(
      screen.getByText('Meet the dedicated individuals who make our mission possible.')
    ).toBeInTheDocument();
  });

  it('renders all default team members', () => {
    render(<Team />);

    // Check if all team member names are rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();

    // Check if all team member roles are rendered
    expect(screen.getByText('Founder / CEO')).toBeInTheDocument();
    expect(screen.getByText('Co-Founder / CTO')).toBeInTheDocument();
  });

  it('renders team member images with correct attributes', () => {
    render(<Team />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);

    images.forEach((image, index) => {
      const teamMembers = [
        { name: 'John Doe', imageUrl: '/team/john-doe.jpg' },
        { name: 'Jane Smith', imageUrl: '/team/jane-smith.jpg' },
      ];

      expect(image).toHaveAttribute('src', teamMembers[index].imageUrl);
      expect(image).toHaveAttribute('alt', teamMembers[index].name);
      expect(image).toHaveAttribute('width', '192');
      expect(image).toHaveAttribute('height', '192');
      expect(image).toHaveClass('absolute');
      expect(image).toHaveClass('inset-0');
      expect(image).toHaveClass('h-full');
      expect(image).toHaveClass('w-full');
      expect(image).toHaveClass('object-cover');
    });
  });

  it('renders with correct styling classes', () => {
    render(<Team />);

    // Check main section classes
    const mainSection = screen.getByText('Our Team').closest('section');
    expect(mainSection).toHaveClass('bg-white');
    expect(mainSection).toHaveClass('py-24');
    expect(mainSection).toHaveClass('sm:py-32');

    // Check heading classes
    const heading = screen.getByText('Our Team');
    expect(heading).toHaveClass('text-3xl');
    expect(heading).toHaveClass('font-bold');
    expect(heading).toHaveClass('tracking-tight');
    expect(heading).toHaveClass('text-gray-900');

    // Check description classes
    const description = screen.getByText(
      'Meet the dedicated individuals who make our mission possible.'
    );
    expect(description).toHaveClass('text-lg');
    expect(description).toHaveClass('leading-8');
    expect(description).toHaveClass('text-gray-600');

    // Check team member list classes
    const teamList = screen.getByRole('list');
    expect(teamList).toHaveClass('grid');
    expect(teamList).toHaveClass('grid-cols-1');
    expect(teamList).toHaveClass('sm:grid-cols-2');
    expect(teamList).toHaveClass('lg:grid-cols-3');
  });

  it('accepts and renders custom team members', () => {
    const customTeam = [
      {
        name: 'Custom Member 1',
        role: 'Custom Role 1',
        imageUrl: '/team/custom1.jpg',
      },
      {
        name: 'Custom Member 2',
        role: 'Custom Role 2',
        imageUrl: '/team/custom2.jpg',
      },
    ];

    render(<Team people={customTeam} />);

    // Check if custom team member names are rendered
    expect(screen.getByText('Custom Member 1')).toBeInTheDocument();
    expect(screen.getByText('Custom Member 2')).toBeInTheDocument();

    // Check if custom team member roles are rendered
    expect(screen.getByText('Custom Role 1')).toBeInTheDocument();
    expect(screen.getByText('Custom Role 2')).toBeInTheDocument();

    // Check if custom team member images are rendered
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', '/team/custom1.jpg');
    expect(images[1]).toHaveAttribute('src', '/team/custom2.jpg');
  });

  it('renders team member cards with correct structure', () => {
    render(<Team />);

    const teamMembers = screen.getAllByRole('listitem');
    expect(teamMembers).toHaveLength(2);

    teamMembers.forEach(member => {
      // Check if each member has an image container and image
      const imageContainer = member.querySelector(
        '.relative.h-48.w-48.overflow-hidden.rounded-full'
      );
      expect(imageContainer).toBeInTheDocument();

      const image = member.querySelector('img');
      expect(image).toBeInTheDocument();
      expect(image).toHaveClass('absolute');
      expect(image).toHaveClass('inset-0');
      expect(image).toHaveClass('h-full');
      expect(image).toHaveClass('w-full');
      expect(image).toHaveClass('object-cover');

      // Check if each member has a name and role
      const name = member.querySelector('h3');
      expect(name).toHaveClass('text-lg');
      expect(name).toHaveClass('font-semibold');
      expect(name).toHaveClass('leading-7');
      expect(name).toHaveClass('tracking-tight');
      expect(name).toHaveClass('text-gray-900');

      const role = member.querySelector('p');
      expect(role).toHaveClass('text-sm');
      expect(role).toHaveClass('font-semibold');
      expect(role).toHaveClass('leading-6');
      expect(role).toHaveClass('text-indigo-600');
    });
  });
});
