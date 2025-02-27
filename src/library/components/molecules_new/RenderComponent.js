/* eslint-disable no-console */
import React from 'react';
import { mapProps } from '../../services/jsonParser';
import createComponent from '../../factories/ComponentFactory';

const RenderComponent = ({ data }) => {
  console.log('🔹 Processando WIDGET:', data);

  const parsedData = mapProps(data);
  if (!parsedData) {
    console.error('❌ Erro: `mapProps` retornou `null` para:', data);
    return <div style={{ color: 'red', padding: '10px', textAlign: 'center' }}>❌ Erro ao processar o componente: {data?.widgetType || 'Desconhecido'}</div>;
  }

  console.log('✅ Props do WIDGET após mapProps:', parsedData);

  return createComponent(parsedData.component, parsedData.props);
};

export default RenderComponent;
