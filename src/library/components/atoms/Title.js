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
  typography: 'h2',
  gutterBottom: true,
  sx: {
    maxWidth: 'unset',
  },
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  typography: PropTypes.string,
  gutterBottom: PropTypes.bool,
  sx: PropTypes.object,
};
export default Title;
