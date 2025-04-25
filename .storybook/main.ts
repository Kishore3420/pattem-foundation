import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../src/components/atoms/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/molecules/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/organisms/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/templates/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/pages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      });
    }
    return config;
  },
};

export default config;
