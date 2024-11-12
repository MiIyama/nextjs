import React from 'react';
import Section from '@/library/components/atoms/Section';
import ContentBlock from '../molecules/ContentBlock';

const Hero = ({ content }) => {
  return (
    <Section>
      <ContentBlock content={content} />
    </Section>
  );
};

export default Hero;
