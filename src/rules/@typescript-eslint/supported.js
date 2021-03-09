import { ERROR, OFF } from 'src/states';

export default {
  '@typescript-eslint/adjacent-overload-signatures': ERROR,
  '@typescript-eslint/array-type': ERROR,
  '@typescript-eslint/await-thenable': ERROR,
  '@typescript-eslint/ban-ts-comment': ERROR,
  '@typescript-eslint/ban-tslint-comment': ERROR,
  '@typescript-eslint/ban-types': OFF,
  '@typescript-eslint/class-literal-property-style': OFF,
  '@typescript-eslint/consistent-type-assertions': ERROR,
  '@typescript-eslint/consistent-type-definitions': OFF,
  '@typescript-eslint/explicit-function-return-type': ERROR,
  '@typescript-eslint/explicit-member-accessibility': OFF,
  '@typescript-eslint/explicit-module-boundary-types': ERROR,
  '@typescript-eslint/member-delimiter-style': [ERROR, {
    multiline: {
      delimiter: 'comma',
      requireLast: true,
    },
    singleline: {
      delimiter: 'comma',
      requireLast: false,
    },
  }],
  '@typescript-eslint/member-ordering': OFF,
  '@typescript-eslint/method-signature-style': ERROR,
  '@typescript-eslint/naming-convention': OFF,
  '@typescript-eslint/no-base-to-string': ERROR,
  '@typescript-eslint/no-confusing-non-null-assertion': ERROR,
  '@typescript-eslint/no-dynamic-delete': ERROR,
  '@typescript-eslint/no-empty-interface': ERROR,
  '@typescript-eslint/no-explicit-any': ERROR,
  '@typescript-eslint/no-extra-non-null-assertion': ERROR,
  '@typescript-eslint/no-extraneous-class': ERROR,
  '@typescript-eslint/no-floating-promises': ERROR,
  '@typescript-eslint/no-for-in-array': ERROR,
  '@typescript-eslint/no-implied-eval': ERROR,
  '@typescript-eslint/no-inferrable-types': ERROR,
  '@typescript-eslint/no-invalid-void-type': ERROR,
  '@typescript-eslint/no-misused-new': ERROR,
  '@typescript-eslint/no-misused-promises': ERROR,
  '@typescript-eslint/no-namespace': ERROR,
  '@typescript-eslint/no-non-null-asserted-optional-chain': ERROR,
  '@typescript-eslint/no-non-null-assertion': ERROR,
  '@typescript-eslint/no-parameter-properties': ERROR,
  '@typescript-eslint/no-require-imports': ERROR,
  '@typescript-eslint/no-this-alias': ERROR,
  '@typescript-eslint/no-throw-literal': ERROR,
  '@typescript-eslint/no-type-alias': OFF,
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ERROR,
  '@typescript-eslint/no-unnecessary-condition': ERROR,
  '@typescript-eslint/no-unnecessary-qualifier': ERROR,
  '@typescript-eslint/no-unnecessary-type-arguments': ERROR,
  '@typescript-eslint/no-unnecessary-type-assertion': ERROR,
  '@typescript-eslint/no-unsafe-assignment': ERROR,
  '@typescript-eslint/no-unsafe-call': ERROR,
  '@typescript-eslint/no-unsafe-member-access': ERROR,
  '@typescript-eslint/no-unsafe-return': ERROR,
  // See @typescript-eslint/no-unused-vars
  '@typescript-eslint/no-unused-vars-experimental': OFF,
  '@typescript-eslint/no-var-requires': ERROR,
  '@typescript-eslint/prefer-as-const': ERROR,
  '@typescript-eslint/prefer-enum-initializers': ERROR,
  '@typescript-eslint/prefer-for-of': ERROR,
  '@typescript-eslint/prefer-function-type': OFF,
  '@typescript-eslint/prefer-includes': ERROR,
  '@typescript-eslint/prefer-literal-enum-member': ERROR,
  '@typescript-eslint/prefer-namespace-keyword': ERROR,
  '@typescript-eslint/prefer-nullish-coalescing': ERROR,
  '@typescript-eslint/prefer-optional-chain': ERROR,
  '@typescript-eslint/prefer-readonly': OFF,
  '@typescript-eslint/prefer-readonly-parameter-types': OFF,
  '@typescript-eslint/prefer-reduce-type-parameter': ERROR,
  '@typescript-eslint/prefer-regexp-exec': ERROR,
  '@typescript-eslint/prefer-string-starts-ends-with': ERROR,
  '@typescript-eslint/prefer-ts-expect-error': ERROR,
  '@typescript-eslint/promise-function-async': OFF,
  '@typescript-eslint/require-array-sort-compare': ERROR,
  '@typescript-eslint/restrict-plus-operands': ERROR,
  '@typescript-eslint/restrict-template-expressions': OFF,
  '@typescript-eslint/strict-boolean-expressions': OFF,
  '@typescript-eslint/switch-exhaustiveness-check': ERROR,
  '@typescript-eslint/triple-slash-reference': ERROR,
  '@typescript-eslint/type-annotation-spacing': ERROR,
  '@typescript-eslint/typedef': OFF,
  '@typescript-eslint/unbound-method': ERROR,
  '@typescript-eslint/unified-signatures': ERROR,
};