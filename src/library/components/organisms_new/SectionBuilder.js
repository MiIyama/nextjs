/* eslint-disable no-console */
import React from 'react';
import { Box } from '@mui/material';
import RenderComponent from '../molecules_new/RenderComponent';
import { mapProps } from '../../services/jsonParser';

// Componente SectionBuilder - Responsável por processar e renderizar seções dinâmicas
const SectionBuilder = ({ data }) => {
  // Log dos dados recebidos para depuração
  // console.log('data', data);

  // Verifica se os dados são válidos e retorna uma mensagem caso falte alguma informação
  if (!data) {
    return (
      <Box sx={{ width: '100%', padding: '20px', textAlign: 'center', backgroundColor: '#ffcccc' }}>
        <p style={{ color: 'red' }}>❌ Não existe data</p>
      </Box>
    );
  }

  if (!data.elements) {
    return (
      <Box sx={{ width: '100%', padding: '20px', textAlign: 'center', backgroundColor: '#ffcccc' }}>
        <p style={{ color: 'red' }}>❌ Não existe elements</p>
      </Box>
    );
  }

  // Processa os dados para obter as propriedades formatadas corretamente
  const parsedData = mapProps(data);
  if (!parsedData) return null;

  // console.log('✅ Props do CONTAINER após mapProps:', parsedData.props);

  return (
    // Renderiza um Box do Material UI com as propriedades processadas
    <Box componente="SectionBuilder" sx={{ ...parsedData.props, width: '100%', bgcolor: 'blue' }}>
      SectionBuilder
      {/* Itera sobre os elementos e renderiza cada um */}{' '}
      <Box sx={{ width: '100%', padding: '20px', backgroundColor: '#ffcccc' }}>
        Elements
        {data.elements.map((element, index) => {
          // console.log('🔹 Processando ELEMENTO:', element);

          return element.elType === 'widget' ? (
            // Se o tipo do elemento for 'widget', renderiza o componente correspondente
            <Box sx={{ border: '1px solid black', mb: 1, bgcolor: 'green' }}>
              RenderComponent
              <RenderComponent key={index} data={element} />
            </Box>
          ) : (
            // Se não for 'widget', chama recursivamente o SectionBuilder para renderizar uma subseção
            <Box>
              <SectionBuilder key={index} data={element} />
            </Box>
          );
        })}
      </Box>
      ;
    </Box>
  );
};

export default SectionBuilder;
