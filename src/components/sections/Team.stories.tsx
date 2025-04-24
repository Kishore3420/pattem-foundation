import type { Meta, StoryObj } from '@storybook/react';
import Team from './Team';
import { mockTeam } from '@/mocks/data';

const meta: Meta<typeof Team> = {
  title: 'Sections/Team',
  component: Team,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Team>;

export const Default: Story = {
  args: {
    people: mockTeam,
  },
};
