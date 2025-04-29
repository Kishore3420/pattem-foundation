import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'pre', 'code'],
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'danger',
        'warning',
        'info',
        'neutral',
        'light',
        'white',
      ],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
    },
    style: {
      control: 'select',
      options: ['italic', 'underline', 'strikethrough'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Headings
export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
  },
};

export const H4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
};

export const H5: Story = {
  args: {
    as: 'h5',
    children: 'Heading 5',
  },
};

export const H6: Story = {
  args: {
    as: 'h6',
    children: 'Heading 6',
  },
};

// Body Text
export const Paragraph: Story = {
  args: {
    as: 'p',
    children:
      'This is a paragraph of text. It can be styled with different weights, colors, and alignments.',
  },
};

export const Span: Story = {
  args: {
    as: 'span',
    children: 'This is inline text that can be used within other elements.',
  },
};

export const Preformatted: Story = {
  args: {
    as: 'pre',
    children: `This is preformatted text
    It preserves whitespace and line breaks
    Useful for code blocks or ASCII art`,
  },
};

export const Code: Story = {
  args: {
    as: 'code',
    children: 'const greeting = "Hello, World!";',
  },
};

// Variations
export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography weight="light">Light weight text</Typography>
      <Typography weight="regular">Regular weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography color="primary">Primary text</Typography>
      <Typography color="secondary">Secondary text</Typography>
      <Typography color="tertiary">Tertiary text</Typography>
      <Typography color="danger">Danger text</Typography>
      <Typography color="warning">Warning text</Typography>
      <Typography color="info">Info text</Typography>
      <Typography color="neutral">Neutral text</Typography>
      <Typography color="light">Light text</Typography>
      <Typography color="white" className="bg-neutral p-2">
        White text
      </Typography>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
      <Typography align="justify">
        Justified text that spreads across the full width of the container. This is useful for
        creating clean, aligned paragraphs.
      </Typography>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography size="small">Small text (12-14px)</Typography>
      <Typography size="regular">Regular text (16px)</Typography>
      <Typography size="large">Large text (18px)</Typography>
    </div>
  ),
};

export const Styles: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography style="italic">Italic text</Typography>
      <Typography style="underline">Underlined text</Typography>
      <Typography style="strikethrough">Strikethrough text</Typography>
    </div>
  ),
};

// Combined Examples
export const CombinedStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography as="h2" weight="bold" color="primary" align="center" style="underline">
        Combined Styles Example
      </Typography>
      <Typography as="p" weight="regular" color="secondary" align="justify" size="large">
        This is a paragraph with multiple style combinations. It demonstrates how different
        typography properties can be combined to create unique text styles.
      </Typography>
    </div>
  ),
};
