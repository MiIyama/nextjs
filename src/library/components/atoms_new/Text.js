import React from 'react';
import { Typography } from '@mui/material';

const Text = ({ text, ...props }) => {
  return (
    <Typography variant="body1" {...props}>
      {text}
    </Typography>
  );
};

export default Text;
