import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ text, ...props }) => {
  return (
    <MuiButton variant="contained" {...props}>
      {text}
    </MuiButton>
  );
};

export default Button;
