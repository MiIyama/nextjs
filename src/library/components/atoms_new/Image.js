import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const ImageComponent = ({ image, size, width, height, objectFit, ...props }) => {
  // console.log('width', width);
  // console.log('image', Object.keys(props).length, '\n', props);
  // console.log('width.size', width.size);

  // console.log('📌 Props recebidas:', props || 'Nenhuma propriedade recebida');

  // console.log('📌 Props recebidas:', JSON.stringify(props, null, 2));
  // console.log('📌 Todas as props separadas:', { src, alt, width, height, size, objectFit });
  // if (!image) return null;
  return (
    <Box a="ImageComponent" sx={{ maxHeight: 100, overflow: 'hidden' }}>
      {/* props acima - divider */}
      <Image src={image} alt="ImageComponent" width={width.size || 50} height={50} layout={size === 'full' ? 'responsive' : 'intrinsic'} {...props} />{' '}
    </Box>
  );

  // return (
  //   <Box sx={{ position: 'relative', width, height }}>
  //     <Image src={src} alt={alt} layout={size === 'full' ? 'responsive' : 'intrinsic'} width={size === 'full' ? undefined : width} height={size === 'full' ? undefined : height} objectFit={objectFit} {...props} />
  //   </Box>
  // );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  objectFit: PropTypes.string,
};

export default ImageComponent;
