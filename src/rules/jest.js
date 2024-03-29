import { ERROR, OFF, WARN } from 'src/constants';

export default {
  'jest/consistent-test-it': ERROR,
  'jest/expect-expect': ERROR,
  'jest/max-nested-describe': ERROR,
  'jest/no-alias-methods': ERROR,
  'jest/no-commented-out-tests': ERROR,
  'jest/no-conditional-expect': ERROR,
  'jest/no-conditional-in-test': OFF,
  'jest/no-deprecated-functions': WARN,
  'jest/no-disabled-tests': WARN,
  'jest/no-done-callback': OFF,
  'jest/no-duplicate-hooks': ERROR,
  'jest/no-export': ERROR,
  'jest/no-focused-tests': WARN,
  'jest/no-hooks': OFF,
  'jest/no-identical-title': ERROR,
  'jest/no-if': OFF,
  'jest/no-interpolation-in-snapshots': ERROR,
  'jest/no-jasmine-globals': ERROR,
  'jest/no-jest-import': ERROR,
  'jest/no-large-snapshots': OFF,
  'jest/no-mocks-import': ERROR,
  'jest/no-restricted-matchers': OFF,
  'jest/no-standalone-expect': ERROR,
  'jest/no-test-prefixes': OFF,
  'jest/no-test-return-statement': ERROR,
  'jest/prefer-called-with': ERROR,
  'jest/prefer-comparison-matcher': ERROR,
  'jest/prefer-equality-matcher': ERROR,
  'jest/prefer-expect-assertions': OFF,
  'jest/prefer-expect-resolves': ERROR,
  'jest/prefer-hooks-on-top': ERROR,
  'jest/prefer-lowercase-title': [ERROR, { ignore: ['describe', 'test'] }],
  'jest/prefer-snapshot-hint': OFF,
  'jest/prefer-spy-on': OFF,
  'jest/prefer-strict-equal': ERROR,
  'jest/prefer-to-be': ERROR,
  'jest/prefer-to-contain': ERROR,
  'jest/prefer-to-have-length': ERROR,
  'jest/prefer-todo': WARN,
  'jest/require-hook': ERROR,
  'jest/require-to-throw-message': ERROR,
  'jest/require-top-level-describe': ERROR,
  'jest/unbound-method': OFF,
  'jest/valid-describe-callback': ERROR,
  'jest/valid-expect': ERROR,
  'jest/valid-expect-in-promise': ERROR,
  'jest/valid-title': [ERROR, { ignoreTypeOfDescribeName: true }],
};
