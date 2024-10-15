import Container from '@mui/material/Container';
import React from 'react';
import Subtitle from '@/library/components/atoms/Subtitle';
import Title from '@/library/components/atoms/Title';

const Hero = ({ title, subtitle }) => {
  return (
    <Container>
      <Title text={title} />
      <Subtitle text={subtitle} />
    </Container>
  );
};

export default Hero;
