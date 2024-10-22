import { parse } from 'react-docgen';
import fs from 'fs-extra';
import prettier from 'prettier';
import path from 'path';

// Função importada para gerar a configuração do Storybook a partir do JSON
const generateStorybookConfig = (componentInfo) => {
  const { displayName, props } = componentInfo;

  const argTypes = {};
  const defaultArgs = {};

  for (const [propName, propDetails] of Object.entries(props)) {
    argTypes[propName] = {
      control: getControlType(propDetails.type.name),
      description: propDetails.description || `Descrição de ${propName}`,
    };

    if (propDetails.defaultValue) {
      defaultArgs[propName] = parseDefaultValue(propDetails.defaultValue.value);
    }
  }

  return {
    title: `Components/${displayName}`,
    component: displayName,
    argTypes,
    defaultArgs,
  };
};

// Função para converter valores padrão de strings mal formatadas
const parseDefaultValue = (value) => {
  try {
    return JSON.parse(value.replace(/'/g, '"'));
  } catch {
    return value;
  }
};

// Função para criar o conteúdo do Storybook a partir da configuração gerada
const createStoryContent = (config) => {
  const { title, component, argTypes, defaultArgs } = config;
  return `
import ${component} from './${component}';

export default {
  title: '${title}',
  component: ${component},
  argTypes: ${JSON.stringify(argTypes, null, 2)},
};

const Template = (args) => <${component} {...args} />;

export const Default = Template.bind({});
Default.args = ${JSON.stringify(defaultArgs, null, 2)};
`;
};

// Processa o componente e gera a história
const processComponent = async (componentPath) => {
  const componentName = path.basename(componentPath, path.extname(componentPath));
  console.log(`\nProcessando componente: ${componentName}`);
  const componentCode = await fs.readFile(componentPath, 'utf-8');

  try {
    const componentInfo = parse(componentCode); // Extrai informações do componente
    const config = generateStorybookConfig(componentInfo); // Gera a configuração

    const storyContent = createStoryContent(config);
    const formattedContent = await prettier.format(storyContent, { parser: 'babel' });

    const storyPath = path.join(path.dirname(componentPath), `${componentName}.stories.jsx`);
    await fs.writeFile(storyPath, formattedContent, 'utf-8');

    console.log(`História gerada para o componente: ${componentName}`);
  } catch (err) {
    console.error(`Erro ao processar o componente ${componentName}:`, err);
  }
};

// Função para determinar o tipo de controle no Storybook
const getControlType = (typeName) => {
  switch (typeName) {
    case 'string':
      return 'text';
    case 'bool':
      return 'boolean';
    case 'number':
      return 'number';
    case 'object':
      return 'object';
    case 'node':
      return 'text';
    default:
      return 'text';
  }
};

// Gera histórias para todos os componentes no diretório
const generateStories = async (dir) => {
  try {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        await generateStories(filePath);
      } else if (stats.isFile() && /\.(js|jsx)$/.test(file)) {
        console.log(`\nEncontrado componente: ${file}`);
        await processComponent(filePath);
      } else {
        console.log(`\nIgnorando arquivo não suportado: ${file}`);
      }
    }
  } catch (err) {
    console.error('Erro ao gerar histórias:', err);
  }
};

// Início da geração de histórias
const start = async () => {
  const componentsDir = path.resolve('./src/library/components'); // Ajuste o caminho conforme necessário
  await generateStories(componentsDir);
};

start();
