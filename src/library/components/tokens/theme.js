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
            borderRadius: 2,
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
