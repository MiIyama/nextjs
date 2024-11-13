// ServicesItem.jsx
import Image from 'next/image';
import React from 'react';
import Subtitle from '@/library/components/atoms/Subtitle';
import Title from '@/library/components/atoms/Title';
import { Stack, Chip, Box } from '@mui/material';
import Button from '@/library/components/atoms/Button';

const ServicesItem = ({ config = {}, content = {} }) => {
  const { variant = 'default', centerText = false, imgOnSeparateLine = false } = config;
  console.log('-------------');
  const renderItem = (key, item) => {
    switch (key) {
      case 'headerSlot':
        return <Chip key={key} label={item.text} color={item.color} variant={item.variant} sx={item.sx} />;
      case 'title':
        return (
          <Title key={key} typography="display-xs-medium" sx={item.sx}>
            {item.text}
          </Title>
        );
      case 'subtitle':
        return (
          <Subtitle key={key} typography="text-md-regular" gutterBottom={item.gutterBottom} sx={item.sx}>
            {item.text}
          </Subtitle>
        );
      case 'buttons':
        return (
          <Stack key={key} direction="row" spacing={2} sx={item.sx}>
            {item.items.map((button, idx) => (
              <Button key={idx} variant={button.variant} endIcon={button.endIcon}>
                {button.label}
              </Button>
            ))}
          </Stack>
        );

      default:
        return null;
    }
  };

  const boxStyles = {
    default: {
      border: `1px solid`,
      borderColor: 'text-colors-200',
      height: '100%',
      padding: 2,
    },
    highlighted: {
      backgroundColor: 'brand-colors-25',
      padding: 2,
    },
    simple: {
      border: 'none',
    },
  };

  return (
    <Box
      sx={{
        ...boxStyles[variant],
        display: 'flex',
        flexDirection: imgOnSeparateLine ? 'column' : 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 3,
        height: '100%',
      }}
    >
      <Box
        sx={{
          width: 1,
          display: 'flex',
          flexDirection: imgOnSeparateLine ? 'column' : 'row',
        }}
      >
        <Box
          sx={{
            ml: imgOnSeparateLine ? 0 : 1,
            mt: imgOnSeparateLine ? 1 : 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: centerText ? 'center' : 'flex-start',
          }}
        >
          {content.items &&
            content.items.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  ml: imgOnSeparateLine ? 0 : 1,
                  mt: imgOnSeparateLine ? 1 : 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: centerText ? 'center' : 'flex-start',
                }}
              >
                {item.image && (
                  <Box
                    key={`image-${idx}`}
                    sx={{
                      position: 'relative',
                      width: '256px',
                      height: '250px',
                      overflow: 'hidden',
                      borderRadius: 3,
                    }}
                  >
                    aaaa
                    <Image src={item.image.src} alt={item.image.alt} fill style={{ objectFit: 'cover' }} />
                  </Box>
                )}
                {Object.keys(item).map((key) => renderItem(key, item[key]))}
              </Box>
            ))}
          {Object.keys(content || {}).map((key) => renderItem(key, content[key]))}
        </Box>
      </Box>
    </Box>
  );
};
export default ServicesItem;

/* 
{console.log('----', Object.keys(content.image))}
{Object.keys(content || {}).map((key) => {
  console.log(key, content[key]);
  return renderItem(key, content[key]);
})} 
*/
