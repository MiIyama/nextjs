import React from 'react';
import { Typography, Box } from '@mui/material';

const Counter = ({ endingNumber, suffix, title, ...props }) => {
  const toCamelCase = (str) => str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

  const isTitleProp = (key) => key.startsWith('title');
  const isNumberProp = (key) => key.startsWith('number');

  const cleanProps = (obj) =>
    Object.keys(obj)
      .filter((key) => !key.startsWith('_')) // Remove propriedades que começam com "_"
      .reduce((newObj, key) => ({ ...newObj, [key]: obj[key] }), {});

  const processProps = (obj, prefix) =>
    cleanProps(
      Object.keys(obj)
        .filter((key) => key.startsWith(prefix))
        .reduce((acc, key) => {
          const newKey = key.replace(new RegExp(`^${prefix}_?`), '');
          const camelKey = toCamelCase(newKey.charAt(0).toLowerCase() + newKey.slice(1));

          let value = obj[key];

          // 🔹 Aplicar conversão apenas para letterSpacing
          if (camelKey === 'letterSpacing' && typeof value === 'object' && value.size !== undefined) {
            value = value.size;
          }

          return { ...acc, [camelKey]: value };
        }, {})
    );

  const titleProps = processProps(props, 'title');
  const numberProps = processProps(props, 'number');

  const boxProps = cleanProps(
    Object.keys(props)
      .filter((key) => !isTitleProp(key) && !isNumberProp(key))
      .reduce((obj, key) => {
        const camelKey = toCamelCase(key);
        return { ...obj, [camelKey]: props[key] };
      }, {})
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...boxProps }}>
      <Typography sx={numberProps}>
        {endingNumber}
        {suffix}
      </Typography>

      {title && <Typography sx={titleProps}>{title}</Typography>}
    </Box>
  );
};

export default Counter;
