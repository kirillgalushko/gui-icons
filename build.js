import fs from 'fs';
import path from 'path';
import recursiveReaddir from 'recursive-readdir';
import { optimize } from 'svgo';

function toPascalCase(string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), ' ')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

const clearDirectory = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
};

const generateVueComponents = async (inputDir, outputDir) => {
  try {
    clearDirectory(outputDir);
    const svgFiles = await recursiveReaddir(inputDir, ['!*.svg']);
    for (const file of svgFiles) {
      let svgContent = fs.readFileSync(file, 'utf-8');

      const { data: optimizedSvg } = optimize(svgContent, {
        multipass: true,
        plugins: [
          'preset-default',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [
                {
                  style: 'width: 1em; min-width: 1em; height: 1em; min-height: 1em;',
                },
              ],
            },
          },
        ],
      });

      const fileName = path.basename(file, '.svg');
      const pascalCaseFileName = toPascalCase(fileName);

      const relativePath = path.relative(inputDir, path.dirname(file));
      const outputSubDir = path.join(outputDir, relativePath);

      if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
      }

      const vueFileContent = `
<script lang="ts" setup></script>
<template>
  ${optimizedSvg}
</template>
      `;

      const vueFilePath = path.join(outputSubDir, `${pascalCaseFileName}.vue`);

      fs.writeFileSync(vueFilePath, vueFileContent);
      console.log(`Component for ${fileName}.svg created at ${vueFilePath}`);

      const indexFilePath = path.join(outputSubDir, 'index.ts');
      const exportStatement = `export { default as ${pascalCaseFileName} } from './${pascalCaseFileName}.vue';\n`;

      if (fs.existsSync(indexFilePath)) {
        fs.appendFileSync(indexFilePath, exportStatement);
      } else {
        fs.writeFileSync(indexFilePath, exportStatement);
      }
    }

    const allDirs = fs.readdirSync(outputDir, { withFileTypes: true }).filter(item => item.isDirectory()).map(dir => dir.name);
    const buildIndexPath = path.join(outputDir, 'index.ts');
    let buildIndexContent = '';

    allDirs.forEach(dir => {
      buildIndexContent += `export * from './${dir}';\n`;
    });

    fs.writeFileSync(buildIndexPath, buildIndexContent);
    console.log('Generated build/index.ts with re-exports for all components.');

  } catch (error) {
    console.error('Error while generating Vue components:', error);
  }
};

const inputDirectory = './icons';
const outputDirectory = './build';

generateVueComponents(inputDirectory, outputDirectory);
