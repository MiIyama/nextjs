import React from 'react';
import { Typography } from '@mui/material';

const Text = ({ editor, ...props }) => {
  return (
    <Typography a="Text" variant="body1" sx={{ ...props }}>
      {editor}
    </Typography>
  );
};

export default Text;
