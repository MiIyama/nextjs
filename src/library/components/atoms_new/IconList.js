/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const IconList = ({ textProps, textColor, textIndent, iconColor, iconSize, iconList, iconAlign, ...props }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: props.spaceBetween, props }}>
      {iconList?.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: textIndent }}>
          {item.selected_icon?.value?.url && (
            <Box sx={{ color: iconColor }}>
              <Image src={item.selected_icon.value.url} width={30} height={30} />
            </Box>
          )}

          {item.text && <Typography sx={{ color: textColor, ...textProps }}>{item.text}</Typography>}
        </Box>
      ))}
    </Box>
  );
};

export default IconList;
