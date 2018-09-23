import fs from 'fs';
import path from 'path';

import reactConfigCreator from 'configs/react';
import es5ConfigCreator from 'configs/es5';
import defaultConfigCreator from 'configs/default';

const CONFIGS_PATH = path.resolve(__dirname, 'configs');

const TEMPLATE = '// THIS IS A GENERATED FILE\nmodule.exports={{ data }};';

const CONFIGS = [
  {
    creator: reactConfigCreator,
    name: 'react',
    package: 'eslint-config-react'
  },
  {
    creator: es5ConfigCreator,
    name: 'es5',
    package: 'eslint-config-es5'
  },
  {
    creator: defaultConfigCreator,
    name: 'default',
    package: 'eslint-config'
  }
];

CONFIGS.forEach((config) => {
  const { creator, name } = config;

  creator
    .then((data) => {
      const stringifiedData = JSON.stringify(data);
      const generatedData = TEMPLATE.replace(/{{ data }}/, stringifiedData);
      const file = path.resolve(CONFIGS_PATH, name, 'index.js');
      fs.writeFileSync(file, generatedData);
    })
    .then(
      () => console.log(`  Finished building ${name} config`),
      (error) => console.log(error)
    );
});
