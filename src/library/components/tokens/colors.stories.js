import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PaletteStory = () => {
  const theme = useTheme();
  const { palette } = theme;

  const renderColorBlock = (name, value) => (
    <Box
      key={name}
      sx={{
        width: 1,
        height: 100,
        backgroundColor: value,
        color: theme.palette.getContrastText(value),
        display: 'flex',
        borderRadius: 1,
        paddingX: 1,
        border: '1px solid',
        borderColor: 'text-colors-950',
      }}
    >
      <Typography variant="body2">
        <h3>
          {name}:<br />
        </h3>
        {value}
      </Typography>
    </Box>
  );

  const renderPalette = (paletteObj) => {
    return Object.entries(paletteObj).map(([key, value]) => {
      if (key === 'mode') {
        return null; // Ignorar a chave 'mode'
      }
      if (typeof value === 'object') {
        // Render subpaletas como primary, secondary, etc.
        return (
          <Box key={key} sx={{ marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>
              {key}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {Object.entries(value)
                .filter(([, colorValue]) => typeof colorValue === 'string')
                .map(([subKey, subValue]) => renderColorBlock(`${key}.${subKey}`, subValue))}
            </Box>
          </Box>
        );
      }
      if (typeof value === 'string') {
        // Render cores diretas (como "divider" ou "background-colors-gray-white-bg")
        return renderColorBlock(key, value);
      }
      return null;
    });
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Paleta de Cores
      </Typography>
      {renderPalette(palette)}
    </Box>
  );
};

const paletteStoryConfig = {
  title: 'Tokens/Palette',
  component: PaletteStory,
};

export default paletteStoryConfig;

export const Default = () => <PaletteStory />;
