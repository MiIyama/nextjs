/* eslint-disable no-console */
import { propertyMap } from './propertyMap';

// Função para acessar propriedades aninhadas dinamicamente
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, key) => (acc && acc[key] ? acc[key] : undefined), obj);
};

// Converte padding/margin/borderRadius para formato correto no MUI
const formatSpacingProps = (value) => {
  if (!value) return '0px';
  return typeof value === 'object' ? `${value.top || 0}px ${value.right || 0}px ${value.bottom || 0}px ${value.left || 0}px` : `${value}px`;
};

// Mapeia automaticamente todas as propriedades do JSON para props do React
// eslint-disable-next-line import/prefer-default-export
export function mapProps(data) {
  console.log('📌 Iniciando processamento de `mapProps` para:', data.elType, '| Tipo:', data.widgetType || 'container');

  if (!data || !data.elType) {
    console.error('❌ ERRO: `data.elType` não foi encontrado no JSON.');
    return { component: 'Error', props: { message: 'Erro: `elType` não encontrado no JSON.' } };
  }

  const settings = data.settings || {};
  const mappedProps = {};

  const mapping = data.elType === 'widget' ? propertyMap[data.widgetType] : propertyMap[data.elType];

  if (!mapping) {
    console.error(`❌ ERRO: Elemento '${data.elType === 'widget' ? data.widgetType : data.elType}' não reconhecido.`);
    return { component: 'Error', props: { message: `Erro: Elemento '${data.elType === 'widget' ? data.widgetType : data.elType}' não reconhecido.` } };
  }

  Object.keys(mapping).forEach((key) => {
    const jsonPath = mapping[key];
    let value = getNestedValue(settings, jsonPath);

    // 🔹 Aplica formatação se a prop for `padding`, `margin` ou `borderRadius`
    if (['padding', 'margin', 'borderRadius'].includes(key)) {
      value = formatSpacingProps(value);
    }

    mappedProps[key] = value;
  });

  console.log(`✅ Propriedades finais para '${data.elType}':`, mappedProps);
  return {
    component: data.elType === 'widget' ? data.widgetType : 'Section',
    props: mappedProps,
  };
}
