import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Função para carregar um componente dinamicamente
const loadComponent = (name) => dynamic(() => import(`@/library/components/organisms/${name}`), { ssr: false });

const PageBuilder = ({ pageContent }) => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const loadedComponents = pageContent.map(({ type, props }, index) => {
      const Component = loadComponent(type);
      return { Component, props, key: `${type}-${index}` };
    });
    setComponents(loadedComponents);
  }, [pageContent]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {components.map(({ Component, props, key }) => (
        <Component key={key} content={props} />
      ))}
    </Suspense>
  );
};

export default PageBuilder;
