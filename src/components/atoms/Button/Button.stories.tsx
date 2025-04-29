import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FiMail, FiArrowRight, FiTrash, FiPlus, FiAlertTriangle, FiInfo } from 'react-icons/fi';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'danger',
        'warning',
        'info',
        'outline',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['square', 'rounded', 'pill', 'circle'],
    },
    isLoading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    isIconOnly: {
      control: 'boolean',
    },
    isToggle: {
      control: 'boolean',
    },
    isActive: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic Variants
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
    leftIcon: FiTrash,
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
    leftIcon: FiAlertTriangle,
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
    leftIcon: FiInfo,
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large Button',
    size: 'xl',
  },
};

// Shapes
export const Square: Story = {
  args: {
    children: 'Square Button',
    shape: 'square',
  },
};

export const Rounded: Story = {
  args: {
    children: 'Rounded Button',
    shape: 'rounded',
  },
};

export const Pill: Story = {
  args: {
    children: 'Pill Button',
    shape: 'pill',
  },
};

export const Circle: Story = {
  args: {
    children: <FiPlus />,
    shape: 'circle',
    isIconOnly: true,
  },
};

// Icon Variations
export const WithLeftIcon: Story = {
  args: {
    children: 'Send Email',
    leftIcon: FiMail,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Continue',
    rightIcon: FiArrowRight,
  },
};

export const IconOnly: Story = {
  args: {
    children: <FiPlus />,
    isIconOnly: true,
    shape: 'circle',
  },
};

// States
export const Loading: Story = {
  args: {
    children: 'Loading',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

// Toggle Button
export const Toggle: Story = {
  args: {
    children: 'Toggle',
    isToggle: true,
    isActive: false,
  },
};

export const ToggleActive: Story = {
  args: {
    children: 'Toggle',
    isToggle: true,
    isActive: true,
  },
};
