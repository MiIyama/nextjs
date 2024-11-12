// Title.stories.jsx
import Title from './Title';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    typography: {
      control: 'text',
      description: 'Variante de tipografia usada.',
    },
    gutterBottom: {
      control: 'boolean',
      description: 'Define se haverá espaçamento inferior.',
    },
    sx: {
      control: 'object',
      description: 'Estilos adicionais via sistema sx.',
    },
    children: {
      control: 'text',
      description: 'Conteúdo a ser exibido dentro do título.',
    },
  },
};

// Template base para reutilização nas histórias
const Template = (args) => <Title {...args} />;

// História padrão do componente
export const Default = Template.bind({});
Default.args = {
  children: 'Título Padrão',
  typography: 'h4',
  gutterBottom: true,
  sx: { color: 'primary.main' },
};

// Outra variação para demonstração
export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: 'Título Personalizado',
  typography: 'h2',
  gutterBottom: false,
  sx: { color: 'secondary.main', textAlign: 'center' },
};
