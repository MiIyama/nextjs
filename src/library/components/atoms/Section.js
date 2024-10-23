import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';

const Section = ({ children, sx }) => {
  return (
    <Box component="section" sx={{ ...sx }}>
      <Container sx={{ border: '1px solid gray' }}>{children}</Container>
    </Box>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

// Definindo valores padrão
Section.defaultProps = {
  sx: { py: '64px', border: '1px solid #000' },
};

export default Section;
