import React from 'react';
import { CustomThemeProvider } from '@/library/components/tokens/ThemeProvider';

export const decorators = [
  (Story, context) => {
    const mode = context.globals.themeMode || 'light';
    return (
      <CustomThemeProvider mode={mode}>
        <Story />
      </CustomThemeProvider>
    );
  },
];

export const globalTypes = {
  themeMode: {
    name: 'Theme Mode',
    description: 'Global theme mode for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};