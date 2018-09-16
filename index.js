const extendRules = require('./lib/extendRules');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  extends: extendRules({
    'eslint/best-practices': true,
    'eslint/errors': true,
    'eslint/es6': true,
    'eslint/node': true,
    'eslint/react': true,
    'eslint/strict-mode': true,
    'eslint/style': true,
    'eslint/variables': true,
  }),
  rules: {},
};
