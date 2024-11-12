import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

/**
 * O componente `Title` é um wrapper para o componente Typography do Material UI,
 * permitindo customizações através de propriedades como `typography`, `gutterBottom` e `sx`.
 */
const Title = ({ children, typography, gutterBottom, component, sx }) => {
  return (
    <Typography gutterBottom={gutterBottom} component={component} variant={typography} sx={{ ...sx }}>
      {children}
    </Typography>
  );
};

Title.defaultProps = {
  /**
   * Variante de tipografia padrão para o título.
   * Pode ser qualquer variante válida do Material UI Typography.
   *
   * @type {string}
   * @default 'display-2xl-semibold'
   */
  typography: 'display-2xl-semibold',
  component: 'h2',

  /**
   * Define se haverá espaçamento inferior (margem) no componente Typography.
   *
   * @type {boolean}
   * @default true
   */
  gutterBottom: true,

  /**
   * Estilos adicionais para o componente, utilizando o sistema `sx` do Material UI.
   *
   * @type {object}
   * @default { maxWidth: '900px' }
   */
  sx: {
    maxWidth: '900px',
  },
};

Title.propTypes = {
  /**
   * O conteúdo a ser renderizado dentro do componente `Title`.
   * Aceita qualquer elemento React.
   *
   * @type {node}
   * @required
   */
  children: PropTypes.node.isRequired,

  /**
   * Variante da tipografia a ser usada.
   * Deve ser uma string que represente uma variante válida do Material UI Typography.
   *
   * @type {string}
   */
  typography: PropTypes.string,

  /**
   * Define se deve haver uma margem inferior (gutter).
   *
   * @type {boolean}
   */
  gutterBottom: PropTypes.bool,

  /**
   * Estilos adicionais para customizar o componente usando o sistema `sx` do Material UI.
   *
   * @type {object}
   */
  sx: PropTypes.object,
};

export default Title;
