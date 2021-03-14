import path from 'path';
import fs from 'fs';

import Mustache from 'mustache';

import {
  CONFIGS_PATH, PACKAGES_PATH, ROOT_PATH, SRC_PATH,
} from 'file.config';
import { getPackageName, readConfigs } from './toolbox';


// Disable HTML escaping for Mustache
Mustache.escape = text => text;

const CONFIG_TEMPLATE = '// THIS IS A GENERATED FILE\nmodule.exports={{ data }};';

const README_TEMPLATE = fs.readFileSync(
  path.resolve(SRC_PATH, 'README.template.md'), { encoding: 'utf-8' },
);

const TOC_TEMPLATE = '# eslint-config\n> Personal ESLint configs\n';

/**
 * Create config file (index.js) in packages folder
 * @param {string} file
 */
async function buildConfig(file) {
  const configFile = path.resolve(CONFIGS_PATH, file);
  const { default: config } = await import(configFile);

  const { longName } = getPackageName(file);

  const stringifiedData = JSON.stringify(config);
  const generatedData = CONFIG_TEMPLATE.replace(/{{ data }}/, stringifiedData);
  const exportFile = path.resolve(PACKAGES_PATH, longName, 'index.js');

  fs.promises.writeFile(exportFile, generatedData);
}

/**
 * Create README.md file in packages folder.
 * @param {string} file
 */
async function buildReadMe(file) {
  const { longName, shortName } = getPackageName(file);

  const packageFile = path.resolve(PACKAGES_PATH, longName, 'package.json');
  const { default: pkg } = await import(packageFile);

  const view = {
    name: pkg.name,
    description: pkg.description,
    peer: 'test',
    peerDependencies: Object.keys(pkg.peerDependencies).map(peer => ({ peer })),
    configFile: `src/configs/${shortName}.js`,
    configName: shortName !== 'default' ? String(pkg.name).replace(/eslint-config-?/, '') : null,
  };
  const output = Mustache.render(README_TEMPLATE, view);
  const readMeFile = path.resolve(PACKAGES_PATH, longName, 'README.md');

  fs.promises.writeFile(readMeFile, output);
}

/**
 * Create a table of contents in the main README.md.
 * @param {string} acc
 * @param {string} file
 */
function buildTOC(acc, file) {
  const { longName } = getPackageName(file);

  return acc.concat(`\n- [@philipbordallo/${longName}](./packages/${longName})`);
}

const configs = readConfigs();

configs.forEach((file) => {
  const { longName, shortName } = getPackageName(file);

  Promise.all([
    buildConfig(file),
    buildReadMe(file),
  ]).then(() => {
    console.log(`Finished building ${shortName} config to ./packages/${longName}`);
  });
});

const tableOfContents = configs.reduce(buildTOC, TOC_TEMPLATE);
fs.writeFileSync(path.resolve(ROOT_PATH, 'README.md'), tableOfContents);
