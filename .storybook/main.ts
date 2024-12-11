import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-onboarding','@storybook/addon-docs', '@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions'],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  staticDirs: ['../public'],

  docs: {},

  typescript: {
    reactDocgen: false, // Desativa a tentativa de gerar documentação com react-docgen
  },
};
export default config;
