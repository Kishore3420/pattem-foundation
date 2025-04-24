import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock the components used in the page
jest.mock('@/components/sections/Banner', () => ({
  Banner: () => <div data-testid="mock-banner">Banner Component</div>,
}));

jest.mock('@/components/sections/Causes', () => ({
  Causes: () => <div data-testid="mock-causes">Causes Component</div>,
}));

jest.mock('@/components/sections/Team', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-team">Team Component</div>,
}));

jest.mock('@/components/sections/Footer', () => ({
  Footer: () => <div data-testid="mock-footer">Footer Component</div>,
}));

describe('Home Page', () => {
  it('renders all sections in correct order', () => {
    render(<Home />);

    const main = screen.getByRole('main');
    expect(main).toHaveClass('min-h-screen');

    const sections = screen.getAllByTestId(/^mock-/);
    expect(sections).toHaveLength(4);
    expect(sections[0]).toHaveTextContent('Banner Component');
    expect(sections[1]).toHaveTextContent('Causes Component');
    expect(sections[2]).toHaveTextContent('Team Component');
    expect(sections[3]).toHaveTextContent('Footer Component');
  });

  it('renders with correct layout structure', () => {
    render(<Home />);

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('min-h-screen');

    expect(screen.getByTestId('mock-banner')).toBeInTheDocument();
    expect(screen.getByTestId('mock-causes')).toBeInTheDocument();
    expect(screen.getByTestId('mock-team')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });
});
