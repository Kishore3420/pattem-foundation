import type { Meta, StoryObj } from '@storybook/react';
import { Link, CopyableText, TextWithIcon } from './InteractiveText';

const meta: Meta<typeof Link> = {
  title: 'Components/Typography/InteractiveText',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'underline', 'bold', 'icon'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// Link Stories
export const DefaultLink: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const UnderlinedLink: Story = {
  args: {
    href: '#',
    variant: 'underline',
    children: 'Underlined Link',
  },
};

export const BoldLink: Story = {
  args: {
    href: '#',
    variant: 'bold',
    children: 'Bold Link',
  },
};

export const ColoredLinks: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" color="primary">
        Primary Link
      </Link>
      <Link href="#" color="secondary">
        Secondary Link
      </Link>
      <Link href="#" color="danger">
        Danger Link
      </Link>
    </div>
  ),
};

export const LinkWithIcon: Story = {
  args: {
    href: '#',
    variant: 'icon',
    icon: '→',
    children: 'Link with Icon',
  },
};

// CopyableText Stories
export const CopyableTextExample: Story = {
  render: () => (
    <CopyableText text="This is copyable text">
      <span>Click to copy this text</span>
    </CopyableText>
  ),
};

export const CopyableCode: Story = {
  render: () => (
    <CopyableText text="npm install @pattem-foundation/ui">
      <code className="px-2 py-1 bg-gray-100 rounded">npm install @pattem-foundation/ui</code>
    </CopyableText>
  ),
};

// TextWithIcon Stories
export const TextWithLeftIcon: Story = {
  render: () => (
    <TextWithIcon icon="📝" iconPosition="left">
      Edit this text
    </TextWithIcon>
  ),
};

export const TextWithRightIcon: Story = {
  render: () => (
    <TextWithIcon icon="🔔" iconPosition="right">
      New notification
    </TextWithIcon>
  ),
};

export const InteractiveExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" variant="icon" icon="📚" iconPosition="left">
        Documentation
      </Link>
      <CopyableText text="https://example.com">
        <Link href="https://example.com" variant="underline">
          https://example.com
        </Link>
      </CopyableText>
      <TextWithIcon icon="⭐" iconPosition="right">
        <Link href="#" variant="bold">
          Star this project
        </Link>
      </TextWithIcon>
    </div>
  ),
};
