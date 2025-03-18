import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ImageComponent = ({ image, alt = '', size, width, height, objectFit, ...props }) => {
  // console.log('📌 Props recebidas:', props || 'Nenhuma propriedade recebida');

  // console.log('📌 Props recebidas:', JSON.stringify(props, null, 2));
  // console.log('📌 Todas as props separadas:', { src, alt, width, height, size, objectFit });
  if (!image) return null;
  return <Image src={image} alt={alt} width={width.size} height={height || 10} layout={size === 'full' ? 'responsive' : 'intrinsic'} {...props} />;

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
