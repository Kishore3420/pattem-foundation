import type { Meta, StoryObj } from '@storybook/react';
import TextModifiers from './TextModifiers';

const meta: Meta<typeof TextModifiers> = {
  title: 'Components/Typography/TextModifiers',
  component: TextModifiers,
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    transform: {
      control: 'select',
      options: ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
    },
    overflow: {
      control: 'select',
      options: ['truncate', 'break-words', 'break-all', 'no-wrap'],
    },
    lineClamp: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextModifiers>;

const longText = `This is a very long text that will demonstrate various text modifiers and utilities. 
It contains multiple sentences and will be used to show how different text modifications affect the display. 
The text will be truncated, wrapped, or clamped based on the selected modifiers.`;

export const Alignments: Story = {
  render: () => (
    <div className="space-y-4">
      <TextModifiers align="left">
        <p>Left aligned text</p>
      </TextModifiers>
      <TextModifiers align="center">
        <p>Center aligned text</p>
      </TextModifiers>
      <TextModifiers align="right">
        <p>Right aligned text</p>
      </TextModifiers>
      <TextModifiers align="justify">
        <p>
          Justified text that spreads across the full width of the container. This is useful for
          creating clean, aligned paragraphs.
        </p>
      </TextModifiers>
    </div>
  ),
};

export const Transformations: Story = {
  render: () => (
    <div className="space-y-4">
      <TextModifiers transform="uppercase">
        <p>uppercase text</p>
      </TextModifiers>
      <TextModifiers transform="lowercase">
        <p>LOWERCASE TEXT</p>
      </TextModifiers>
      <TextModifiers transform="capitalize">
        <p>capitalize each word</p>
      </TextModifiers>
      <TextModifiers transform="normal-case">
        <p>Normal Case Text</p>
      </TextModifiers>
    </div>
  ),
};

export const OverflowHandling: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="w-64">
        <TextModifiers overflow="truncate">
          <p>{longText}</p>
        </TextModifiers>
      </div>
      <div className="w-64">
        <TextModifiers overflow="break-words">
          <p>{longText}</p>
        </TextModifiers>
      </div>
      <div className="w-64">
        <TextModifiers overflow="break-all">
          <p>{longText}</p>
        </TextModifiers>
      </div>
      <div className="w-64">
        <TextModifiers overflow="no-wrap">
          <p>{longText}</p>
        </TextModifiers>
      </div>
    </div>
  ),
};

export const LineClamping: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="w-64">
        <TextModifiers lineClamp={1}>
          <p>{longText}</p>
        </TextModifiers>
      </div>
      <div className="w-64">
        <TextModifiers lineClamp={2}>
          <p>{longText}</p>
        </TextModifiers>
      </div>
      <div className="w-64">
        <TextModifiers lineClamp={3}>
          <p>{longText}</p>
        </TextModifiers>
      </div>
    </div>
  ),
};

export const CombinedModifiers: Story = {
  render: () => (
    <div className="space-y-4">
      <TextModifiers align="center" transform="uppercase" lineClamp={2}>
        <p>{longText}</p>
      </TextModifiers>
      <TextModifiers align="justify" transform="capitalize" overflow="break-words">
        <p>{longText}</p>
      </TextModifiers>
    </div>
  ),
};
