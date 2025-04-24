import type { Meta, StoryObj } from '@storybook/react';
import { Causes } from './Causes';
import { mockCauses } from '@/mocks/data';

const meta: Meta<typeof Causes> = {
  title: 'Sections/Causes',
  component: Causes,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Causes>;

export const Default: Story = {
  args: {
    causes: mockCauses,
  },
};
