import { OFF, WARN, ERROR } from 'src/constants';

export default {
  'accessor-pairs': ERROR,
  'array-callback-return': [ERROR, {
    allowImplicit: true,
    checkForEach: true,
  }],
  'block-scoped-var': ERROR,
  'complexity': OFF,
  'class-methods-use-this': [ERROR, {
    exceptMethods: [],
  }],
  'consistent-return': ERROR,
  'curly': [ERROR, 'multi-line'],
  'default-case': ERROR,
  'default-param-last': ERROR,
  'dot-notation': [ERROR, {
    allowKeywords: true,
  }],
  'dot-location': [ERROR, 'property'],
  'eqeqeq': [ERROR, 'always', {
    null: 'ignore',
  }],
  'guard-for-in': ERROR,
  'max-classes-per-file': OFF,
  'no-alert': WARN,
  'no-caller': ERROR,
  'no-case-declarations': ERROR,
  'no-div-regex': ERROR,
  'no-else-return': [ERROR, { allowElseIf: false }],
  'no-empty-function': [ERROR, {
    allow: [
      'arrowFunctions',
      'functions',
      'methods',
    ],
  }],
  'no-empty-pattern': ERROR,
  'no-eq-null': OFF,
  'no-eval': ERROR,
  'no-extend-native': ERROR,
  'no-extra-bind': ERROR,
  'no-extra-label': ERROR,
  'no-fallthrough': ERROR,
  'no-floating-decimal': ERROR,
  'no-global-assign': [ERROR, { exceptions: [] }],
  'no-implicit-coercion': [ERROR, {
    boolean: true,
    number: true,
    string: true,
    allow: [],
  }],
  'no-implicit-globals': OFF,
  'no-implied-eval': ERROR,
  'no-invalid-this': OFF,
  'no-iterator': ERROR,
  'no-labels': [ERROR, { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': ERROR,
  'no-loop-func': ERROR,
  'no-magic-numbers': [OFF, {
    ignore: [],
    ignoreArrayIndexes: true,
    enforceConst: true,
    detectObjects: false,
  }],
  'no-multi-spaces': [ERROR, {
    ignoreEOLComments: false,
  }],
  'no-multi-str': ERROR,
  'no-new': ERROR,
  'no-new-func': ERROR,
  'no-new-wrappers': ERROR,
  'no-octal': ERROR,
  'no-octal-escape': ERROR,
  'no-param-reassign': [ERROR, {
    props: true,
    ignorePropertyModificationsFor: [
      'acc', // for reduce accumulators
      'accumulator', // for reduce accumulators
      'ctx', // for Koa routing
      'req', // for Express requests
      'request', // for Express requests
      'res', // for Express responses
      'response', // for Express responses
    ],
  }],
  'no-proto': ERROR,
  'no-redeclare': [ERROR, { builtinGlobals: true }],
  'no-restricted-properties': [
    ERROR,
    ...['global', 'self', 'window'].map(object => ({
      object,
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    })),
    ...['global', 'self', 'window'].map(object => ({
      object,
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    })),
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],
  'no-return-assign': [ERROR, 'always'],
  'no-return-await': ERROR,
  'no-script-url': ERROR,
  'no-self-assign': [ERROR, {
    props: true,
  }],
  'no-self-compare': ERROR,
  'no-sequences': ERROR,
  'no-throw-literal': ERROR,
  'no-unmodified-loop-condition': ERROR,
  'no-unused-expressions': [ERROR, {
    allowShortCircuit: true,
    allowTernary: true,
    allowTaggedTemplates: false,
  }],
  'no-unused-labels': ERROR,
  'no-useless-call': OFF,
  'no-useless-concat': ERROR,
  'no-useless-catch': ERROR,
  'no-useless-escape': ERROR,
  'no-useless-return': ERROR,
  'no-void': ERROR,
  'no-warning-comments': [WARN, {
    terms: ['todo', 'fixme', 'fix', 'xxx'],
    location: 'start',
  }],
  'no-with': ERROR,
  'prefer-promise-reject-errors': [ERROR, { allowEmptyReject: true }],
  'radix': ERROR,
  'require-await': OFF,
  'require-unicode-regexp': OFF,
  'vars-on-top': ERROR,
  'wrap-iife': [ERROR, 'inside', { functionPrototypeMethods: false }],
  'yoda': ERROR,
};
