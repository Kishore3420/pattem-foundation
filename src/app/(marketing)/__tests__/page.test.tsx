import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock the components used in the page
jest.mock('@/components/templates/layout/Header', () => ({
  Header: () => <div data-testid="mock-header">Header Component</div>,
}));

jest.mock('@/components/templates/layout/Footer', () => ({
  Footer: () => <div data-testid="mock-footer">Footer Component</div>,
}));

jest.mock('@/components/templates/sections/Banner', () => ({
  Banner: () => <div data-testid="mock-banner">Banner Component</div>,
}));

jest.mock('@/components/templates/sections/Causes', () => ({
  Causes: () => <div data-testid="mock-causes">Causes Component</div>,
}));

jest.mock('@/components/templates/sections/Impact', () => ({
  Impact: () => <div data-testid="mock-impact">Impact Component</div>,
}));

describe('Marketing Home Page', () => {
  it('renders all sections in correct order', () => {
    render(<Home />);

    const sections = screen.getAllByTestId(/^mock-/);
    expect(sections).toHaveLength(5);
    expect(sections[0]).toHaveTextContent('Header Component');
    expect(sections[1]).toHaveTextContent('Banner Component');
    expect(sections[2]).toHaveTextContent('Causes Component');
    expect(sections[3]).toHaveTextContent('Impact Component');
    expect(sections[4]).toHaveTextContent('Footer Component');
  });

  it('renders with correct layout structure', () => {
    render(<Home />);

    const container = screen.getByTestId('mock-header').parentElement;
    expect(container).toHaveClass('min-h-screen');

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();

    // Check components are rendered in the correct containers
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(main).toContainElement(screen.getByTestId('mock-banner'));
    expect(main).toContainElement(screen.getByTestId('mock-causes'));
    expect(main).toContainElement(screen.getByTestId('mock-impact'));
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });
});
