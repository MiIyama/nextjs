/* eslint-disable prettier/prettier */

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
  xxxxl: 36,
  xxxxxl: 48,
  xxxxxxl: 60,
  xxxxxxxl: 72,
};


export const paragraphSpacings = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
  xxxxl: 36,
  xxxxxl: 48,
  xxxxxxl: 60,
  xxxxxxxl: 72,
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const createTypographyVariant = ({ size, weight='regular', style = 'normal', decoration = 'none' }) => ({
  fontSize: fontSizes[size],
  paragraphSpacing: paragraphSpacings[size],
  fontWeight: fontWeights[weight],
  fontStyle: style,
  textDecoration: decoration,
});

const typographyConfig = [
  { key: 'text-xs-bold', size: 'xs', weight: 'bold' },
  { key: 'text-xs-semibold', size: 'xs', weight: 'semibold' },
  { key: 'text-xs-medium', size: 'xs', weight: 'medium' },
  { key: 'text-xs-regular', size: 'xs' },

  { key: 'text-sm-semibold-underlined', size: 'sm', weight: 'semibold', decoration: 'underline' },
  { key: 'text-sm-medium-underlined', size: 'sm', weight: 'medium', decoration: 'underline' },
  { key: 'text-sm-regular-underlined', size: 'sm',  decoration: 'underline' },
  { key: 'text-sm-bold', size: 'sm', weight: 'bold' },
  { key: 'text-sm-semibold', size: 'sm', weight: 'semibold' },
  { key: 'text-sm-medium', size: 'sm', weight: 'medium' },
  { key: 'text-sm-regular', size: 'sm' },

  { key: 'text-md-semibold-underlined', size: 'md', weight: 'semibold', decoration: 'underline' },
  { key: 'text-md-medium-underlined', size: 'md', weight: 'medium', decoration: 'underline' },
  { key: 'text-md-regular-underlined', size: 'md',  decoration: 'underline' },
  { key: 'text-md-bold-italic', size: 'md', weight: 'bold', style: 'italic' },
  { key: 'text-md-semibold-italic', size: 'md', weight: 'semibold', style: 'italic' },
  { key: 'text-md-medium-italic', size: 'md', weight: 'medium', style: 'italic' },
  { key: 'text-md-regular-italic', size: 'md',  style: 'italic' },
  { key: 'text-md-bold', size: 'md', weight: 'bold' },
  { key: 'text-md-semibold', size: 'md', weight: 'semibold' },
  { key: 'text-md-medium', size: 'md', weight: 'medium' },
  { key: 'text-md-regular', size: 'md' },

  { key: 'text-lg-semibold-underlined', size: 'lg', weight: 'semibold', decoration: 'underline' },
  { key: 'text-lg-medium-underlined', size: 'lg', weight: 'medium', decoration: 'underline' },
  { key: 'text-lg-regular-underlined', size: 'lg',  decoration: 'underline' },
  { key: 'text-lg-bold-italic', size: 'lg', weight: 'bold', style: 'italic' },
  { key: 'text-lg-semibold-italic', size: 'lg', weight: 'semibold', style: 'italic' },
  { key: 'text-lg-medium-italic', size: 'lg', weight: 'medium', style: 'italic' },
  { key: 'text-lg-regular-italic', size: 'lg',  style: 'italic' },
  { key: 'text-lg-bold', size: 'lg', weight: 'bold' },
  { key: 'text-lg-semibold', size: 'lg', weight: 'semibold' },
  { key: 'text-lg-medium', size: 'lg', weight: 'medium' },
  { key: 'text-lg-regular', size: 'lg' },

  { key: 'text-xl-regular-underlined', size: 'xl',  decoration: 'underline' },
  { key: 'text-xl-bold-italic', size: 'xl', weight: 'bold', style: 'italic' },
  { key: 'text-xl-semibold-italic', size: 'xl', weight: 'semibold', style: 'italic' },
  { key: 'text-xl-medium-italic', size: 'xl', weight: 'medium', style: 'italic' },
  { key: 'text-xl-regular-italic', size: 'xl',  style: 'italic' },
  { key: 'text-xl-bold', size: 'xl', weight: 'bold' },
  { key: 'text-xl-semibold', size: 'xl', weight: 'semibold' },
  { key: 'text-xl-medium', size: 'xl', weight: 'medium' },
  { key: 'text-xl-regular', size: 'xl' },

  { key: 'display-xs-medium-italic', size: 'xxl', weight: 'medium', style: 'italic' },
  { key: 'display-xs-bold', size: 'xxl', weight: 'bold' },
  { key: 'display-xs-semibold', size: 'xxl', weight: 'semibold' },
  { key: 'display-xs-medium', size: 'xxl', weight: 'medium' },
  { key: 'display-xs-regular', size: 'xxl' },

  { key: 'display-sm-medium-italic', size: 'xxxl', weight: 'medium', style: 'italic' },
  { key: 'display-sm-bold', size: 'xxxl', weight: 'bold' },
  { key: 'display-sm-semibold', size: 'xxxl', weight: 'semibold' },
  { key: 'display-sm-medium', size: 'xxxl', weight: 'medium' },
  { key: 'display-sm-regular', size: 'xxxl' },

  { key: 'display-md-bold', size: 'xxxxl', weight: 'bold' },
  { key: 'display-md-semibold', size: 'xxxxl', weight: 'semibold' },
  { key: 'display-md-medium', size: 'xxxxl', weight: 'medium' },
  { key: 'display-md-regular', size: 'xxxxl' },

  { key: 'display-lg-bold', size: 'xxxxxl', weight: 'bold' },
  { key: 'display-lg-semibold', size: 'xxxxxl', weight: 'semibold' },
  { key: 'display-lg-medium', size: 'xxxxxl', weight: 'medium' },
  { key: 'display-lg-regular', size: 'xxxxxl' },

  { key: 'display-xl-bold', size: 'xxxxxxl', weight: 'bold' },
  { key: 'display-xl-semibold', size: 'xxxxxxl', weight: 'semibold' },
  { key: 'display-xl-medium', size: 'xxxxxxl', weight: 'medium' },
  { key: 'display-xl-regular', size: 'xxxxxxl' },

  { key: 'display-2xl-bold', size: 'xxxxxxxl', weight: 'bold' },
  { key: 'display-2xl-semibold', size: 'xxxxxxxl', weight: 'semibold' },
  { key: 'display-2xl-medium', size: 'xxxxxxxl', weight: 'medium' },
  { key: 'display-2xl-regular', size: 'xxxxxxxl' },
];

const typographyVariants = typographyConfig.reduce((acc, { key, ...props }) => {
  acc[key] = createTypographyVariant(props);
  return acc;
}, {});

export default typographyVariants;
