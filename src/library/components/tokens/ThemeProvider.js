/* eslint-disable import/prefer-default-export */
import React, { useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createCustomTheme } from '@/library/components/tokens/theme';

export const CustomThemeProvider = ({ mode, children }) => {
  const theme = useMemo(() => createCustomTheme(mode), [mode]);
  // eslint-disable-next-line no-console
  console.log(theme);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
