// FeaturesItem.jsx
import { Box, Typography, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FeaturesItem = ({ title, description, icon = true, variant = 'default', withDivider = false, centerText = false, iconOnSeparateLine = false }) => {
  const renderIcon = icon && <CheckCircleIcon sx={{ fontSize: 30, color: 'brand-colors-600' }} />;

  const boxStyles = {
    default: {
      border: `1px solid `,
      borderRadius: 3,
      borderColor: 'text-colors-200',
    },
    highlighted: {
      // border: `1px solid red`,
      borderRadius: 3,
      backgroundColor: 'brand-colors-25',
    },
    simple: {
      border: 'none',
      borderRadius: 3,
    },
  };

  return (
    <Box
      sx={{
        ...boxStyles[variant],
        display: 'flex',
        flexDirection: iconOnSeparateLine ? 'column' : 'row',
        alignItems: centerText ? 'center' : 'flex-start',
        justifyContent: centerText ? 'center' : 'flex-start',
        textAlign: centerText ? 'center' : 'left',
        padding: 2,
      }}
    >
      {renderIcon}
      <Box>
        <Typography typography="text-md-bold" color="text-colors-950">
          {title}
        </Typography>
        {withDivider && <Divider sx={{ my: 1, backgroundColor: 'text-colors-200' }} />}
        <Typography typography="text-sm-regular" color="text-colors-600">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturesItem;
