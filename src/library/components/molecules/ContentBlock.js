import React from 'react';
import Subtitle from '@/library/components/atoms/Subtitle';
import Title from '@/library/components/atoms/Title';
import { Stack, Chip } from '@mui/material';
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
    { key: 'headerSlot', element: headerSlot && <Chip label={headerSlot.text} color={headerSlot.color} variant={headerSlot.variant} sx={headerSlot.sx} /> },
    {
      key: 'title',
      element: title && (
        <Title key="title" typography={title.typography} gutterBottom={title.gutterBottom} sx={title.sx}>
          {title.text}
        </Title>
      ),
    },
    {
      key: 'subtitle',
      element: subtitle && (
        <Subtitle key="subtitle" typography={subtitle.typography} gutterBottom={subtitle.gutterBottom} sx={subtitle.sx}>
          {subtitle.text}
        </Subtitle>
      ),
    },
    {
      key: 'buttons',
      element: buttons?.items?.length > 0 && (
        <Stack key="buttons" direction="row" spacing={2} sx={buttons.sx}>
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
      element: image && <Image key="img" src={image.src} width={image.width} height={image.height} alt={image.alt} />,
    },
  ];

  return (
    <>
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
        {Object.keys(content).map((key) => elements.find((element) => element.key === key)?.element)}
      </Stack>
    </>
  );
};

// ContentBlock.propTypes = {
//   content: PropTypes.shape({
//     layout: PropTypes.shape({
//       direction: PropTypes.oneOf(['column', 'row']).isRequired,
//       justifyContent: PropTypes.oneOf(['center', 'flex-start', 'flex-end']).isRequired,
//       alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end']).isRequired,
//     }).isRequired,
//     headerSlot: PropTypes.node,
//     title: PropTypes.shape({
//       text: PropTypes.string.isRequired,
//       typography: PropTypes.string,
//       gutterBottom: PropTypes.bool,
//       sx: PropTypes.object,
//     }),
//     subtitle: PropTypes.string,
//     buttons: PropTypes.shape({
//       items: PropTypes.arrayOf(
//         PropTypes.shape({
//           label: PropTypes.string.isRequired,
//           variant: PropTypes.string,
//           color: PropTypes.string,
//         })
//       ),
//     }),
//     image: PropTypes.shape({
//       src: PropTypes.string.isRequired,
//       width: PropTypes.number.isRequired,
//       height: PropTypes.number.isRequired,
//       alt: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
// };

// ContentBlock.defaultProps = {
//   sx: { my: '32px' },
// };

export default ContentBlock;
