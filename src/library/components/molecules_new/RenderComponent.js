/* eslint-disable no-console */
import React from 'react';
import log from '@/library/utils/logHelper';
import { mapProps } from '../../services/jsonParser';
import createComponent from '../../factories/ComponentFactory';

const RenderComponent = ({ data }) => {
  log.component('RenderComponent', '🔹 Processando WIDGET:', data);

  const parsedData = mapProps(data);
  if (!parsedData) {
    log.error('❌ Erro: `mapProps` retornou `null` para:', data);
    return <div style={{ color: 'red', padding: '10px', textAlign: 'center' }}>❌ Erro ao processar o componente: {data?.widgetType || 'Desconhecido'}</div>;
  }

  log.component('RenderComponent', '✅ Props do WIDGET após mapProps:', parsedData);

  return createComponent(parsedData.component, parsedData.props);
};

export default RenderComponent;
