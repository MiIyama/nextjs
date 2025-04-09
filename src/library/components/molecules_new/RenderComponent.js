/* eslint-disable no-console */
import React from 'react';
import log from '@/library/utils/logHelper';
import { mapProps } from '../../services/jsonParser';
import createComponent from '../../factories/ComponentFactory';
import flattenProperties from '../../services/flattenProperties';

const propertiesMap = {
  fontSize: { key: 'size', type: 'number' },
  link: { key: 'url' },
  image: { key: 'url' },
  borderWidth: { key: 'top' },
};

const RenderComponent = ({ data }) => {
  log.component('RenderComponent', '🔹 Processando WIDGET:', data);

  const parsedData = mapProps(data);
  if (!parsedData) {
    log.error('❌ Erro: `mapProps` retornou `null` para:', data);
    return <div style={{ color: 'red', padding: '10px', textAlign: 'center' }}>❌ Erro ao processar o componente: {data?.widgetType || 'Desconhecido'}</div>;
  }

  log.component('RenderComponent', '✅ Props do WIDGET após mapProps:', parsedData);
  const flattenedProps = flattenProperties(parsedData.props, propertiesMap);
  return createComponent(parsedData.component, flattenedProps, data.id);
};

export default RenderComponent;
