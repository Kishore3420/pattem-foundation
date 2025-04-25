import type { Meta, StoryObj } from '@storybook/react';
import Blockquote from './Blockquote';

const meta: Meta<typeof Blockquote> = {
  title: 'Components/Typography/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'icon'],
    },
    background: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {
    children: 'This is a default blockquote with a left border.',
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: 'This blockquote has borders on both sides.',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'icon',
    children: 'This blockquote includes a decorative quotation mark icon.',
  },
};

export const WithBackground: Story = {
  args: {
    background: true,
    children: 'This blockquote has a subtle background color for emphasis.',
  },
};

export const Combined: Story = {
  args: {
    variant: 'icon',
    background: true,
    children: 'This blockquote combines multiple styles: icon variant with a background.',
  },
};
