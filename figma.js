/* eslint-disable */
const fs = require('fs').promises;

(async () => {
  const fetch = (await import('node-fetch')).default;

  const FILE_KEY = 'I1PVrjIK0LU6LKm31EZzXr'; // File Key do seu projeto
  const ACCESS_TOKEN = 'figd_fSijHHp7aIO4cyue7oOLRHHn35frzpB8V1uUUeqy'; // Substituir pelo token de acesso

  async function getLayerNames() {
    const url = `https://api.figma.com/v1/files/${FILE_KEY}`;

    try {
      const response = await fetch(url, {
        headers: {
          'X-Figma-Token': ACCESS_TOKEN,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const formattedContent = formatLayers(data.document.children);
      await saveResponseToFile(formattedContent);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  }

  function formatLayers(pages) {
    const result = [];
    for (const page of pages) {
      result.push(`- ${page.name}`);
      if (page.children) {
        for (const child of page.children) {
          result.push(`  - ${child.name}`);
          if (child.children) {
            for (const grandchild of child.children) {
              result.push(`    - ${grandchild.name}`);
            }
          }
        }
      }
    }
    return result.join('\n'); // Formata como string com quebras de linha
  }

  async function saveResponseToFile(content) {
    try {
      await fs.writeFile('figma-layers.txt', content, 'utf-8');
      console.log('Estrutura salva em "figma-layers.txt".');
    } catch (error) {
      console.error('Erro ao salvar o arquivo:', error);
    }
  }

  await getLayerNames();
})();
