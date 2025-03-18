import React from 'react';
import { Box } from '@mui/material';
import pageData from '@/content/pageData';
import SectionBuilder from '../library/components/organisms_new/SectionBuilder';

const Page = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '1px solid red' }}>
      {pageData.map((sectionData, index) => (
        <SectionBuilder key={index} data={sectionData} />
      ))}
    </Box>
  );
};

export default Page;
