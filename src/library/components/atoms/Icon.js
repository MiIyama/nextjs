import React from 'react';
import { Box } from '@mui/material';

const Icon = ({ icon: IconComponent, border, background, size = 40, iconColor = 'white', borderColor = border ? 'gray' : 'none', bgcolor = background ? 'brand-colors-800' : 'none', sx, ...props }) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        border: `2px solid ${borderColor}`,
        bgcolor,
        borderRadius: 3,
        ...sx,
      }}
      {...props}
    >
      <IconComponent style={{ fontSize: size * 0.6, color: iconColor }} />
    </Box>
  );
};

export default Icon;
