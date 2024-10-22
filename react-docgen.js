/* eslint-disable  */
import('react-docgen')
  .then((reactDocgen) => {
    const fs = require('fs');

    const componentPath = './src/library/components/atoms/Title.js';
    const componentCode = fs.readFileSync(componentPath, 'utf-8');

    try {
      const result = reactDocgen.parse(componentCode);
      console.log("-----------------------------");

      function generateStorybookConfig(data) {
        const component = data[0]; // Considerando um único componente na lista

        const argTypes = {};
        const defaultArgs = {};

        for (const [propName, propDetails] of Object.entries(component.props)) {
          argTypes[propName] = {
            control: getControlType(propDetails.type.name),
            description: propDetails.description,
          };

          if (propDetails.defaultValue) {
            defaultArgs[propName] = parseDefaultValue(propDetails.defaultValue.value);
          }
        }

        return {
          title: `Components/${component.displayName}`,
          component: component.displayName,
          argTypes,
          defaultArgs,
        };
      }

      // Função para determinar o tipo de controle no Storybook
      function getControlType(type) {
        switch (type) {
          case 'string':
            return 'text';
          case 'bool':
            return 'boolean';
          case 'object':
            return 'object';
          case 'node':
            return 'text';
          default:
            return 'text';
        }
      }

      // Função para converter valores padrão para o formato correto
      function parseDefaultValue(value) {
        try {
          return JSON.parse(value.replace(/'/g, '"')); // Corrige strings JSON mal formatadas
        } catch {
          return value;
        }
      }

      // Geração da configuração do Storybook
      const storybookConfig = generateStorybookConfig(result);

      // Exibindo a configuração
      console.log(`// ${storybookConfig.title}.stories.jsx`);
      console.log(`import ${storybookConfig.component} from './${storybookConfig.component}';\n`);

      console.log(`export default {`);
      console.log(`  title: '${storybookConfig.title}',`);
      console.log(`  component: ${storybookConfig.component},`);
      console.log(`  argTypes: ${JSON.stringify(storybookConfig.argTypes, null, 2)},`);
      console.log(`};\n`);

      console.log(`const Template = (args) => <${storybookConfig.component} {...args} />;\n`);

      console.log(`export const Default = Template.bind({});`);
      console.log(`Default.args = ${JSON.stringify(storybookConfig.defaultArgs, null, 2)};`);
    } catch (error) {
      console.error('Erro ao gerar a documentação:', error);
    }
  })
  .catch((err) => {
    console.error('Erro ao carregar o módulo:', err);
  });


  // adaptar generateKey

  // comecar usando só o Title pra imprimir

  // qd der criar o arquivo e depois adaptar para tudo