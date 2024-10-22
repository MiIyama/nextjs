import PropTypes from 'prop-types';
import { Button as MUIButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Button = ({ children, variant, color, onClick, endIcon, sx }) => {
  return (
    <MUIButton variant={variant} color={color} onClick={onClick} endIcon={endIcon ? <ArrowForwardIcon /> : null} sx={{ ...sx }}>
      {children}
    </MUIButton>
  );
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  sx: {
    borderRadius: 2,
  },
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

export default Button;
