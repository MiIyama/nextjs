/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import log from '@/library/utils/logHelper';
import { propertyMap } from './propertyMap';

// Função para acessar propriedades aninhadas dinamicamente
const getNestedValue = (obj, path) => {
  log.component('jsonParser', '________________________________');
  log.component('jsonParser', '🔍 Objeto:', obj);
  log.component('jsonParser', '🔗 Caminho mapeado pelo PropertyMap:', path);

  return path.split('.').reduce((acc, key) => {
    log.component('jsonParser', '🔄 Acessando chave:', key, '| Valor atual:', acc);
    log.component('jsonParser', '________________________________');

    return acc && acc[key] ? acc[key] : undefined;
  }, obj);
};

// Converte padding/margin/borderRadius para formato correto no MUI
const formatSpacingProps = (value) => {
  if (!value) return '0px';
  return typeof value === 'object' ? `${value.top || 0}px ${value.right || 0}px ${value.bottom || 0}px ${value.left || 0}px` : `${value}px`;
};

// Função para mapear as propriedades automaticamente
export function mapProps(data) {
  if (data.widgetType) {
    log.component('jsonParser', '📌 Iniciando processamento de `mapProps` para:', `ElType: ${data.elType}`, `Widget: ${data.widgetType || '-'}`);
  }

  if (!data || !data.elType) {
    log.error('jsonParser', '❌ ERRO: `data.elType` não foi encontrado no JSON.');
    return { component: 'Error', props: { message: 'Erro: `elType` não encontrado no JSON.' } };
  }

  const settings = data.settings || {};
  const mappedProps = {};

  // 🔹 Novo mapeamento para `widgetType`
  const mapping = data.elType === 'widget' ? propertyMap[data.widgetType] : propertyMap[data.elType];
  log.component('jsonParser', '📍 Mapping:', mapping);

  if (!mapping) {
    log.error('jsonParser', `❌ ERRO: Elemento '${data.elType === 'widget' ? data.widgetType : data.elType}' não reconhecido.`);
    return { component: 'Error', props: { message: `Erro: Elemento '${data.elType === 'widget' ? data.widgetType : data.elType}' não reconhecido.` } };
  }

  // 🔹 Adiciona propriedades do JSON para as que são nomeadas de forma diferente
  Object.keys(mapping).forEach((key) => {
    const jsonPath = mapping[key];
    log.component('jsonParser', '---------------');
    log.component('jsonParser', '🔗 JSON Path:', jsonPath, '| Chave:', key);
    log.component('jsonParser', '🛠 Settings:', settings);

    let value = getNestedValue(settings, jsonPath);
    if (['padding', 'margin', 'borderRadius'].includes(key)) {
      value = formatSpacingProps(value);
    }

    log.component('jsonParser', `✅ Mapeado: '${key}' →`, value);
    mappedProps[key] = value;
  });

  // 🔹 Adiciona automaticamente todas as propriedades que já possuem o mesmo nome no JSON
  Object.keys(settings).forEach((key) => {
    if (!mappedProps[key]) {
      mappedProps[key] = settings[key]; // Usa o mesmo nome diretamente
      log.component('jsonParser', `➕ Adicionando do JSON: '${key}' →`, settings[key]);
    }
  });

  log.component('jsonParser', `✅ Propriedades finais para '${data.elType} ${data.widgetType || ''}':`, mappedProps);

  return {
    component: data.elType === 'widget' ? data.widgetType : 'Section',
    props: mappedProps,
  };
}
