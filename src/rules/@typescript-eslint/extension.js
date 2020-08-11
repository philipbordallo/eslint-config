import { OFF } from 'src/states';
import bestPractices from 'src/rules/eslint/best-practices';
import es6 from 'src/rules/eslint/es6';
import errors from 'src/rules/eslint/errors';
import style from 'src/rules/eslint/style';
import variables from 'src/rules/eslint/variables';

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

  // Disabled for now see https://github.com/typescript-eslint/typescript-eslint/issues/1824
  // 'indent': OFF,
  // '@typescript-eslint/indent': style['indent'],

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

  'no-empty-function': OFF,
  '@typescript-eslint/no-empty-function': bestPractices['no-empty-function'],

  'no-extra-parens': OFF,
  '@typescript-eslint/no-extra-parens': errors['no-extra-parens'],

  'no-extra-semi': OFF,
  '@typescript-eslint/no-extra-semi': errors['no-extra-semi'],

  'no-invalid-this': OFF,
  '@typescript-eslint/no-invalid-this': bestPractices['no-invalid-this'],

  'no-loss-of-precision': OFF,
  '@typescript-eslint/no-loss-of-precision': errors['no-loss-of-precision'],

  'no-magic-numbers': OFF,
  '@typescript-eslint/no-magic-numbers': bestPractices['no-magic-numbers'],

  'no-unused-expressions': OFF,
  '@typescript-eslint/no-unused-expressions': bestPractices['no-unused-expressions'],

  'no-unused-vars': OFF,
  '@typescript-eslint/no-unused-vars': variables['no-unused-vars'],

  // Disabled until release of @typescript-eslint/eslit-plugin@4.0.0
  // 'no-use-before-define': OFF,
  // '@typescript-eslint/no-use-before-define': variables['no-use-before-define'],

  'no-useless-constructor': OFF,
  '@typescript-eslint/no-useless-constructor': es6['no-useless-constructor'],

  'quotes': OFF,
  '@typescript-eslint/quotes': style.quotes,

  'require-await': OFF,
  '@typescript-eslint/require-await': bestPractices['require-await'],

  'return-await': OFF,
  '@typescript-eslint/return-await': bestPractices['return-await'],

  'semi': OFF,
  '@typescript-eslint/semi': style.semi,

  'space-before-function-paren': OFF,
  '@typescript-eslint/space-before-function-paren': style['space-before-function-paren'],
};
