import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Section from '@/library/components/atoms/Section';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContentBlock from '@/library/components/molecules/ContentBlock';

const contentBlocks = [
  {
    id: 1,
    title: 'Identify Core Features',
    description: 'This is the second feature.',
  },
  {
    id: 2,
    title: 'Feature 2',
    description: 'This is the second feature.',
  },
  {
    id: 3,
    title: 'Identify Core Features',
    description: 'This is the second feature.',
  },
  {
    id: 4,
    title: 'Feature 2',
    description: 'This is the second feature.',
  },
];

const MySlider = () => {
  return (
    <Section>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        style={{ width: '100%', height: '400px' }}
      >
        {contentBlocks.map((contentBlock) => {
          const title = contentBlock.title || 'nada';
          const description = contentBlock.description || 'nada';
          return (
            <SwiperSlide key={contentBlock.id}>
              <ContentBlock
                content={{
                  title,
                  description,
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mt: 2,
        }}
      >
        <IconButton
          className="swiper-button-prev-custom"
          sx={{
            bgcolor: 'white',
            color: 'brand-colors-600',
            border: '2px solid red',
            borderColor: 'brand-colors-600',

            '&:hover': {
              transform: 'scale(1.2)',
            },
          }}
        >
          <ArrowBackIosIcon
            sx={{
              pl: '7.87px',
            }}
          />
        </IconButton>
        <IconButton
          className="swiper-button-next-custom"
          sx={{
            color: 'white',
            bgcolor: 'brand-colors-600',
            '&:hover': {
              bgcolor: 'brand-colors-600',

              transform: 'scale(1.2)',
            },
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              pl: '5px',
              pr: '3px',
            }}
          />
        </IconButton>
      </Box>
    </Section>
  );
};

export default MySlider;
