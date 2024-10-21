import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Subtitle = ({ children, typography, gutterBottom, sx }) => {
  return (
    <Typography gutterBottom={gutterBottom} variant={typography} sx={{ ...sx }}>
      {children}
    </Typography>
  );
};

Subtitle.defaultProps = {
  typography: 'subtitle1',
  // gutterBottom: true,
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
