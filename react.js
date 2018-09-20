const extendRules = require('./lib/extendRules');

module.exports = {
  extends: extendRules({
    'eslint/best-practices': true,
    'eslint/errors': true,
    'eslint/es6': true,
    'eslint/node': true,
    'eslint/react': true,
    'eslint/strict-mode': true,
    'eslint/style': true,
    'eslint/variables': true,
    'jsx-a11y': true,
    'react': true,
  }),
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '16.0'
    }
  },
  rules: {},
};
