import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Subtitle = ({ children, typography, gutterBottom, sx }) => {
  return (
    <Typography gutterBottom={gutterBottom} variant={typography} color="text-colors-500" sx={{ ...sx }}>
      {children}
    </Typography>
  );
};

Subtitle.defaultProps = {
  typography: 'text-md-regular',
  // gutterBottom: true,
  color: 'text-colors-500',
  sx: {
    maxWidth: 'unset',
  },
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  typography: PropTypes.string,
  gutterBottom: PropTypes.bool,
  sx: PropTypes.object,
};
export default Subtitle;
