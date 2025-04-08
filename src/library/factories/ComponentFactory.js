import React from 'react';
import dynamic from 'next/dynamic';

// 🔹 Mapeamento de nomes do JSON para os arquivos reais dos componentes
const componentNameMap = {
  heading: 'Heading',
  image: 'Image',
  'text-editor': 'Text',
  button: 'Button',
  counter: 'Counter',
  'icon-box': 'IconBox',
  testimonial: 'Testimonial',
  'icon-list': 'IconList',
};

// 🔹 Função que carrega dinamicamente todos os componentes da pasta "atoms_new"
const loadComponent = (name) => dynamic(() => import(`@/library/components/atoms_new/${name}`), { ssr: false });

// 🔹 Criar um registry dinâmico de componentes baseado no mapeamento
const componentRegistry = Object.keys(componentNameMap).reduce((acc, key) => {
  acc[key] = loadComponent(componentNameMap[key]);
  return acc;
}, {});

// 🔹 Função para criar um componente dinamicamente baseado no JSON
const createComponent = (type, props, id) => {
  const Component = componentRegistry[type];
  return Component ? <Component a={id} {...props} /> : null;
};

export default createComponent;
