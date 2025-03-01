import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

// 🔧 Função para garantir que todas as propriedades estejam em camelCase
const ensureCamelCase = (key) => key.replace(/^_/, '').replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const IconBox = ({ titleText, descriptionText, titleSize, selectedIcon, iconSize, ...props }) => {
  // 🔹 Dicionário para categorização das props (todas em camelCase)
  const propCategories = {
    card: ['padding', 'paddingTablet', 'paddingMobile', 'elementWidth', 'elementCustomWidth', 'elementWidthMobile', 'elementCustomWidthMobile', 'borderBorder', 'borderWidth', 'borderColor', 'borderRadius', 'zIndex', 'title'],
    description: ['descriptionText', 'descriptionColor', 'descriptionTypography', 'descriptionFontFamily', 'descriptionFontStyle', 'descriptionFontSize', 'descriptionFontSizeTablet', 'descriptionFontSizeMobile', 'descriptionFontWeight', 'descriptionTextTransform', 'descriptionTextDecoration', 'descriptionLineHeight', 'descriptionLineHeightTablet', 'descriptionLineHeightMobile', 'descriptionLetterSpacing'],
    icon: ['selectedIcon', 'primaryColor', 'iconSize', 'rotate', 'iconSpace', 'iconAlign', 'iconIndent'],
    text: ['titleText', 'titleColor', 'titleTypography', 'titleFontFamily', 'titleFontStyle', 'titleFontSize', 'titleFontSizeTablet', 'titleFontSizeMobile', 'titleFontWeight', 'titleTextTransform', 'titleTextDecoration', 'titleLineHeight', 'titleLineHeightTablet', 'titleLineHeightMobile', 'titleLetterSpacing', 'textAlign', 'titleSize', 'titleBottomSpace'],
  };

  // 🔹 Função para filtrar as props por categoria e garantir camelCase
  const filterProps = (propsToFilter, category) => {
    return Object.keys(propsToFilter)
      .map(ensureCamelCase) // Garante que todas as chaves estão em camelCase
      .filter((key) => propCategories[category].includes(key))
      .reduce((acc, key) => ({ ...acc, [key]: propsToFilter[key] }), {});
  };

  const cardProps = filterProps(props, 'card');
  const iconProps = filterProps(props, 'icon');
  const textProps = filterProps(props, 'text');
  const descriptionProps = filterProps(props, 'description');

  return (
    <Box sx={cardProps}>
      {/* Ícone */}
      {selectedIcon && (
        <Box sx={iconProps}>
          <Image src={selectedIcon} alt={titleText || 'icon'} width={iconSize?.size || 100} height={iconSize?.size || 100} />
        </Box>
      )}

      {/* Texto (Título) */}
      {titleText && (
        <Typography component={titleSize || 'h3'} sx={textProps}>
          {titleText}
        </Typography>
      )}

      {/* Descrição */}
      {descriptionText && <Typography sx={descriptionProps}>{descriptionText}</Typography>}
    </Box>
  );
};

export default IconBox;
