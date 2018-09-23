import fs from 'fs';
import path from 'path';

import reactConfigCreator from 'configs/react';
import es5ConfigCreator from 'configs/es5';
import defaultConfigCreator from 'configs/default';

const CONFIGS_PATH = path.resolve(__dirname, 'packages');

const TEMPLATE = '// THIS IS A GENERATED FILE\nmodule.exports={{ data }};';

const CONFIGS = [
  {
    creator: reactConfigCreator,
    name: 'react',
    packageName: 'eslint-config-react'
  },
  {
    creator: es5ConfigCreator,
    name: 'es5',
    packageName: 'eslint-config-es5'
  },
  {
    creator: defaultConfigCreator,
    name: 'default',
    packageName: 'eslint-config'
  }
];

CONFIGS.forEach((config) => {
  const { creator, name, packageName } = config;

  creator
    .then((data) => {
      const stringifiedData = JSON.stringify(data);
      const generatedData = TEMPLATE.replace(/{{ data }}/, stringifiedData);
      const file = path.resolve(CONFIGS_PATH, packageName, 'index.js');
      fs.writeFileSync(file, generatedData);
    })
    .then(
      () => console.log(`  Finished building ${name} config to ./packages/${packageName}`),
      (error) => console.log(error)
    );
});
