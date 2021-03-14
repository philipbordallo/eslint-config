import path from 'path';
import fs from 'fs';

import Mustache from 'mustache';

import { CONFIGS_PATH, PACKAGES_PATH, SRC_PATH } from 'file.config';
import { getPackageName, readConfigs } from './toolbox';


// Disable HTML escaping for Mustache
Mustache.escape = text => text;

const TEMPLATE = '// THIS IS A GENERATED FILE\nmodule.exports={{ data }};';

/**
 * Builds config file to packages folder
 * @param {string} file
 */
async function buildConfig(file) {
  const configFile = path.resolve(CONFIGS_PATH, file);
  const { default: config } = await import(configFile);

  const { longName, shortName } = getPackageName(file);

  const stringifiedData = JSON.stringify(config);
  const generatedData = TEMPLATE.replace(/{{ data }}/, stringifiedData);
  const exportFile = path.resolve(PACKAGES_PATH, longName, 'index.js');

  fs.writeFileSync(exportFile, generatedData);
  console.log(`Finished building ${shortName} config to ./packages/${longName}`);
}

async function buildReadMe(file) {
  const template = fs.readFileSync(path.resolve(SRC_PATH, 'README.template.md'), { encoding: 'utf-8' });
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
  const output = Mustache.render(template, view);
  const readMeFile = path.resolve(PACKAGES_PATH, longName, 'README.md');

  fs.writeFileSync(readMeFile, output);
}

readConfigs((file) => {
  buildConfig(file);
  buildReadMe(file);
});
