/* eslint-disable import/prefer-default-export */

/**
 * Converte valores de padding/margin/borderRadius para um formato compatível com o MUI.
 * @param {Object|string} value - O valor a ser formatado.
 * @returns {string} - Valor formatado corretamente.
 */
const formatSpacingProps = (value) => {
  if (!value) return '0px';
  return typeof value === 'object' ? `${value.top || 0}px ${value.right || 0}px ${value.bottom || 0}px ${value.left || 0}px` : `${value}px`;
};

/**
 * Transforma valores que seguem o padrão `{ unit: ..., size: ... }` em uma string `size + unit`.
 * @param {any} value - O valor a ser formatado.
 * @returns {any} - Retorna o valor formatado ou o original se não for do tipo esperado.
 */
const formatSizeUnit = (value) => {
  if (typeof value === 'object' && value !== null && 'size' in value && 'unit' in value) {
    return `${value.size}${value.unit}`;
  }
  return value;
};

/**
 * Define como tratar cada prefixo, separado por componente.
 * Se o valor for um **string**, as propriedades serão agrupadas neste nome.
 * Se o valor for `false`, o prefixo será removido, **mas a propriedade ficará na raiz**.
 * @type {Object}
 */
const prefixMap = {
  counter: {
    typography_title: 'titleProps',
    title: 'titleProps',
    typography_number: 'numberProps',
    number: 'numberProps',
    element: false, // 🔹 Remove "element_", mas mantém na raiz
    _custom: false, // 🔹 Remove "_custom_", mas mantém na raiz
  },
  heading: { title: false, typography: false },
  container: {
    flex: false, // 🔹 Remove "_global_", mas mantém na raiz
  },
  'text-editor': {
    text: false,
    typography: false,
  },
  button: {
    button_text: false,
    text: false,
  },
  'icon-box': {
    description_typography: 'descriptionProps',
    description: 'descriptionProps',
    selected: 'iconProps',
    title_typography: 'titleProps',
    title: 'titleProps',
    icon: 'iconProps',
    element: false, // 🔹 Remove "element_", mas mantém na raiz
  },
  testimonial: {
    content_content: 'contentProps',
    content_typography: 'contentProps',
    name_typography: 'nameProps',
    job_typography: 'jobProps',
    content: 'contentProps',
    name_text: 'nameProps',
    name: 'nameProps',
    job_text: 'jobProps',
    job: 'jobProps',
    testimonial_image: 'imageProps',
    testimonial: false,
    element_custom: false, // 🔹 Remove "element_", mas mantém na raiz
  },
  'icon-list': { icon_typography: 'textProps' },
};

/**
 * Mapeamento de chaves para `camelCase` e substituições específicas.
 * Agora, o `keyMap` é aplicado **antes de remover o `_`** para garantir que as propriedades sejam renomeadas corretamente.
 * @type {Object}
 */
const keyMap = {
  // text: 'title',
  flex_direction: 'flexDirection',

  // flex_align_items: 'alignItems',
  _title: 'componentName',
};

/**
 * Converte os dados de um JSON para um formato estruturado de componentes e propriedades.
 * Detecta automaticamente o tipo do widget e separa as propriedades com base nos prefixos definidos.
 * @param {Object} data - Objeto JSON contendo as configurações do componente.
 * @returns {Object} - Objeto formatado com `component` e `props`.
 */
export function mapProps(data) {
  // console.log('=================================');
  // console.log('📌 Dados recebidos:', JSON.stringify(data, null, 2));

  if (!data || !data.elType) {
    // console.error('❌ Erro: `elType` não encontrado no JSON.');
    return { component: 'Error', props: { message: 'Erro: `elType` não encontrado no JSON.' } };
  }

  const settings = data.settings || {};
  let mappedProps = {};

  const componentType = data.elType === 'widget' ? data.widgetType : data.elType;
  const validPrefixes = prefixMap[componentType] || {};

  // console.log('📌 Tipo de Componente:', componentType);
  // console.log('📌 Prefixos configurados:', validPrefixes);

  function transformKeys(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      // console.log('\n🔹 Processando chave:', key, '➡️ Valor:', value);

      // 🔹 Primeiro, aplicamos o `keyMap`, antes de qualquer outra transformação
      const mappedKey = keyMap[key] || key;
      // console.log('  🔄 Após aplicar `keyMap` (se existir):', mappedKey);

      let transformedKey = mappedKey.replace(/^_/, ''); // 🔹 Remove o `_` inicial

      // Verifica se a chave tem um prefixo listado no `prefixMap`
      let prefixGroup = null;
      Object.keys(validPrefixes).forEach((prefix) => {
        if (transformedKey.startsWith(`${prefix}_`)) {
          transformedKey = transformedKey.replace(`${prefix}_`, ''); // Remove o prefixo
          prefixGroup = validPrefixes[prefix]; // Define o nome do grupo ou `false`
        }
      });

      // console.log('  🔄 Após remover `_` e prefixo:', transformedKey);

      // Converte a chave transformada para camelCase
      const newKey = transformedKey.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      // console.log('  🔄 CamelCase aplicado:', newKey);

      // 🔹 Aplica a formatação para objetos `{ size, unit }`
      const formattedValue = formatSizeUnit(value);

      if (prefixGroup === false) {
        // 🔹 Se `prefixGroup === false`, deixamos a propriedade na raiz
        acc[newKey] = ['padding', 'margin', 'borderRadius'].includes(newKey) ? formatSpacingProps(formattedValue) : formattedValue;

        // console.log(`  ✅ Prefixo removido e mantido na raiz ➝ ${newKey}:`, formattedValue);
      } else if (prefixGroup) {
        // 🔹 Se `prefixGroup` for um nome válido, agrupamos normalmente
        if (!acc[prefixGroup]) acc[prefixGroup] = {};

        acc[prefixGroup][newKey] = ['padding', 'margin', 'borderRadius'].includes(newKey) ? formatSpacingProps(formattedValue) : formattedValue;

        // console.log(`  ✅ Adicionado no grupo "${prefixGroup}" ➝ ${newKey}:`, formattedValue);
      } else {
        // 🔹 Se não for um prefixo listado, apenas adicionamos normalmente
        acc[newKey] = ['padding', 'margin', 'borderRadius'].includes(newKey) ? formatSpacingProps(formattedValue) : formattedValue;

        // console.log(`  ✅ Adicionado na raiz ➝ ${newKey}:`, formattedValue);
      }

      return acc;
    }, {});
  }

  mappedProps = transformKeys(settings);

  // console.log('\n🚀 Resultado Final:', JSON.stringify(mappedProps, null, 2));

  return {
    component: componentType,
    props: mappedProps,
  };
}
