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
  if (!data || !data.elements) {
    const errorMessage = !data ? '❌ Não existe data' : '❌ Não existem elementos';
    log.error(errorMessage);

    return (
      <Box sx={{ width: '100%', padding: '20px', textAlign: 'center', backgroundColor: '#ffcccc' }}>
        <p style={{ color: 'red' }}>{errorMessage}</p>
      </Box>
    );
  }

  // Processa os dados para obter as propriedades formatadas corretamente
  const parsedData = mapProps(data);
  if (!parsedData) return null;
  log.component('SectionBuilder', '✅ Props do CONTAINER após mapProps:', parsedData.props);
  return (
    <Box data-function="SectionBuilder" data-componente={parsedData.component} sx={{ ...parsedData.props }}>
      {data.elements.map((element, index) => {
        log.component('SectionBuilder', '🔹 Processando ELEMENTO:', element);

        return <>{element.elType === 'widget' ? <RenderComponent data={element} key={index} /> : <SectionBuilder data={element} key={index} />}</>;
      })}
    </Box>
  );
};

export default SectionBuilder;
