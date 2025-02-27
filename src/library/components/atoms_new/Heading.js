import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ text, ...props }) => {
  return (
    <Typography variant="h4" {...props}>
      {/* conferir se o variant está correto */}
      {text}
    </Typography>
  );
};

export default Heading;
