/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { propertyMap } from './propertyMap';

// Função para acessar propriedades aninhadas dinamicamente
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, key) => {
    return acc && acc[key] ? acc[key] : undefined;
  }, obj);
};

// Converte padding/margin/borderRadius para formato correto no MUI
const formatSpacingProps = (value) => {
  if (!value) return '0px';
  return typeof value === 'object' ? `${value.top || 0}px ${value.right || 0}px ${value.bottom || 0}px ${value.left || 0}px` : `${value}px`;
};

// 🔧 Função para priorizar camelCase e evitar duplicações
const ensureCamelCase = (key) => key.replace(/^_/, '').replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const removeDuplicates = (props, key, value) => {
  const camelKey = ensureCamelCase(key);

  // 🔹 Se já existe a propriedade em camelCase, não adicionamos outra versão
  if (!props[camelKey]) {
    return { ...props, [camelKey]: value }; // Sempre adicionamos camelCase
  }
  return props;
};

// Função para mapear as propriedades automaticamente
export function mapProps(data) {
  if (!data || !data.elType) {
    return { component: 'Error', props: { message: 'Erro: `elType` não encontrado no JSON.' } };
  }

  const settings = data.settings || {};
  let mappedProps = {}; // 🔹 Alteramos para let para permitir atualizações seguras

  // 🔹 Verificação de Mapeamento no propertyMap
  const mapping = data.elType === 'widget' ? propertyMap[data.widgetType] : propertyMap[data.elType];

  if (mapping) {
    Object.keys(mapping).forEach((key) => {
      const jsonPath = mapping[key];
      let value = getNestedValue(settings, jsonPath);

      if (['padding', 'margin', 'borderRadius'].includes(key)) {
        value = formatSpacingProps(value);
      }

      mappedProps = removeDuplicates(mappedProps, key, value);
    });
  }

  // 🔹 Adiciona automaticamente todas as propriedades do JSON, mas evita duplicação
  Object.keys(settings).forEach((key) => {
    mappedProps = removeDuplicates(mappedProps, key, settings[key]);
  });

  return {
    component: data.elType === 'widget' ? data.widgetType : data.elType,
    props: mappedProps,
  };
}
