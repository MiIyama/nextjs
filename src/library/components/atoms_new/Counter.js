import React from 'react';
import { Typography, Box } from '@mui/material';

const Counter = ({ endingNumber, suffix, title, ...props }) => {
  const isTitleProp = (key) => key.toLowerCase().includes('title_');
  const isNumberProp = (key) => key.toLowerCase().includes('number_');

  const titleProps = Object.keys(props)
    .filter((key) => isTitleProp(key))
    .reduce((obj, key) => ({ ...obj, [key.replace(/^typography_title_/, '').toLowerCase()]: props[key] }), {});

  const numberProps = Object.keys(props)
    .filter((key) => isNumberProp(key))
    .reduce((obj, key) => ({ ...obj, [key.replace(/^typography_number_/, '').toLowerCase()]: props[key] }), {});

  const boxProps = Object.keys(props)
    .filter((key) => !isTitleProp(key) && !isNumberProp(key))
    .reduce((obj, key) => ({ ...obj, [key]: props[key] }), {});

  const convertToCssProps = (cssProps) => {
    return {
      color: cssProps.color,
      fontFamily: cssProps.font_family,
      fontSize: cssProps.font_size ? `${cssProps.font_size.size}px` : undefined,
      fontWeight: cssProps.font_weight,
      textTransform: cssProps.text_transform,
      textDecoration: cssProps.text_decoration,
      lineHeight: cssProps.line_height ? `${cssProps.line_height.size}em` : undefined,
      letterSpacing: cssProps.letter_spacing ? `${cssProps.letter_spacing.size}em` : undefined,
      padding: cssProps.padding,
      width: cssProps.element_width ? `${cssProps.element_width}%` : undefined,
      zIndex: cssProps.z_index,
    };
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...boxProps }}>
      <Typography sx={convertToCssProps(numberProps)}>
        {endingNumber}
        {suffix}
      </Typography>
      {title && <Typography sx={convertToCssProps(titleProps)}>{title}</Typography>}
    </Box>
  );
};

export default Counter;
