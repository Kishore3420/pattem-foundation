import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    Story => (
      <div className={`${inter.variable} font-sans`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
