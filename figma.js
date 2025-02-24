const fs = require('fs');
const path = require('path');

// Função para converter JS em Markdown
function convertJsToMd(inputFilePath, outputFilePath) {
  try {
    // Lê o conteúdo do arquivo JS
    const jsCode = fs.readFileSync(inputFilePath, 'utf8');

    // Formata como Markdown
    const markdownContent = `\`\`\`javascript\n${jsCode}\n\`\`\``;

    // Escreve o conteúdo Markdown no arquivo de saída
    fs.writeFileSync(outputFilePath, markdownContent, 'utf8');

    console.log(`Arquivo convertido com sucesso! Markdown salvo em: ${outputFilePath}`);
  } catch (error) {
    console.error('Erro ao converter o arquivo:', error.message);
  }
}

// Função para processar todos os arquivos de um diretório, incluindo subdiretórios
function processDirectory(directoryPath, outputDirectory) {
  try {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      const fullPath = path.join(directoryPath, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        // Cria a estrutura de subdiretórios no diretório de saída
        const subOutputDirectory = path.join(outputDirectory, file);
        if (!fs.existsSync(subOutputDirectory)) {
          fs.mkdirSync(subOutputDirectory);
        }
        processDirectory(fullPath, subOutputDirectory);
      } else if (stats.isFile() && path.extname(file) === '.js') {
        const outputFilePath = path.join(outputDirectory, `${path.basename(file, '.js')}.md`);
        convertJsToMd(fullPath, outputFilePath);
      }
    });

    console.log('Todos os arquivos e pastas foram processados com sucesso!');
  } catch (error) {
    console.error('Erro ao processar o diretório:', error.message);
  }
}

// Caminhos de exemplo (substitua pelos seus diretórios)
const inputDirectory = path.resolve(__dirname, 'src'); // Diretório de entrada com arquivos JS
const outputDirectory = path.resolve(__dirname, 'markdown'); // Diretório de saída para arquivos Markdown

// Certifique-se de que o diretório de saída existe
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Processa todos os arquivos JS no diretório de entrada, incluindo subdiretórios
processDirectory(inputDirectory, outputDirectory);
