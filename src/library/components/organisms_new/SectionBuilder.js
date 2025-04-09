/* eslint-disable no-console */
import React from 'react';
import { Box } from '@mui/material';
import log from '@/library/utils/logHelper';
import RenderComponent from '../molecules_new/RenderComponent';
import { mapProps } from '../../services/jsonParser';
import ResponsiveImage from '../atoms_new/ImageContainer';

// Componente SectionBuilder - Responsável por processar e renderizar seções dinâmicas
const SectionBuilder = ({ data, depth = 0, sectionId = '', parentId = '' }) => {
  const indent = ' .'.repeat(depth); // Cria indentação visual para logs

  console.log(
    `pai="%s"\n%s<Section id=%c"%s"%c>`,
    parentId, // Valor do parentId
    indent, // Mantém a indentação correta antes de <Section>
    'color: rgb(91, 207, 239); font-weight: bold;', // Estilo para o id
    sectionId, // Valor do sectionId
    'color: inherit;\n',
    data // Reseta o estilo para o restante do texto
  );

  log.component('SectionBuilder', `🌀 Profundidade: ${depth} | 🔍 Seção atual: ${sectionId} | 🔗 Parent: ${parentId}`);

  // Verifica se os dados são válidos e retorna uma mensagem caso falte alguma informação
  if (!data || !data.elements) {
    const errorMessage = !data ? '❌ Não existe data' : '❌ Não existem elementos';
    log.error(errorMessage);
    console.log(`${indent}  ❌ Erro: ${errorMessage}`);

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
    <>
      <Box
        a={data.id}
        data-function="SectionBuilder"
        data-componente={parsedData.component}
        sx={{
          display: 'flex',
          ...parsedData.props,
          // width: '100%',

          position: 'static',
        }}
      >
        {data.elements.length > 0 ? (
          data.elements.map((element, index) => {
            const newSectionId = element.id || `${sectionId}-${index}`;

            if (element.elType === 'widget') {
              console.log(
                `pai="%s"\n%s<🔹Widget id=%c"%s"%c />`,
                sectionId, // Valor do pai
                indent, // Mantém a indentação correta antes do <Widget>
                'color: rgb(91, 207, 239); font-weight: bold;', // Cor apenas para o ID
                newSectionId, // ID do widget
                'color: inherit;\n',
                element // Reseta a cor para o restante do texto
              );

              return <RenderComponent data={element} key={index} />;
            }

            return <SectionBuilder data={element} depth={depth + 1} sectionId={newSectionId} parentId={sectionId} key={index} />;
          })
        ) : (
          // 🔹 Renderiza `ResponsiveImage` quando `data.elements` estiver vazio
          <ResponsiveImage {...parsedData.props} />
        )}
      </Box>
    </>
  );
};

export default SectionBuilder;
