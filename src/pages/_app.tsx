import { FormControlLabel, Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { PaletteMode } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import * as React from 'react';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          variants: [],
        },
      },
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

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
