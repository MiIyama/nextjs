import { FormControlLabel, Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { PaletteMode } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import * as React from 'react';

import { getDesignTokens as getCustomDesignTokens } from '@/library/components/tokens/colors';
import typographyVariants from '@/library/components/tokens/typography';

const getDesignTokens = (mode: PaletteMode) => {
  const { customColors } = getCustomDesignTokens(mode);

  return {
    palette: {
      mode,
      primary: {
        main: customColors['brand-colors-600'],
      },
      ...customColors,
    },
    typography: {
      ...typographyVariants,
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            variants: [],
          },
          outlined: {
            backgroundColor: customColors['background-colors-gray-white-bg'],
            borderColor: customColors['text-colors-200'],
            color: customColors['text-colors-950'],
            '&:hover': {
              backgroundColor: customColors['text-colors-50'],
              borderColor: customColors['text-colors-500'],
            },
          },
        },
      },
    },
  };
};

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
      <FormControlLabel control={<Switch checked={mode === 'dark'} onChange={handleThemeChange} />} label="Dark Mode" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
