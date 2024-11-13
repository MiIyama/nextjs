import React from 'react';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

const ColumnLayout = ({ content = [], spacing = 2, proportions = [], sx = {}, columnSx = {} }) => {
  const columns = Math.min(content.length, 3);

  let adjustedProportions = proportions;

  if (proportions.length > columns) {
    console.warn(`O comprimento do array de proporções (${proportions.length}) excede o número de colunas (${columns}). Ajustando para corresponder ao número de colunas.`);
    adjustedProportions = proportions.slice(0, columns);
  }

  return (
    <Grid container spacing={spacing} sx={{ ...sx }}>
      {content.map((item, index) => (
        <Grid key={index} item xs={12} md={adjustedProportions[index] || Math.floor(12 / columns)} sx={{ ...columnSx }}>
          {item}
        </Grid>
      ))}
    </Grid>
  );
};

ColumnLayout.propTypes = {
  /**
   * Lista de React nodes
   */
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  /**
   * Espaçamento entre colunas
   */
  spacing: PropTypes.number,
  /**
   * Proporções para cada coluna (1 a 12)
   */
  proportions: PropTypes.arrayOf(PropTypes.number),
  /**
   * Estilo global do container
   */
  sx: PropTypes.object,
  /**
   * Estilo individual para cada coluna
   */
  columnSx: PropTypes.object,
};

export default ColumnLayout;
