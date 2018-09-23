import { OFF, ERROR } from 'states';

export default {
  'arrow-body-style': [ERROR, 'as-needed', {
    requireReturnForObjectLiteral: false,
  }],
  'arrow-parens': [ERROR, 'as-needed', {
    requireForBlockBody: true,
  }],
  'arrow-spacing': [ERROR, {
    before: true,
    after: true,
  }],
  'constructor-super': ERROR,
  'generator-star-spacing': [ERROR, {
    before: false,
    after: true,
    anonymous: 'neither',
    method: {
      before: true,
      after: true,
    },
  }],
  'no-class-assign': ERROR,
  'no-confusing-arrow': [ERROR, { allowParens: true }],
  'no-const-assign': ERROR,
  'no-dupe-class-members': ERROR,
  'no-duplicate-imports': OFF, // replaced by 'import/no-duplicates'
  'no-new-symbol': ERROR,
  'no-restricted-imports': OFF,
  'no-this-before-super': ERROR,
  'no-useless-computed-key': ERROR,
  'no-useless-constructor': ERROR,
  'no-useless-rename': ERROR,
  'no-var': ERROR,
  'object-shorthand': [ERROR, 'always', {
    ignoreConstructors: false,
    avoidQuotes: true,
    avoidExplicitReturnArrows: true,
  }],
  'prefer-arrow-callback': ERROR,
  'prefer-const': [ERROR, {
    destructuring: 'any',
    ignoreReadBeforeAssign: true,
  }],
  'prefer-destructuring': [
    ERROR,
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'prefer-numeric-literals': ERROR,
  'prefer-rest-params': ERROR,
  'prefer-spread': ERROR,
  'prefer-template': ERROR,
  'require-yield': ERROR,
  'rest-spread-spacing': [ERROR, 'never'],
  'sort-imports': OFF,
  'symbol-description': ERROR,
  'template-curly-spacing': ERROR,
  'yield-star-spacing': [ERROR, 'after'],
};
