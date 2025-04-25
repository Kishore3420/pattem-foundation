import type { Meta, StoryObj } from '@storybook/react';
import List from './List';

const meta: Meta<typeof List> = {
  title: 'Components/Typography/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['ordered', 'unordered'],
    },
    style: {
      control: 'select',
      options: ['decimal', 'lower-alpha', 'upper-roman', 'disc', 'circle', 'square'],
    },
    variant: {
      control: 'select',
      options: ['default', 'inline', 'stacked'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

const sampleItems = ['First item', 'Second item', 'Third item', 'Fourth item'];

export const OrderedList: Story = {
  args: {
    type: 'ordered',
    items: sampleItems,
  },
};

export const UnorderedList: Story = {
  args: {
    type: 'unordered',
    items: sampleItems,
  },
};

export const LowerAlpha: Story = {
  args: {
    type: 'ordered',
    style: 'lower-alpha',
    items: sampleItems,
  },
};

export const UpperRoman: Story = {
  args: {
    type: 'ordered',
    style: 'upper-roman',
    items: sampleItems,
  },
};

export const Circle: Story = {
  args: {
    type: 'unordered',
    style: 'circle',
    items: sampleItems,
  },
};

export const Square: Story = {
  args: {
    type: 'unordered',
    style: 'square',
    items: sampleItems,
  },
};

export const Inline: Story = {
  args: {
    type: 'unordered',
    variant: 'inline',
    items: sampleItems,
  },
};

export const Stacked: Story = {
  args: {
    type: 'ordered',
    variant: 'stacked',
    items: sampleItems,
  },
};
