const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  rules: {
    'for-direction': ERROR,
    'getter-return': [ERROR, { allowImplicit: true }],
    'no-async-promise-executor': ERROR,
    'no-await-in-loop': ERROR,
    'no-compare-neg-zero': ERROR,
    'no-cond-assign': [ERROR, 'always'],
    'no-console': WARN,
    'no-constant-condition': WARN,
    'no-control-regex': ERROR,
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': ERROR,
    'no-empty': ERROR,
    'no-empty-character-class': ERROR,
    'no-ex-assign': ERROR,
    'no-extra-boolean-cast': ERROR,
    'no-extra-parens': [ERROR, 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }], // TODO: Check if replaced with react/wrap-multilines,
    'no-extra-semi': ERROR,
    'no-func-assign': ERROR,
    'no-inner-declarations': ERROR,
    'no-invalid-regexp': ERROR,
    'no-irregular-whitespace': ERROR,
    'no-misleading-character-class': ERROR,
    'no-obj-calls': ERROR,
    'no-prototype-builtins': ERROR,
    'no-regex-spaces': ERROR,
    'no-sparse-arrays': ERROR,
    'no-template-curly-in-string': ERROR,
    'no-unexpected-multiline': ERROR,
    'no-unreachable': ERROR,
    'no-unsafe-finally': ERROR,
    'no-unsafe-negation': ERROR,
    'require-atomic-updates': ERROR,
    'use-isnan': ERROR,
    'valid-jsdoc': OFF, // TODO: Enable
    'valid-typeof': ERROR,
  },
};
