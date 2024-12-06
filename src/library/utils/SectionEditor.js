import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { renderField } from './fieldRenderers';

const SectionEditor = ({ type, data, onChange }) => {
  const [formData, setFormData] = useState(data);

  const handleInputChange = (key, value) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    onChange(updatedData);
  };

  const renderGroupedFields = (groupKey, groupValue) => {
    return (
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {groupKey}
        </Typography>
        {Object.entries(groupValue).map(([key, value]) => {
          // Verifica se é um objeto ou estrutura de dados aninhada
          if (typeof value === 'object' && !Array.isArray(value)) {
            return renderGroupedFields(key, value);
          }

          // Renderiza campos simples
          return renderField(key, value, {
            handleInputChange: (fieldKey, fieldValue) => {
              const updatedGroup = { ...groupValue, [fieldKey]: fieldValue };
              handleInputChange(groupKey, updatedGroup);
            },
          });
        })}
      </Box>
    );
  };

  return (
    <Accordion sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="form-content" id="form-header">
        <Typography variant="h5">Editar: {type}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {Object.entries(formData).map(([key, value]) => {
            // Verifica se é um objeto ou estrutura aninhada
            if (typeof value === 'object' && !Array.isArray(value)) {
              return renderGroupedFields(key, value);
            }

            // Renderiza campos simples
            return renderField(key, value, { handleInputChange });
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SectionEditor;
