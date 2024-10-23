import { Chip, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Button from '@/library/components/atoms/Button';
import Section from '@/library/components/atoms/Section';
import Subtitle from '@/library/components/atoms/Subtitle';
import Title from '@/library/components/atoms/Title';
import TwoColumnLayout from '@/library/layout/TwoColumnLayout';

interface Element {
  text?: string;
  color?: string;
  variant?: string;
  sx?: object;
  gutterBottom?: boolean;
  items?: Array<{ label: string; variant: string; endIcon?: React.ReactNode }>;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  typography?: string;
  ss;
}

interface Content {
  title: Element;
  subtitle: Element;
  rightContent: { [key: string]: Element };
  leftContent: { [key: string]: Element };
}

interface AboutUsProps {
  content: Content;
}

const AboutUs: React.FC<AboutUsProps> = ({ content }) => {
  const { title, subtitle, rightContent, leftContent } = content;

  const renderElement = (key: string, element: Element) => {
    switch (key) {
      case 'headerSlot':
        return element && <Chip label={element.text} color={element.color as 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'} variant={element.variant as 'filled' | 'outlined'} sx={element.sx} />;
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
          element?.items &&
          element.items.length > 0 && (
            <Stack direction="row" spacing={2} sx={element.sx}>
              {element.items.map((button, idx) => (
                <Button key={idx} variant={button.variant} endIcon={button.endIcon}>
                  {button.label}
                </Button>
              ))}
              ss
            </Stack>
          )
        );
      case 'image':
        if (element && element.src && element.alt) {
          return <Image src={element.src as string} width={element.width} height={element.height} alt={element.alt as string} />;
        }
        return null;
      default:
        return null;
    }
  };
  const renderColumnContent = (contentColumn: { [key: string]: Element }) => (
    <Stack>
      {Object.keys(contentColumn).map((key) => {
        const element = contentColumn[key];
        return element ? renderElement(key, element) : null;
      })}
    </Stack>
  );

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
      <TwoColumnLayout leftContent={leftColumn} rightContent={rightColumn} leftProportion={5} rightProportion={7} spacing={3} sx={{ mt: '32px' }} />
    </Section>
  );
};

export default AboutUs;
