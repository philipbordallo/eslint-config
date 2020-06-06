import createConfig from 'src/utilities/createConfig';

export default {
  name: 'es5',
  packageName: 'eslint-config-es5',
  creator: createConfig({
    rules: {
      'eslint/best-practices': true,
      'eslint/errors': true,
      'eslint/es6': false,
      'eslint/node-rules': true,
      'eslint/react': false,
      'eslint/strict-mode': true,
      'eslint/style': true,
      'eslint/variables': true,
    },
    base: {
      env: {
        es6: false,
        browser: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: 5,
      },
    },
  }),
};
