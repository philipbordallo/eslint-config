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
    'jsx-a11y': false,
    'react': false,
  }),
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  rules: {},
};
