/**
 * colors.js
 * Arquivo que contém as configurações de cores personalizadas para o tema.
 */

const customColors = {
  'background-colors-gray-white-bg': {
    light: 'rgb(249, 249, 251)',
    dark: 'rgb(30, 30, 30)',
  },
  'brand-colors-800': {
    light: 'rgb(41, 32, 153)',
    dark: 'rgb(51, 41, 121)',
  },
  'brand-colors-600': {
    light: 'rgb(51, 40, 191)',
    dark: 'rgb(62, 48, 153)',
  },
  'brand-colors-25': {
    light: 'rgb(245, 245, 255)',
    dark: 'rgb(44, 44, 56)',
  },
  'text-colors-950': {
    light: 'rgb(13, 13, 13)',
    dark: 'rgb(250, 250, 250)',
  },
  'text-colors-600': {
    light: 'rgb(97, 97, 97)',
    dark: 'rgb(170, 170, 170)',
  },
  'text-colors-500': {
    light: 'rgb(128, 128, 128)',
    dark: 'rgb(192, 192, 192)',
  },
  'text-colors-200': {
    light: 'rgb(214, 214, 214)',
    dark: 'rgb(220, 220, 220)',
  },
  'text-colors-50': {
    light: 'rgb(250, 250, 250)',
    dark: 'rgb(55, 55, 55)',
  },
  'text-colors-25': {
    light: 'rgb(252, 252, 252)',
    dark: 'rgb(68, 68, 68)',
  },
};

const getDesignTokens = (mode) => {
  const colors = Object.keys(customColors).reduce((acc, key) => {
    acc[key] = customColors[key][mode];
    return acc;
  }, {});

  return {
    customColors: colors,
  };
};

export { customColors, getDesignTokens };
