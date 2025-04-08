import React from 'react';
import { Typography, Box } from '@mui/material';

const Counter = ({ endingNumber, numberProps, titleProps, suffix, title, ...props }) => {
  return (
    <Box a="Counter" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...props }}>
      <Typography sx={numberProps}>
        {endingNumber}
        {suffix}
      </Typography>

      {title && <Typography sx={{ ...titleProps }}>{title}</Typography>}
    </Box>
  );
};

export default Counter;
