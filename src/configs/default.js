import createConfig from 'utilities/createConfig';

export default {
  name: 'default',
  packageName: 'eslint-config',
  creator: createConfig({
    rules: {
      'eslint/best-practices': true,
      'eslint/errors': true,
      'eslint/es6': true,
      'eslint/node-rules': true,
      'eslint/react': true,
      'eslint/strict-mode': true,
      'eslint/style': true,
      'eslint/variables': true,
    },
    base: {
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
      },
    },
  }),
};
