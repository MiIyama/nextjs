// Importações necessárias
import React from 'react';
import { CustomThemeProvider } from '@/library/components/tokens/ThemeProvider';
import Box from '@mui/material/Box';

const viewports = [
  { label: 'xs', width: 360 },
  { label: 'sm', width: 600 },
  { label: 'md', width: 960 },
  { label: 'lg', width: 1280 },
  { label: 'xl', width: 1920 },
];

const withDualThemes = (Story, context) => {
  const viewMode = context.globals.viewMode || 'single';
  const mode = context.globals.themeMode || 'light';

  if (viewMode === 'dual') {
    return (
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
        <CustomThemeProvider mode="light">
          <Box
            sx={{
              backgroundColor: 'background.default',
              color: 'text.primary',
            }}
          >
            <Story />
          </Box>
        </CustomThemeProvider>

        <CustomThemeProvider mode="dark">
          <Box
            sx={{
              backgroundColor: 'background.default',
              color: 'text.primary',
            }}
          >
            <Story />
          </Box>
        </CustomThemeProvider>
      </Box>
    );
  }

  if (viewMode === 'responsive') {
    return (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {viewports.map(({ label, width }) => (
          <Box
            key={label}
            sx={{
              border: '1px solid #ccc',
              borderRadius: 1,
              padding: 2,
              marginBottom: 2,
              width: `${width}px`,
              overflow: 'hidden',
            }}
          >
            <Box sx={{ fontWeight: 'bold', marginBottom: 1 }}>{`${label.toUpperCase()} (${width}px)`}</Box>
            <CustomThemeProvider mode={mode}>
              <Story />
            </CustomThemeProvider>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <CustomThemeProvider mode={mode}>
      <Story />
    </CustomThemeProvider>
  );
};

export const decorators = [withDualThemes];

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
  viewMode: {
    name: 'View Mode',
    description: 'Toggle between single, dual, and responsive view modes',
    defaultValue: 'single',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'single', title: 'Single Theme' },
        { value: 'dual', title: 'Dual Theme' },
        { value: 'responsive', title: 'Responsive View' },
      ],
      showName: true,
    },
  },
};

export const tags = ['autodocs'];
