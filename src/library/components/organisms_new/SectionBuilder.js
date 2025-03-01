/* eslint-disable no-console */
import React from 'react';
import { Box } from '@mui/material';
import log from '@/library/utils/logHelper';
import RenderComponent from '../molecules_new/RenderComponent';
import { mapProps } from '../../services/jsonParser';

// Componente SectionBuilder - Responsável por processar e renderizar seções dinâmicas
const SectionBuilder = ({ data }) => {
  log.component('SectionBuilder', '🔹 Recebendo dados para SectionBuilder:', data);

  // Verifica se os dados são válidos e retorna uma mensagem caso falte alguma informação
  if (!data) {
    log.error('❌ Erro: Não existe data para SectionBuilder');
    return (
      <Box sx={{ width: '100%', padding: '20px', textAlign: 'center', backgroundColor: '#ffcccc' }}>
        <p style={{ color: 'red' }}>❌ Não existe data</p>
      </Box>
    );
  }

  if (!data.elements) {
    log.error('❌ Erro: Não existem elementos dentro de SectionBuilder');
    return (
      <Box sx={{ width: '100%', padding: '20px', textAlign: 'center', backgroundColor: '#ffcccc' }}>
        <p style={{ color: 'red' }}>❌ Não existe elements</p>
      </Box>
    );
  }

  // Processa os dados para obter as propriedades formatadas corretamente
  const parsedData = mapProps(data);
  if (!parsedData) return null;

  log.component('SectionBuilder', '✅ Props do CONTAINER após mapProps:', parsedData.props);

  return (
    <Box componente="SectionBuilder" sx={{ ...parsedData.props }}>
      {data.elements.map((element, index) => {
        log.component('SectionBuilder', '🔹 Processando ELEMENTO:', element);

        return element.elType === 'widget' ? <RenderComponent key={index} data={element} /> : <SectionBuilder key={index} data={element} />;
      })}
    </Box>
  );
};

export default SectionBuilder;
