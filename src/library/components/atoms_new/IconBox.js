/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const IconBox = ({ titleProps, descriptionProps, iconProps, rotate, ...props }) => {
  return (
    <Box a="IconBox" sx={{ border: props.borderBorder, ...props, borderWidth: `${props.borderWidth}px` }}>
      {iconProps.icon && (
        <Box sx={{ rotate: `${rotate}`, ...iconProps }}>
          <Image alt="IconBox" src={iconProps.icon.value.url} width={100} height={100} />
        </Box>
      )}

      {titleProps.text && (
        <Typography component={titleProps.size || 'h3'} sx={titleProps}>
          {titleProps.text}
        </Typography>
      )}

      {descriptionProps.text && <Typography sx={descriptionProps}>{descriptionProps.text}</Typography>}
    </Box>
  );
};

export default IconBox;
