// FeaturesItem.jsx
import { Box, Typography, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FeaturesItem = ({ title, description, config = {} }) => {
  const { icon = false, variant = 'default', withDivider = false, centerText = false, iconOnSeparateLine = false } = config;

  const renderIcon = icon && <CheckCircleIcon sx={{ my: 'auto', mr: iconOnSeparateLine ? 0 : 1, fontSize: 30, color: 'brand-colors-600' }} />;

  const boxStyles = {
    default: {
      border: `1px solid `,
      borderColor: 'text-colors-200',
      height: '100%',
      padding: 2,
    },
    highlighted: {
      backgroundColor: 'brand-colors-25',
      padding: 2,
    },
    simple: {
      border: 'none',
    },
  };

  return (
    <Box
      sx={{
        ...boxStyles[variant],
        display: 'flex',
        flexDirection: iconOnSeparateLine ? 'column' : 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: centerText ? 'center' : 'left',
        borderRadius: 3,
        height: '100%',
      }}
    >
      <Box sx={{ width: 1 }}>
        <Box sx={{ alignItems: centerText ? 'center' : 'flex-start', justifyContent: centerText ? 'center' : 'flex-start', textAlign: centerText ? 'center' : 'left', display: 'flex', flexDirection: iconOnSeparateLine ? 'column' : 'row' }}>
          {renderIcon}
          <Typography typography="display-xs-medium" color="text-colors-950">
            {title}
          </Typography>
        </Box>
        {withDivider && <Divider sx={{ my: 1, backgroundColor: 'text-colors-200' }} />}
        <Typography typography="text-md-regular" color="text-colors-600">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturesItem;
