import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ title, ...props }) => {
  return (
    <Typography variant="h4" {...props}>
      {/* conferir se o variant está correto */}
      {title}
    </Typography>
  );
};

export default Heading;
