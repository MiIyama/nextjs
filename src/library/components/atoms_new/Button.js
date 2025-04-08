import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ text, link, ...props }) => {
  return (
    <MuiButton a="Button" href={link} variant="contained" sx={{ ...props }}>
      {text}
    </MuiButton>
  );
};

export default Button;
