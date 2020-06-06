import path from 'path';
import fs from 'fs';

import { CONFIGS_PATH, PACKAGES_PATH } from './paths';

/**
 * @typedef {object} Config
 * @property {string} name
 * @property {string} packageName
 * @property {Promise<object>} creator
 */

const TEMPLATE = '// THIS IS A GENERATED FILE\nmodule.exports={{ data }};';

/**
 * Builds config file to packages folder
 * @param {string} file
 */
async function buildConfig(file) {
  /** @type {{ default: Config }} */
  const { default: config } = await import(`${CONFIGS_PATH}/${file}`);
  const { creator, name, packageName } = config;

  creator
    .then((data) => {
      const stringifiedData = JSON.stringify(data);
      const generatedData = TEMPLATE.replace(/{{ data }}/, stringifiedData);
      const packageFile = path.resolve(PACKAGES_PATH, packageName, 'index.js');

      fs.writeFileSync(packageFile, generatedData);
    })
    .then(() => {
      console.log(`Finished building ${name} config to ./packages/${packageName}`);
    })
    .catch(console.error);
}

fs.readdirSync(CONFIGS_PATH)
  .filter(file => file !== '.DS_Store')
  .forEach(buildConfig);
