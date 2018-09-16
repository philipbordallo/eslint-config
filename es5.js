const extendRules = require('./lib/extendRules');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 5,
  },
  extends: extendRules({
    'eslint/best-practices': true,
    'eslint/errors': true,
    'eslint/es6': false,
    'eslint/node': true,
    'eslint/react': false,
    'eslint/strict-mode': true,
    'eslint/style': true,
    'eslint/variables': true,
  }),
  rules: {},
};
