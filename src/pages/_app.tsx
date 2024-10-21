import { FormControlLabel, Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { PaletteMode } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import * as React from 'react';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#3328BF' : '#4D42FF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          variants: [],
        },
        outlined: {
          backgroundColor: '#FCFCFC',
          borderColor: '#D6D6D6',
          color: '#0D0D0D',
          '&:hover': {
            backgroundColor: '#f0f0f0',
            borderColor: '#c0c0c0',
          },
        },
      },
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // eslint-disable-next-line no-console
  console.log(theme);
  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControlLabel
        control={
          <Switch checked={mode === 'dark'} onChange={handleThemeChange} />
        }
        label="Dark Mode"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
