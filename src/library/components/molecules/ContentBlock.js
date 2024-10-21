import PropTypes from 'prop-types';
import React from 'react';
import Subtitle from '@/library/components/atoms/Subtitle';
import Title from '@/library/components/atoms/Title';
import { Stack, Box } from '@mui/material';
import Button from '@/library/components/atoms/Button';
import Image from 'next/image';

const ContentBlock = ({ content }) => {
  const {
    layout: { direction, justifyContent, alignItems },
    headerSlot,
    title,
    subtitle,
    buttons,
    image,
  } = content;

  const elements = [
    { key: 'headerSlot', element: headerSlot && <Box>{headerSlot}</Box> },
    { key: 'title', element: title && <Title>{title}</Title> },
    { key: 'subtitle', element: subtitle && <Subtitle>{subtitle}</Subtitle> },
    {
      key: 'buttons',
      element: buttons?.items?.length > 0 && (
        <Stack direction="row" spacing={2}>
          {buttons.items.map((button, idx) => (
            <Button key={idx} variant={button.variant} endIcon={button.endIcon}>
              {button.label}
            </Button>
          ))}
        </Stack>
      ),
    },
    {
      key: 'image',
      element: image && (
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      ),
    },
  ];

  return (
    <>
      <Box
        sx={{
          border: '1px solid black',
        }}
      >
        <Box
          sx={{
            border: '1px solid red',
            padding: '10px',
            mt: 1,
            mb: 10,
          }}
        >
          Direction: {direction}, Justify: {justifyContent}, Align: {alignItems}
        </Box>

        <Stack
          direction={direction}
          sx={{
            justifyContent,
            alignItems,
            padding: '10px',
            marginBottom: '20px',
            minHeight: '100px',
          }}
        >
          {Object.keys(content).map(
            (key) => elements.find((element) => element.key === key)?.element
          )}
        </Stack>
      </Box>
    </>
  );
};

ContentBlock.propTypes = {
  content: PropTypes.shape({
    layout: PropTypes.shape({
      direction: PropTypes.oneOf(['column', 'row']).isRequired,
      justifyContent: PropTypes.oneOf(['center', 'flex-start', 'flex-end'])
        .isRequired,
      alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end'])
        .isRequired,
    }).isRequired,
    headerSlot: PropTypes.node,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttons: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          variant: PropTypes.string,
          color: PropTypes.string,
        })
      ),
    }),
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

ContentBlock.defaultProps = {
  sx: { my: '32px' },
};

export default ContentBlock;
