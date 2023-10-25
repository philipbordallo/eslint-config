import { OFF } from '#src/constants.js';
import bestPractices from '#src/rules/eslint/best-practices.js';
import es6 from '#src/rules/eslint/es6.js';
import errors from '#src/rules/eslint/errors.js';
import style from '#src/rules/eslint/style.js';
import variables from '#src/rules/eslint/variables.js';

export default {
  'brace-style': OFF,
  '@typescript-eslint/brace-style': style['brace-style'],

  'comma-spacing': OFF,
  '@typescript-eslint/comma-spacing': style['comma-spacing'],

  'default-param-last': OFF,
  '@typescript-eslint/default-param-last': bestPractices['default-param-last'],

  'dot-notation': OFF,
  '@typescript-eslint/dot-notation': bestPractices['dot-notation'],

  'func-call-spacing': OFF,
  '@typescript-eslint/func-call-spacing': style['func-call-spacing'],

  // https://github.com/typescript-eslint/typescript-eslint/issues/1824
  'indent': OFF,
  '@typescript-eslint/indent': style.indent.slice(0, 2),

  'init-declarations': OFF,
  '@typescript-eslint/init-declarations': variables['init-declarations'],

  'keyword-spacing': OFF,
  '@typescript-eslint/keyword-spacing': style['keyword-spacing'],

  'lines-between-class-members': OFF,
  '@typescript-eslint/lines-between-class-members': [...style['lines-between-class-members'], { exceptAfterOverload: true }],

  'no-array-constructor': OFF,
  '@typescript-eslint/no-array-constructor': style['no-array-constructor'],

  'no-dupe-class-members': OFF,
  '@typescript-eslint/no-dupe-class-members': es6['no-dupe-class-members'],

  'no-duplicate-imports': OFF,
  '@typescript-eslint/no-duplicate-imports': es6['no-duplicate-imports'],

  'no-empty-function': OFF,
  '@typescript-eslint/no-empty-function': bestPractices['no-empty-function'],

  'no-extra-parens': OFF,
  '@typescript-eslint/no-extra-parens': errors['no-extra-parens'],

  'no-extra-semi': OFF,
  '@typescript-eslint/no-extra-semi': errors['no-extra-semi'],

  'no-invalid-this': OFF,
  '@typescript-eslint/no-invalid-this': bestPractices['no-invalid-this'],

  'no-loop-func': OFF,
  '@typescript-eslint/no-loop-func': bestPractices['no-loop-func'],

  'no-loss-of-precision': OFF,
  '@typescript-eslint/no-loss-of-precision': errors['no-loss-of-precision'],

  'no-magic-numbers': OFF,
  '@typescript-eslint/no-magic-numbers': bestPractices['no-magic-numbers'],

  'no-redeclare': OFF,
  '@typescript-eslint/no-redeclare': bestPractices['no-redeclare'],

  'no-restricted-imports': OFF,
  '@typescript-eslint/no-restricted-imports': es6['no-restricted-imports'],

  'no-shadow': OFF,
  '@typescript-eslint/no-shadow': [variables['no-shadow'], { ignoreTypeValueShadow: true }],

  'no-throw-literal': OFF,
  '@typescript-eslint/no-throw-literal': bestPractices['no-throw-literal'],

  'no-unused-expressions': OFF,
  '@typescript-eslint/no-unused-expressions': bestPractices['no-unused-expressions'],

  'no-unused-vars': OFF,
  '@typescript-eslint/no-unused-vars': variables['no-unused-vars'],

  'no-use-before-define': OFF,
  '@typescript-eslint/no-use-before-define': variables['no-use-before-define'],

  'no-useless-constructor': OFF,
  '@typescript-eslint/no-useless-constructor': es6['no-useless-constructor'],

  'object-curly-spacing': OFF,
  '@typescript-eslint/object-curly-spacing': style['object-curly-spacing'],

  'padding-line-between-statements': OFF,
  '@typescript-eslint/padding-line-between-statements': style['padding-line-between-statements'],

  'quotes': OFF,
  '@typescript-eslint/quotes': style.quotes,

  'require-await': OFF,
  '@typescript-eslint/require-await': bestPractices['require-await'],

  'return-await': OFF,
  '@typescript-eslint/return-await': bestPractices['return-await'],

  'semi': OFF,
  '@typescript-eslint/semi': style.semi,

  'space-before-blocks': OFF,
  '@typescript-eslint/space-before-blocks': style['space-before-blocks'],

  'space-before-function-paren': OFF,
  '@typescript-eslint/space-before-function-paren': style['space-before-function-paren'],

  'space-infix-ops': OFF,
  '@typescript-eslint/space-infix-ops': style['space-infix-ops'],
};
