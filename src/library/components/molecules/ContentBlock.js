import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from '@/library/components/atoms/Subtitle';
import Title from '@/library/components/atoms/Title';
import { Stack, Chip, Box } from '@mui/material';
import Button from '@/library/components/atoms/Button';
import Image from 'next/image';

const ContentBlock = ({ content }) => {
  const direction = content?.layout?.direction || 'column';
  const justifyContent = content?.layout?.justifyContent || 'center';
  const alignItems = content?.layout?.alignItems || 'flex-start';

  const renderItem = (key, item) => {
    switch (key) {
      case 'headerSlot':
        return item && <Chip key={key} label={item.text} color={item.color} variant={item.variant} sx={item.sx} />;
      case 'title':
        return (
          item && (
            <Title key={key} typography={item.typography} gutterBottom={item.gutterBottom} sx={item.sx} component={item.component}>
              {item.text}
            </Title>
          )
        );
      case 'subtitle':
        return (
          item && (
            <Subtitle key={key} typography={item.typography} gutterBottom={item.gutterBottom} sx={item.sx}>
              {item.text}
            </Subtitle>
          )
        );
      case 'buttons':
        return (
          item?.items?.length > 0 && (
            <Stack key={key} direction="row" spacing={2} sx={item.sx}>
              {item?.items?.map((button, idx) => (
                <Button key={idx} variant={button.variant} endIcon={button.endIcon}>
                  {button.label}
                </Button>
              ))}
            </Stack>
          )
        );
      case 'image': {
        const fullWidth = item?.fullWidth || false;
        const fullWidthStyles = fullWidth
          ? {
              width: {
                xs: '100vw',
                lg: '100%',
              },
              transform: {
                xs: 'translateX(-16px)',
                sm: 'translateX(-24px)',
                md: 'translateX(-24px)',
                lg: 'translateX(0)',
              },
            }
          : {
              width: '100%',
            };
        return (
          item && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: item.height,
                overflow: 'hidden',
                ...fullWidthStyles,
              }}
            >
              <Image
                key={key}
                src={item.src}
                alt={item.alt}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </Box>
          )
        );
      }
      default:
        return null;
    }
  };

  return (
    <Stack
      direction={direction}
      sx={{
        justifyContent,
        alignItems,
        padding: '0',
        marginBottom: '20px',
        minHeight: '100px',
      }}
    >
      {Object.keys(content).map((key) => renderItem(key, content[key]))}
    </Stack>
  );
};

ContentBlock.propTypes = {
  content: PropTypes.shape({
    layout: PropTypes.shape({
      direction: PropTypes.string.isRequired,
      justifyContent: PropTypes.string.isRequired,
      alignItems: PropTypes.string.isRequired,
    }),
    headerSlot: PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.string,
      variant: PropTypes.string,
      sx: PropTypes.object,
    }),
    title: PropTypes.shape({
      text: PropTypes.string,
      typography: PropTypes.string,
      gutterBottom: PropTypes.bool,
      sx: PropTypes.object,
    }),
    subtitle: PropTypes.shape({
      text: PropTypes.string,
      typography: PropTypes.string,
      gutterBottom: PropTypes.bool,
      sx: PropTypes.object,
    }),
    buttons: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          variant: PropTypes.string,
          endIcon: PropTypes.bool,
        })
      ),
      sx: PropTypes.object,
    }),
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
      fullWidth: PropTypes.bool,
    }),
  }).isRequired,
};

export default ContentBlock;
