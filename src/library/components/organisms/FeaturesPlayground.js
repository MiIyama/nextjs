// FeaturesPlayground.jsx
import React, { useState, useEffect } from 'react';
import Features from './Features';

const FeaturesPlayground = () => {
  const [itemsPerRow, setItemsPerRow] = useState(2);
  const [title, setTitle] = useState('Transform Dreams into Reality');
  const [subtitle, setSubtitle] = useState('In the context of business...');
  const [featuresProps, setFeaturesProps] = useState({
    variant: 'simple',
    icon: true,
    iconOnSeparateLine: true,
  });
  const [proportions, setProportions] = useState([12]);
  const [items, setItems] = useState([
    { title: 'Identify Core Features', description: 'This is the first feature.' },
    { title: 'Feature 2', description: 'This is the second feature.' },
    { title: 'Identify Core Features', description: 'This is the third feature.' },
    { title: 'Feature 4', description: 'This is the fourth feature.' },
  ]);
  const [sectionVersion, setSectionVersion] = useState(0);

  const content = {
    title: { text: title },
    subtitle: { text: subtitle },
    items,
    featuresProps,
    itemsPerRow,
    proportions,
  };

  const handleAddItem = () => {
    setItems([...items, { title: `Feature ${items.length + 1}`, description: 'New feature added.' }]);
  };

  const handleItemsPerRowChange = (e) => {
    setItemsPerRow(Number(e.target.value));
  };

  const handleVariantChange = (e) => {
    setFeaturesProps((prev) => ({ ...prev, variant: e.target.value }));
  };

  const handleProportionsChange = (e) => {
    const newProportions = e.target.value.split(',').map((value) => parseInt(value.trim(), 10));
    setProportions(newProportions);
  };

  useEffect(() => {
    setSectionVersion((prev) => prev + 1);
  }, [itemsPerRow, featuresProps.variant, proportions]);

  return (
    <div>
      <h2>Playgrounds para Features</h2>

      {/* Controles de Props organizados verticalmente */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0px' }}>
        <label>
          Itens por Linha:
          <input type="number" value={itemsPerRow} min="1" max="4" onChange={handleItemsPerRowChange} />
        </label>

        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          Subtítulo:
          <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
        </label>

        <label>
          Variante:
          <select value={featuresProps.variant} onChange={handleVariantChange}>
            <option value="simple">Simples</option>
            <option value="detailed">Detalhado</option>
          </select>
        </label>

        <label>
          Proporções (Ex: 6,6 para duas colunas ou 4,4,4 para três):
          <input type="text" value={proportions.join(',')} onChange={handleProportionsChange} />
        </label>

        <button onClick={handleAddItem}>Adicionar Item</button>
      </div>

      {/* Renderização do Componente Features com key dinâmica */}
      <div style={{ marginTop: '20px' }}>
        <Features key={sectionVersion} content={content} />
      </div>
    </div>
  );
};

export default FeaturesPlayground;
