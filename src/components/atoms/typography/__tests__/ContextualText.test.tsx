import React from 'react';
import { render, screen } from '@testing-library/react';
import { HighlightedText, PriceText, LegalText, TextDivider } from '../ContextualText';

describe('ContextualText Components', () => {
  describe('HighlightedText', () => {
    it('renders with default styles', () => {
      render(<HighlightedText>Test text</HighlightedText>);
      const element = screen.getByText('Test text');
      expect(element).toHaveClass(
        'bg-yellow-100',
        'text-yellow-800',
        'px-2',
        'py-1',
        'rounded-md',
        'font-medium'
      );
    });

    it('applies custom className', () => {
      render(<HighlightedText className="custom-class">Test text</HighlightedText>);
      const element = screen.getByText('Test text');
      expect(element).toHaveClass('custom-class');
    });
  });

  describe('PriceText', () => {
    it('renders with default styles', () => {
      render(<PriceText amount={1234.56} />);
      const element = screen.getByText('₹1,234.56');
      expect(element).toHaveClass('font-semibold', 'text-gray-900', 'text-base');
    });

    it('renders with different sizes', () => {
      render(<PriceText amount={1234.56} size="lg" />);
      const element = screen.getByText('₹1,234.56');
      expect(element).toHaveClass('text-lg');
    });

    it('applies custom className', () => {
      render(<PriceText amount={1234.56} className="custom-class" />);
      const element = screen.getByText('₹1,234.56');
      expect(element).toHaveClass('custom-class');
    });
  });

  describe('LegalText', () => {
    it('renders with default styles', () => {
      render(<LegalText>Test text</LegalText>);
      const element = screen.getByText('Test text');
      expect(element).toHaveClass('text-sm', 'p-3', 'rounded-md', 'text-blue-600', 'bg-blue-50');
    });

    it('renders with warning variant', () => {
      render(<LegalText variant="warning">Test text</LegalText>);
      const element = screen.getByText('Test text');
      expect(element).toHaveClass('text-amber-600', 'bg-amber-50');
    });

    it('renders with success variant', () => {
      render(<LegalText variant="success">Test text</LegalText>);
      const element = screen.getByText('Test text');
      expect(element).toHaveClass('text-green-600', 'bg-green-50');
    });

    it('applies custom className', () => {
      render(<LegalText className="custom-class">Test text</LegalText>);
      const element = screen.getByText('Test text');
      expect(element).toHaveClass('custom-class');
    });
  });

  describe('TextDivider', () => {
    it('renders with default styles', () => {
      render(<TextDivider text="Test" />);
      const element = screen.getByText('Test');
      expect(element).toHaveClass('mx-4', 'text-sm', 'text-gray-500');
      expect(element.parentElement).toHaveClass('flex', 'items-center');
    });

    it('applies custom className', () => {
      render(<TextDivider text="Test" className="custom-class" />);
      const element = screen.getByText('Test').parentElement;
      expect(element).toHaveClass('custom-class');
    });
  });
});
