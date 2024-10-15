import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Section = ({ children, sx }) => {
  return (
    <Box component="section" sx={{ padding: '2rem', ...sx }}>
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
  sx: { backgroundColor: 'secondary.main' },
};

export default Section;
