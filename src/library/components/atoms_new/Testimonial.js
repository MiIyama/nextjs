import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Testimonial = ({ content, contentProps, nameProps, jobProps, name, job, imageProps, image, ...props }) => {
  return (
    <Box a="Testimonial" sx={{ ...props }}>
      {content && <Typography sx={{ ...contentProps }}>{content}</Typography>}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
        {image && <Image src={image} alt="Testimonial" width={imageProps.customDimension.width || 54} height={imageProps.customDimension.height || 54} style={{ borderRadius: 60, marginRight: 8 }} />}
        <Box>
          {name && <Typography sx={nameProps}>{name}</Typography>}
          {job && <Typography sx={jobProps}>{job}</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
