const extendRules = require('./lib/extendRules');

module.exports = {
  extends: extendRules({
    'eslint/best-practices': true,
    'eslint/errors': true,
    'eslint/es6': false,
    'eslint/node': true,
    'eslint/react': false,
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
    ecmaVersion: 5,
  },
  rules: {},
};
