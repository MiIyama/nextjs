/* eslint-disable import/prefer-default-export */
import { createTheme } from '@mui/material/styles';
import { getDesignTokens as getCustomDesignTokens } from '@/library/components/tokens/colors';
import typographyVariants from '@/library/components/tokens/typography';

export const createCustomTheme = (mode) => {
  const { customColors } = getCustomDesignTokens(mode);

  return createTheme({
    palette: {
      mode,
      primary: {
        main: customColors['brand-colors-600'],
      },
      text: {
        icon: mode === 'light' ? 'rgba(0, 0, 0, 0.38)' : 'rgba(255, 255, 255, 0.5)',
      },
      custom: { ...customColors },
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
  });
};
