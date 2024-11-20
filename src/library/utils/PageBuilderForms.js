import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { Box, Button, Grid, Typography, TextField, Select, MenuItem, CircularProgress } from '@mui/material';

// Função para carregar um componente dinamicamente do diretório organisms
const loadComponent = (name) => dynamic(() => import(`@/library/components/organisms/${name}`), { ssr: false });

const EditablePageBuilder = ({ initialContent }) => {
  const [pageContent, setPageContent] = useState(initialContent);

  const handleContentChange = (index, updatedProps) => {
    const updatedContent = [...pageContent];
    updatedContent[index].props = updatedProps;
    setPageContent(updatedContent);
  };

  return (
    <Suspense fallback={<CircularProgress />}>
      {pageContent.map(({ type, props }, index) => {
        const Component = loadComponent(type);

        return (
          <Box
            key={`${type}-${index}`}
            sx={{
              border: '2px solid black',
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                border: '1px solid #ddd',
                borderRadius: 2,
                p: 2,
                backgroundColor: 'gray',
              }}
            >
              <SectionEditor type={type} data={props} onChange={(updatedProps) => handleContentChange(index, updatedProps)} />{' '}
            </Box>

            <Box>
              <Component content={props} />
            </Box>
          </Box>
        );
      })}
    </Suspense>
  );
};

const SectionEditor = ({ type, data, onChange }) => {
  const [formData, setFormData] = useState(data);

  const handleInputChange = (key, value) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    onChange(updatedData);
  };

  const handleNestedChange = (key, nestedKey, value) => {
    const updatedNested = { ...formData[key], [nestedKey]: value };
    handleInputChange(key, updatedNested);
  };

  const handleAddItem = (key) => {
    const updatedArray = [...formData[key], { title: `Novo ${key}`, description: 'Descrição do novo item' }];
    handleInputChange(key, updatedArray);
  };

  const renderField = (key, value, handlers) => {
    const { handleInputChange, handleNestedChange, handleAddItem } = handlers;

    const typeRenderers = {
      array: () => (
        <>
          <Typography variant="h6">{key} (Array)</Typography>
          <Box sx={{ mt: 1 }}>
            <Button variant="outlined" onClick={() => handleAddItem(key)}>
              Adicionar Item
            </Button>
          </Box>
        </>
      ),
      object: () => (
        <>
          <Typography variant="h6">{key} (Objeto)</Typography>
          <Grid container spacing={1}>
            {Object.keys(value).map((nestedKey) => (
              <Grid item key={nestedKey} sx={{ width: 1 }}>
                <TextField fullWidth label={nestedKey} value={value[nestedKey]} onChange={(e) => handleNestedChange(key, nestedKey, e.target.value)} />
              </Grid>
            ))}
          </Grid>
        </>
      ),
      string: () => (
        <>
          <Typography variant="h6">{key} (String)</Typography>
          <TextField fullWidth value={value} onChange={(e) => handleInputChange(key, e.target.value)} />
        </>
      ),
      number: () => (
        <>
          <Typography variant="h6">{key} (Number)</Typography>
          <TextField fullWidth value={value} onChange={(e) => handleInputChange(key, e.target.value)} />
        </>
      ),
      boolean: () => (
        <>
          <Typography variant="body1" gutterBottom>
            {key}
          </Typography>
          <Select fullWidth value={value.toString()} onChange={(e) => handleInputChange(key, e.target.value === 'true')}>
            <MenuItem value="true">Sim</MenuItem>
            <MenuItem value="false">Não</MenuItem>
          </Select>
        </>
      ),
      default: () => null,
    };

    const valueType = Array.isArray(value) ? 'array' : typeof value;
    const renderContent = typeRenderers[valueType] || typeRenderers.default;

    return (
      <Grid item xs={12} md={6} sm={6} key={key}>
        {renderContent()}
      </Grid>
    );
  };

  const handlers = { handleInputChange, handleNestedChange, handleAddItem };

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2, bgcolor: 'background-colors-gray-white-bg' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Editar: {type}
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(formData).map((key) => renderField(key, formData[key], handlers))}
      </Grid>
    </Box>
  );
};

export default EditablePageBuilder;
