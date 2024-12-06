/* eslint-disable import/prefer-default-export */
import React from 'react';
import { TextField, Button, Box, RadioGroup, FormControlLabel, Radio, Slider, Typography } from '@mui/material';

export const renderField = (key, value, { handleInputChange }) => {
  const handleAddItem = () => {
    const updatedArray = [
      ...(value || []),
      value?.length > 0
        ? { ...value[value.length - 1] } // Copia o último item
        : { title: `Novo ${key}`, description: 'Descrição do novo item' }, // Adiciona um item padrão se o array estiver vazio
    ];
    handleInputChange(key, updatedArray);
  };

  const handleRemoveLastItem = () => {
    if (Array.isArray(value) && value.length > 0) {
      const updatedArray = value.slice(0, -1);
      handleInputChange(key, updatedArray);
    }
  };

  const fieldRenderers = {
    array: () => (
      <Box>
        <Typography sx={{ mr: { sm: 3 } }}>{key} (Array):</Typography>
        <Button variant="outlined" onClick={handleAddItem}>
          Adicionar Item
        </Button>
        <Button variant="outlined" color="error" onClick={handleRemoveLastItem} disabled={!value || value.length === 0} sx={{ ml: { sm: 3 } }}>
          Remover Item
        </Button>
      </Box>
    ),
    string: () => (
      <Box>
        <TextField fullWidth multiline label={key} value={value || ''} onChange={(e) => handleInputChange(key, e.target.value)} />
      </Box>
    ),
    number: () => (
      <Box>
        <Typography variant="h6">{key} (Number)</Typography>
        <Slider
          value={value || 0}
          onChange={(e, newValue) => handleInputChange(key, newValue)}
          valueLabelDisplay="auto"
          size="small"
          min={0}
          max={20} // Ajuste os limites conforme necessário
          step={1} // Ajuste o intervalo entre valores conforme necessário
        />
      </Box>
    ),
    boolean: () => (
      <Box>
        <Typography>{key} (Boolean)</Typography>
        <RadioGroup row value={value ? 'true' : 'false'} onChange={(e) => handleInputChange(key, e.target.value === 'true')}>
          <FormControlLabel value="true" control={<Radio />} label="Sim" />
          <FormControlLabel value="false" control={<Radio />} label="Não" />
        </RadioGroup>
      </Box>
    ),
    default: () => (
      <Typography>
        {key} (Tipo não suportado): {value}
      </Typography>
    ),
  };

  const fieldType = Array.isArray(value) ? 'array' : typeof value;
  const render = fieldRenderers[fieldType] || fieldRenderers.default;

  return (
    <Box key={key} sx={{ mb: 2 }}>
      {render()}
    </Box>
  );
};
