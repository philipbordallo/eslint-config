import fs from 'fs';
import path from 'path';

const CONFIGS_PATH = path.resolve(__dirname, 'src', 'configs');
const PACKAGES_PATH = path.resolve(__dirname, 'packages');

const TEMPLATE = '// THIS IS A GENERATED FILE\nmodule.exports={{ data }};';

/**
 * Builds config file to packages folder
 *
 * @param {string} file - Config file
 */
async function buildConfig(file) {
  const { default: config } = await import(`${CONFIGS_PATH}/${file}`);
  const { creator, name, packageName } = config;

  creator
    .then((data) => {
      const stringifiedData = JSON.stringify(data);
      const generatedData = TEMPLATE.replace(/{{ data }}/, stringifiedData);
      const file = path.resolve(PACKAGES_PATH, packageName, 'index.js');
      fs.writeFileSync(file, generatedData);
    })
    .then(
      () => console.log(`  Finished building ${name} config to ./packages/${packageName}`),
      (error) => console.log(error)
    );
}

fs.readdirSync(CONFIGS_PATH)
  .filter((file) => file !== '.DS_Store')
  .forEach(buildConfig);
