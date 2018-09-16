const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  rules: {
    'array-bracket-newline': [ERROR, 'consistent'],
    'array-bracket-spacing': [ERROR, 'never'],
    'array-element-newline': [ERROR, 'consistent'],
    'block-spacing': ERROR,
    'brace-style': [ERROR, 'stroustrup', { allowSingleLine: true }],
    'camelcase': ERROR,
    'capitalized-comments': OFF,
    'comma-dangle': [ERROR, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'comma-spacing': [ERROR, { before: false, after: true }],
    'comma-style': [ERROR, 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],
    'computed-property-spacing': [ERROR, 'never'],
    'consistent-this': OFF,
    'eol-last': [ERROR, 'always'],
    'func-call-spacing': [ERROR, 'never'],
    'func-name-matching': OFF,
    'func-names': [WARN, 'as-needed'],
    'func-style': OFF,
    'function-paren-newline': [ERROR, 'consistent'],
    'id-blacklist': OFF,
    'id-length': OFF,
    'id-match': OFF,
    'implicit-arrow-linebreak': [ERROR, 'beside'],
    'indent': [ERROR, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
    }],
    'jsx-quotes': OFF, // See rules/eslint/react
    'key-spacing': [ERROR, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
    'keyword-spacing': [ERROR, {
      before: true,
      after: true,
    }],
    'line-comment-position': OFF,
    'linebreak-style': [ERROR, 'unix'],
    'lines-around-comment': OFF,
    'lines-between-class-members': [ERROR, 'always'],
    'max-depth': OFF,
    'max-len': [ERROR, 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'max-lines': OFF,
    'max-lines-per-function': OFF,
    'max-nested-callbacks': OFF,
    'max-params': [ERROR, 3],
    'max-statements': [OFF, 10],
    'max-statements-per-line': [OFF, { max: 1 }],
    'multiline-comment-style': OFF,
    'multiline-ternary': OFF,
    'new-cap': [ERROR, {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: [],
    }],
    'new-parens': ERROR,
    'newline-per-chained-call': [ERROR, { ignoreChainWithDepth: 2 }],
    'no-array-constructor': ERROR,
    'no-bitwise': ERROR,
    'no-continue': ERROR,
    'no-inline-comments': OFF,
    'no-lonely-if': ERROR,
    'no-mixed-operators': [ERROR, {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    }],
    'no-mixed-spaces-and-tabs': ERROR,
    'no-multi-assign': ERROR,
    'no-multiple-empty-lines': [ERROR, { max: 2, maxEOF: 0 }],
    'no-negated-condition': OFF,
    'no-nested-ternary': ERROR,
    'no-new-object': ERROR,
    'no-plusplus': ERROR,
    'no-restricted-syntax': [
      ERROR,
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-tabs': ERROR,
    'no-ternary': OFF,
    'no-trailing-spaces': [ERROR, {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'no-underscore-dangle': [ERROR, {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: false,
    }],
    'no-unneeded-ternary': [ERROR, { defaultAssignment: false }],
    'no-whitespace-before-property': ERROR,
    'nonblock-statement-body-position': [ERROR, 'beside', { overrides: {} }],
    'object-curly-newline': [ERROR, {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
    'object-curly-spacing': [ERROR, 'always'],
    'object-property-newline': [ERROR, {
      allowAllPropertiesOnSameLine: true,
    }],
    'one-var': [ERROR, 'never'],
    'one-var-declaration-per-line': [ERROR, 'always'],
    'operator-assignment': [ERROR, 'always'],
    'operator-linebreak': [ERROR, 'before', { overrides: { '=': 'none' } }],
    'padded-blocks': [ERROR, {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }],
    'padding-line-between-statements': OFF,
    'prefer-object-spread': ERROR,
    'quote-props': [ERROR, 'consistent-as-needed'],
    'quotes': [ERROR, 'single'],
    'require-jsdoc': OFF,
    'semi': [ERROR, 'always'],
    'semi-spacing': [ERROR, { before: false, after: true }],
    'semi-style': [ERROR, 'last'],
    'sort-keys': [OFF, 'asc', { caseSensitive: false, natural: true }],
    'sort-vars': OFF,
    'space-before-blocks': ERROR,
    'space-before-function-paren': [ERROR, 'never'],
    'space-in-parens': [ERROR, 'never'],
    'space-infix-ops': ERROR,
    'space-unary-ops': [ERROR, {
      words: true,
      nonwords: false,
      overrides: {},
    }],
    'spaced-comment': [ERROR, 'always'],
    'switch-colon-spacing': [ERROR, { after: true, before: false }],
    'template-tag-spacing': [ERROR, 'never'],
    'unicode-bom': [ERROR, 'never'],
    'wrap-regex': OFF,
  },
};
