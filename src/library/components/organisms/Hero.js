import React from 'react';
import { Container } from '@mui/material';
import Section from '@/library/components/atoms/Section';
import ContentBlock from '../molecules/ContentBlock';

const Hero = ({ content }) => {
  return (
    <Section>
      <Container>
        <ContentBlock content={content} />
      </Container>
    </Section>
  );
};

export default Hero;
