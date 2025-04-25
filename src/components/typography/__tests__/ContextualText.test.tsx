import React from 'react';
import { render, screen } from '@testing-library/react';
import { HighlightedText, PriceText, LegalText, TextDivider } from '../ContextualText';

describe('ContextualText Components', () => {
  describe('HighlightedText', () => {
    it('renders with default variant', () => {
      render(<HighlightedText>Info text</HighlightedText>);
      const element = screen.getByText('Info text');
      expect(element).toHaveClass('bg-blue-100', 'text-blue-800');
    });

    it('renders with warning variant', () => {
      render(<HighlightedText variant="warning">Warning text</HighlightedText>);
      const element = screen.getByText('Warning text');
      expect(element).toHaveClass('bg-yellow-100', 'text-yellow-800');
    });

    it('renders with success variant', () => {
      render(<HighlightedText variant="success">Success text</HighlightedText>);
      const element = screen.getByText('Success text');
      expect(element).toHaveClass('bg-green-100', 'text-green-800');
    });

    it('applies custom className', () => {
      render(<HighlightedText className="custom-class">Custom text</HighlightedText>);
      expect(screen.getByText('Custom text')).toHaveClass('custom-class');
    });
  });

  describe('PriceText', () => {
    it('renders with default variant', () => {
      render(<PriceText amount={1234.56} />);
      const element = screen.getByText('$1,234.56');
      expect(element).toHaveClass('font-mono', 'text-gray-900');
    });

    it('renders with discounted variant', () => {
      render(<PriceText amount={1234.56} variant="discounted" />);
      const element = screen.getByText('$1,234.56');
      expect(element).toHaveClass('text-gray-500', 'line-through');
    });

    it('renders with large variant', () => {
      render(<PriceText amount={1234.56} variant="large" />);
      const element = screen.getByText('$1,234.56');
      expect(element).toHaveClass('text-2xl', 'font-bold');
    });

    it('applies custom className', () => {
      render(<PriceText amount={1234.56} className="custom-class" />);
      expect(screen.getByText('$1,234.56')).toHaveClass('custom-class');
    });
  });

  describe('LegalText', () => {
    it('renders with copyright variant', () => {
      render(<LegalText>Copyright text</LegalText>);
      const element = screen.getByText('Copyright text');
      expect(element).toHaveClass('text-sm', 'text-gray-600');
    });

    it('renders with terms variant', () => {
      render(<LegalText variant="terms">Terms text</LegalText>);
      const element = screen.getByText('Terms text');
      expect(element).toHaveClass('text-sm', 'text-blue-600', 'hover:underline');
    });

    it('renders with fine-print variant', () => {
      render(<LegalText variant="fine-print">Fine print text</LegalText>);
      const element = screen.getByText('Fine print text');
      expect(element).toHaveClass('text-xs', 'text-gray-500');
    });

    it('applies custom className', () => {
      render(<LegalText className="custom-class">Custom text</LegalText>);
      expect(screen.getByText('Custom text')).toHaveClass('custom-class');
    });
  });

  describe('TextDivider', () => {
    it('renders with default variant', () => {
      render(<TextDivider />);
      expect(screen.getByText('OR')).toBeInTheDocument();
      expect(screen.getByText('OR').parentElement).toHaveClass('text-gray-500', 'text-sm');
    });

    it('renders with section variant', () => {
      render(<TextDivider variant="section" />);
      expect(screen.getByText('Continue with')).toBeInTheDocument();
      expect(screen.getByText('Continue with').parentElement).toHaveClass(
        'text-gray-700',
        'font-medium'
      );
    });

    it('renders with custom text', () => {
      render(<TextDivider text="Custom divider" />);
      expect(screen.getByText('Custom divider')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<TextDivider className="custom-class" />);
      expect(screen.getByText('OR').parentElement).toHaveClass('custom-class');
    });
  });
});
