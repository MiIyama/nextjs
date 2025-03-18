import React from 'react';
import { Typography } from '@mui/material';

const Text = ({ editor, ...props }) => {
  return (
    <Typography variant="body1" {...props}>
      {editor}
    </Typography>
  );
};

export default Text;
