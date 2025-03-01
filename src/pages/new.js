import React from 'react';
import { Box } from '@mui/material';
import pageData from '@/content/pageData';
import SectionBuilder from '../library/components/organisms_new/SectionBuilder';

const Page = () => {
  return (
    <Box>
      {pageData.map((sectionData, index) => (
        <Box componente="SectionBuilderWrapper" key={index} sx={{ width: '100%', p: '20px', border: '5px solid black' }}>
          <SectionBuilder data={sectionData} />
        </Box>
      ))}
    </Box>
  );
};

export default Page;
