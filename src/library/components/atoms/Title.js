import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Title = ({ children, typography, gutterBottom, sx }) => {
  return (
    <Typography gutterBottom={gutterBottom} variant={typography} sx={{ ...sx }}>
      {children}
    </Typography>
  );
};

Title.defaultProps = {
  typography: 'display-2xl-semibold',
  // gutterBottom: true,
  sx: {
    // maxWidth: '900px',
  },
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  typography: PropTypes.string,
  gutterBottom: PropTypes.bool,
  sx: PropTypes.object,
};
export default Title;
