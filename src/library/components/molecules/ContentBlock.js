import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from '@/library/components/atoms/Subtitle';
import Title from '@/library/components/atoms/Title';
import { Stack, Chip } from '@mui/material';
import Button from '@/library/components/atoms/Button';
import Image from 'next/image';

const ContentBlock = ({ content }) => {
  const {
    layout: { direction, justifyContent, alignItems },
  } = content;

  const renderElement = (key, element) => {
    switch (key) {
      case 'headerSlot':
        return element && <Chip key={key} label={element.text} color={element.color} variant={element.variant} sx={element.sx} />;
      case 'title':
        return (
          element && (
            <Title key={key} typography={element.typography} gutterBottom={element.gutterBottom} sx={element.sx} component="h1">
              {element.text}
            </Title>
          )
        );
      case 'subtitle':
        return (
          element && (
            <Subtitle key={key} typography={element.typography} gutterBottom={element.gutterBottom} sx={element.sx}>
              {element.text}
            </Subtitle>
          )
        );
      case 'buttons':
        return (
          element?.items?.length > 0 && (
            <Stack key={key} direction="row" spacing={2} sx={element.sx}>
              {element.items.map((button, idx) => (
                <Button key={idx} variant={button.variant} endIcon={button.endIcon}>
                  {button.label}
                </Button>
              ))}
            </Stack>
          )
        );
      case 'image':
        return element && <Image key={key} src={element.src} width={element.width} height={element.height} alt={element.alt} />;
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
      {Object.keys(content).map((key) => renderElement(key, content[key]))}
    </Stack>
  );
};

ContentBlock.propTypes = {
  content: PropTypes.shape({
    layout: PropTypes.shape({
      direction: PropTypes.string.isRequired,
      justifyContent: PropTypes.string.isRequired,
      alignItems: PropTypes.string.isRequired,
    }).isRequired,
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
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ContentBlock;
