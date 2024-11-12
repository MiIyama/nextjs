import React from 'react';
import { CustomThemeProvider } from '@/library/components/tokens/ThemeProvider';

export const ThemeDecorator = (getStory, context) => {
  const mode = context.globals.themeMode || 'light';
  return (
    <CustomThemeProvider mode={mode}>
      {getStory()}
    </CustomThemeProvider>
  );
};