import { render, screen } from '@testing-library/react';
import { Impact } from './Impact';
import '@testing-library/jest-dom';

describe('Impact Component', () => {
  it('renders the main heading', () => {
    render(<Impact />);
    expect(screen.getByText('Our Impact')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Impact />);
    expect(
      screen.getByText("Together, we've made a significant difference in communities across India.")
    ).toBeInTheDocument();
  });

  it('renders all impact statistics', () => {
    render(<Impact />);

    // Check if all stat names are rendered
    expect(screen.getByText('Children Educated')).toBeInTheDocument();
    expect(screen.getByText('Communities Served')).toBeInTheDocument();
    expect(screen.getByText('Water Projects')).toBeInTheDocument();
    expect(screen.getByText('Healthcare Camps')).toBeInTheDocument();

    // Check if all stat values are rendered
    expect(screen.getByText('10,000+')).toBeInTheDocument();
    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText('100+')).toBeInTheDocument();
    expect(screen.getByText('250+')).toBeInTheDocument();
  });

  it('renders with correct styling classes', () => {
    render(<Impact />);

    // Check main section classes
    const mainSection = screen.getByText('Our Impact').closest('section');
    expect(mainSection).toHaveClass('bg-primary-600');
    expect(mainSection).toHaveClass('py-24');
    expect(mainSection).toHaveClass('sm:py-32');

    // Check heading classes
    const heading = screen.getByText('Our Impact');
    expect(heading).toHaveClass('text-3xl');
    expect(heading).toHaveClass('font-bold');
    expect(heading).toHaveClass('tracking-tight');
    expect(heading).toHaveClass('text-white');

    // Check description classes
    const description = screen.getByText(
      "Together, we've made a significant difference in communities across India."
    );
    expect(description).toHaveClass('text-lg');
    expect(description).toHaveClass('leading-8');
    expect(description).toHaveClass('text-primary-100');

    // Check stats grid classes
    const statsGrid = screen.getByText('Children Educated').closest('dl');
    expect(statsGrid).toHaveClass('grid');
    expect(statsGrid).toHaveClass('grid-cols-1');
    expect(statsGrid).toHaveClass('sm:grid-cols-2');
    expect(statsGrid).toHaveClass('lg:grid-cols-4');
  });

  it('renders stat items with correct structure', () => {
    render(<Impact />);

    const statItems = screen.getAllByRole('definition');
    expect(statItems).toHaveLength(4);

    statItems.forEach(item => {
      expect(item).toHaveClass('order-first');
      expect(item).toHaveClass('text-3xl');
      expect(item).toHaveClass('font-semibold');
      expect(item).toHaveClass('tracking-tight');
      expect(item).toHaveClass('text-white');
    });
  });
});
