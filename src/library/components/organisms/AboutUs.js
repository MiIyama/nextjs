import React from 'react';
import PropTypes from 'prop-types';
import Section from '@/library/components/atoms/Section';
import ColumnLayout from '@/library/layout/ColumnLayout';
import ContentBlock from '../molecules/ContentBlock';

const AboutUs = ({ content }) => {
  const { rightContent, leftContent, footerContent } = content;

  const renderContentBlock = (contentBlock) => (
    <ContentBlock
      content={{
        ...contentBlock,
        title: { ...contentBlock.title, typography: 'display-sm-medium', component: 'h3' },
        subtitle: { ...contentBlock.subtitle, typography: 'text-md-regular' },
      }}
    />
  );

  return (
    <Section>
      <ContentBlock
        content={{
          ...content,
          title: { ...content.title, typography: 'display-lg-medium', component: 'h2' },
        }}
      />

      <ColumnLayout content={[renderContentBlock(leftContent), renderContentBlock(rightContent)]} spacing={1} />

      <ContentBlock
        content={{
          ...footerContent,
          title: { ...footerContent.title, typography: 'display-xs-medium', component: 'h3' },
        }}
      />
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
