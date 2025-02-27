import { Box } from '@mui/material';
import Heading from '../components/atoms_new/Heading';
import Text from '../components/atoms_new/Text';
import Button from '../components/atoms_new/Button';

const componentRegistry = {
  heading: Heading,
  'text-editor': Text,
  button: Button,
};

const createComponent = (type, props) => {
  const Component = componentRegistry[type];
  return Component ? (
    <Box sx={{ border: '1px solid black', mb: 1, height: '100px', bgcolor: 'pink' }}>
      <Component {...props} />{' '}
    </Box>
  ) : null;
};

export default createComponent;
