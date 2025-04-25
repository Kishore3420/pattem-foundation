import type { Meta, StoryObj } from '@storybook/react';
import DefinitionList from './DefinitionList';

const meta: Meta<typeof DefinitionList> = {
  title: 'Components/Typography/DefinitionList',
  component: DefinitionList,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['inline', 'stacked'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DefinitionList>;

const sampleItems = [
  {
    term: 'HTML',
    description: 'HyperText Markup Language, the standard language for creating web pages.',
  },
  {
    term: 'CSS',
    description: 'Cascading Style Sheets, used for styling and layout of web pages.',
  },
  {
    term: 'JavaScript',
    description: 'A programming language that enables interactive web pages.',
  },
  {
    term: 'React',
    description: 'A JavaScript library for building user interfaces.',
  },
];

export const Stacked: Story = {
  args: {
    items: sampleItems,
    variant: 'stacked',
  },
};

export const Inline: Story = {
  args: {
    items: sampleItems,
    variant: 'inline',
  },
};

export const TechnicalTerms: Story = {
  args: {
    items: [
      {
        term: 'API',
        description:
          'Application Programming Interface, a set of rules that allows programs to talk to each other.',
      },
      {
        term: 'REST',
        description:
          'Representational State Transfer, an architectural style for designing networked applications.',
      },
      {
        term: 'GraphQL',
        description:
          'A query language for APIs and a runtime for executing those queries with your existing data.',
      },
    ],
    variant: 'stacked',
  },
};

export const ProductFeatures: Story = {
  args: {
    items: [
      {
        term: 'Responsive Design',
        description: 'Adapts to different screen sizes and devices.',
      },
      {
        term: 'Accessibility',
        description: 'Ensures the application is usable by people with disabilities.',
      },
      {
        term: 'Performance',
        description: 'Optimized for fast loading and smooth user experience.',
      },
    ],
    variant: 'inline',
  },
};
