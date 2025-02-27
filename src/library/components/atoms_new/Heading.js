import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ text, ...props }) => {
  return (
    <Typography variant="h4" {...props}>
      {text}
    </Typography>
  );
};

export default Heading;
