import type { Meta, StoryObj } from '@storybook/react';
import { HighlightedText, PriceText, LegalText, TextDivider } from './ContextualText';

const meta: Meta<typeof HighlightedText> = {
  title: 'Components/Typography/ContextualText',
  component: HighlightedText,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['warning', 'info', 'success'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HighlightedText>;

// HighlightedText Stories
export const HighlightedTextVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <HighlightedText variant="warning">This is a warning message</HighlightedText>
      <HighlightedText variant="info">This is an informational message</HighlightedText>
      <HighlightedText variant="success">This is a success message</HighlightedText>
    </div>
  ),
};

// PriceText Stories
export const PriceTextVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <PriceText amount={99.99} variant="default" />
      <PriceText amount={79.99} variant="discounted" />
      <PriceText amount={199.99} variant="large" />
    </div>
  ),
};

export const PriceWithCurrency: Story = {
  render: () => (
    <div className="space-y-4">
      <PriceText amount={99.99} currency="€" />
      <PriceText amount={79.99} currency="£" />
      <PriceText amount={199.99} currency="¥" />
    </div>
  ),
};

// LegalText Stories
export const LegalTextVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <LegalText variant="copyright">© 2024 Pattem Foundation. All rights reserved.</LegalText>
      <LegalText variant="terms">Terms and Conditions</LegalText>
      <LegalText variant="fine-print">
        * Prices may vary based on location and availability.
      </LegalText>
    </div>
  ),
};

// TextDivider Stories
export const TextDividerVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <TextDivider variant="or" />
      <TextDivider variant="section" text="Or continue with email" />
      <TextDivider variant="section" text="Additional options" />
    </div>
  ),
};

// Combined Examples
export const ProductCard: Story = {
  render: () => (
    <div className="p-4 border rounded-lg space-y-4">
      <h3 className="text-lg font-semibold">Premium Plan</h3>
      <div className="space-y-2">
        <PriceText amount={99.99} variant="large" />
        <PriceText amount={79.99} variant="discounted" />
      </div>
      <HighlightedText variant="success">Save 20% with annual billing</HighlightedText>
      <TextDivider variant="section" text="Or choose monthly" />
      <LegalText variant="fine-print">* Prices include all applicable taxes</LegalText>
    </div>
  ),
};

export const FormSection: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Sign Up</h2>
      <HighlightedText variant="info">All fields marked with * are required</HighlightedText>
      <TextDivider variant="or" />
      <LegalText variant="terms">By signing up, you agree to our Terms of Service</LegalText>
    </div>
  ),
};
