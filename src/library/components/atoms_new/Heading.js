import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ title, ...props }) => {
  return (
    <Typography a="Heading" variant="h4" sx={{ ...props }}>
      {/* conferir se o variant está correto */}
      {title}
    </Typography>
  );
};

export default Heading;
