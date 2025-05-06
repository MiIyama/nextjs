import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material';
import SectionEditor from './SectionEditor';

// Função para carregar componentes dinamicamente
const loadComponent = (name) => dynamic(() => import(`@/library/components/organisms/${name}`), { ssr: false });

const EditablePageBuilder = ({ initialContent }) => {
  const [pageContent, setPageContent] = useState(initialContent);

  const handleContentChange = (index, updatedProps) => {
    const updatedContent = [...pageContent];
    updatedContent[index].props = updatedProps;
    setPageContent(updatedContent);
  };

  return (
    <Suspense fallback={<CircularProgress />}>
      {pageContent.map(({ type, props }, index) => {
        const Component = loadComponent(type);

        return (
          <Box
            key={`${type}-${index}`}
            sx={{
              border: '2px solid black',
              borderRadius: 2,
              mb: 3,
            }}
          >
            {/* Editor de Seção */}
            <Box
              sx={{
                border: '1px solid #ddd',
                borderRadius: 2,
                p: 2,
                backgroundColor: 'gray',
              }}
            >
              <SectionEditor type={type} data={props} onChange={(updatedProps) => handleContentChange(index, updatedProps)} />
            </Box>

            {/* Visualização do Componente */}
            <Box>
              <Component content={props} />
            </Box>
          </Box>
        );
      })}
    </Suspense>
  );
};

export default EditablePageBuilder;
