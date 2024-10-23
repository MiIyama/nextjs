import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from '@/library/components/atoms/Subtitle';
import Title from '@/library/components/atoms/Title';
import { Chip, Stack } from '@mui/material';
import Button from '@/library/components/atoms/Button';
import Image from 'next/image';
import TwoColumnLayout from '@/library/layout/TwoColumnLayout';
import Section from '@/library/components/atoms/Section';

const AboutUs = ({ content }) => {
  const { title, subtitle, rightContent, leftContent } = content;

  const renderElement = (key, element) => {
    switch (key) {
      case 'headerSlot':
        return element && <Chip label={element.text} color={element.color} variant={element.variant} sx={element.sx} />;
      case 'title':
        return (
          element && (
            <Title typography="display-sm-medium" gutterBottom={element.gutterBottom} component="h3" sx={element.sx}>
              {element.text}
            </Title>
          )
        );
      case 'subtitle':
        return (
          element && (
            <Subtitle typography="text-md-regular" gutterBottom={element.gutterBottom} sx={element.sx}>
              {element.text}
            </Subtitle>
          )
        );
      case 'buttons':
        return (
          element?.items?.length > 0 && (
            <Stack direction="row" spacing={2} sx={element.sx}>
              {element.items.map((button, idx) => (
                <Button key={idx} variant={button.variant} endIcon={button.endIcon}>
                  {button.label}
                </Button>
              ))}
            </Stack>
          )
        );
      case 'image':
        return element && <Image src={element.src} width={element.width} height={element.height} alt={element.alt} />;
      default:
        return null;
    }
  };

  const renderColumnContent = (contentColumn) => <Stack>{Object.keys(contentColumn).map((key) => renderElement(key, contentColumn[key]))}</Stack>;

  const rightColumn = renderColumnContent(rightContent);
  const leftColumn = renderColumnContent(leftContent);

  return (
    <Section>
      <Stack>
        {title && (
          <Title typography="display-lg-medium" gutterBottom={title.gutterBottom} sx={title.sx}>
            {title.text}
          </Title>
        )}
        {subtitle && (
          <Subtitle typography={subtitle.typography} gutterBottom={subtitle.gutterBottom} sx={subtitle.sx}>
            {subtitle.text}
          </Subtitle>
        )}
      </Stack>
      <TwoColumnLayout leftContent={leftColumn} rightContent={rightColumn} spacing={3} sx={{ mt: '32px' }} />
    </Section>
  );
};

AboutUs.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.shape({
      text: PropTypes.string.isRequired,
      gutterBottom: PropTypes.bool,
      sx: PropTypes.object,
    }),
    subtitle: PropTypes.shape({
      text: PropTypes.string.isRequired,
      typography: PropTypes.string,
      gutterBottom: PropTypes.bool,
      sx: PropTypes.object,
    }),
    rightContent: PropTypes.object.isRequired,
    leftContent: PropTypes.object.isRequired,
  }).isRequired,
};

export default AboutUs;
