import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Section = ({ children, sx }) => {
  return (
    <Box component="section" sx={{ ...sx }}>
      {children}
    </Box>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

// Definindo valores padrão
Section.defaultProps = {
  sx: { my: '32px' },
};

export default Section;
