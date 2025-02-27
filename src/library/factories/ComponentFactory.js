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
  return Component ? <Component {...props} /> : null;
};

export default createComponent;
