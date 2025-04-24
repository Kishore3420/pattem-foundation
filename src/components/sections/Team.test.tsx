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
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} />
  ),
}));

describe('Team Component', () => {
  it('renders with default props', () => {
    render(<Team />);

    // Check if the section title is rendered
    expect(screen.getByText('Our Team')).toBeInTheDocument();

    // Check if the description is rendered
    expect(
      screen.getByText('Meet the dedicated individuals who make our mission possible.')
    ).toBeInTheDocument();

    // Check if default team members are rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Founder / CEO')).toBeInTheDocument();
    expect(screen.getByText('Co-Founder / CTO')).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    const customPeople = [
      {
        name: 'Alice Johnson',
        role: 'Designer',
        imageUrl: '/team/alice.jpg',
      },
      {
        name: 'Bob Wilson',
        role: 'Developer',
        imageUrl: '/team/bob.jpg',
      },
    ];

    render(<Team people={customPeople} />);

    // Check if custom team members are rendered
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument();
    expect(screen.getByText('Designer')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders team member images with correct attributes', () => {
    render(<Team />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2); // Two team members

    // Check if images have correct alt text
    expect(images[0]).toHaveAttribute('alt', 'John Doe');
    expect(images[1]).toHaveAttribute('alt', 'Jane Smith');

    // Check if images have correct src
    expect(images[0]).toHaveAttribute('src', '/team/john-doe.jpg');
    expect(images[1]).toHaveAttribute('src', '/team/jane-smith.jpg');
  });

  it('renders with proper accessibility attributes', () => {
    render(<Team />);

    // Check if the list has the correct role
    expect(screen.getByRole('list')).toBeInTheDocument();

    // Check if list items are rendered
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2); // Two team members
  });

  it('renders with correct styling classes', () => {
    render(<Team />);

    // Check if the section has the correct background class
    const section = screen.getByText('Our Team').closest('section');
    expect(section).toHaveClass('bg-white');

    // Check if the grid has the correct classes
    const list = screen.getByRole('list');
    expect(list).toHaveClass('grid');
    expect(list).toHaveClass('grid-cols-1');
    expect(list).toHaveClass('sm:grid-cols-2');
    expect(list).toHaveClass('lg:grid-cols-3');
  });
});
