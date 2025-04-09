import React from 'react';
import { Box } from '@mui/material';
import pageData from '@/content/pageData';
import SectionBuilder from '../library/components/organisms_new/SectionBuilder';
// import pageData from 'src/content/frame-1.json';

const CONTENT_LIMIT = 3; // Altere esse valor para definir quantas sections serão montadas

const Page = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {pageData.slice(0, CONTENT_LIMIT).map((sectionData, index) => (
        <SectionBuilder key={index} data={sectionData} />
      ))}
    </Box>
  );
};

export default Page;
