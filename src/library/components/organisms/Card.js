/* eslint-disable no-nested-ternary */
import { Box } from '@mui/material';
import Title from '@/library/components/atoms/Title';
import Subtitle from '@/library/components/atoms/Subtitle';

export default function Card({ variant = 'default', layout = 'default' }) {
  const borderStyles = {
    default: {
      border: `1px solid`,
      borderColor: 'text-colors-200',
      padding: 3,
    },
    highlighted: {
      backgroundColor: 'brand-colors-25',
      padding: 3,
    },
    line: {
      border: `1px solid transparent`,
      borderBottomColor: 'text-colors-200',
      borderRadius: 0,
      paddingBottom: 4,
    },
    simple: {
      border: 'none',
    },
  };
  const cardStyles = {
    default: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    rightImage: {
      alignItems: 'center',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },
  }; // flexDirection: imgOnSeparateLine ? 'column' : 'row',

  return (
    <Box
      sx={{
        borderRadius: 3,
        height: '100%',
        minHeight: '100px',
        ...borderStyles[variant],

        display: 'flex',
        ...cardStyles[layout],
      }}
    >
      <Box sx={{ bgcolor: 'red ', height: '150px', aspectRatio: 1, borderRadius: 3 }}>.</Box>
      <Box sx={{ width: '32px', height: '32px' }} />

      <Box
        sx={
          {
            // maxWidth: '60%'
          }
        }
      >
        {/* <Title typography="display-md-medium" sx={{ color: 'brand-colors-800' }}>
        01
      </Title> */}
        <Title typography="text-lg-medium">Set Ambitious Benchmarks</Title>
        <Subtitle typography="text-sm-medium">Don&apos;t settle for mediocrity. Define ambitious service benchmarks that challenge . </Subtitle>
      </Box>
    </Box>
  );
}
