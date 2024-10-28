import React from 'react';
import { Grid } from '@mui/material';

const TwoColumnLayout = ({
  leftContent,
  rightContent,
  leftProportion = 4, // Default: 50%
  rightProportion = 8, // Default: 50%
  spacing = 2,
  leftSx = {}, // `sx` específico para a coluna da esquerda
  rightSx = {},
  sx = {}, // `sx` específico para a coluna da direita
}) => {
  return (
    <Grid container spacing={spacing} sx={{ ...sx }}>
      <Grid
        xs={12}
        item
        md={leftProportion}
        sx={{
          // border: '1px red solid',
          ...leftSx,
        }}
      >
        {leftContent}
      </Grid>
      <Grid
        xs={12}
        item
        md={rightProportion}
        sx={{
          // border: '1px blue solid',
          ...rightSx,
        }}
      >
        {rightContent}
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
