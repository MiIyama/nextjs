import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const loadComponent = (name) => {
  const components = {
    Hero: dynamic(() => import('@/library/components/organisms/Hero'), { ssr: false }),
    AboutUs: dynamic(() => import('@/library/components/organisms/AboutUs'), { ssr: false }),
    Features: dynamic(() => import('@/library/components/organisms/Features'), { ssr: false }),
  };
  return components[name] || null;
};

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
