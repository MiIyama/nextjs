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
  const dualView = context.globals.dualView || false;
  const mode = context.globals.themeMode || 'light';

  return dualView ? (
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
        </Box>{' '}
      </CustomThemeProvider>
    </Box>
  ) : (
    <CustomThemeProvider mode={mode}>
      <Story />
    </CustomThemeProvider>
  );
};

const withResponsiveSizes = (Story, context) => {
  const mode = context.globals.themeMode || 'light';

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
};

export const decorators = [withDualThemes, withResponsiveSizes];

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
  dualView: {
    name: 'Dual View',
    description: 'Toggle between single and dual theme view',
    defaultValue: false,
    toolbar: {
      icon: 'mirror',
      items: [
        { value: false, title: 'Single' },
        { value: true, title: 'Dual' },
      ],
      showName: true,
    },
  },
};

export const tags = ['autodocs'];
