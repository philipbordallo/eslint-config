import { OFF, ERROR } from 'src/constants';

import restrictedGlobals from 'eslint-restricted-globals';

export default {
  'init-declarations': OFF,
  'no-delete-var': ERROR,
  'no-label-var': ERROR,
  'no-restricted-globals': [ERROR, 'isFinite', 'isNaN'].concat(restrictedGlobals),
  'no-shadow': ERROR,
  'no-shadow-restricted-names': ERROR,
  'no-undef': ERROR,
  'no-undef-init': ERROR,
  'no-undefined': ERROR,
  'no-unused-vars': [ERROR, {
    vars: 'all',
    args: 'after-used',
    ignoreRestSiblings: true,
  }],
  'no-use-before-define': [ERROR, {
    functions: true,
    classes: true,
    variables: true,
  }],
};
