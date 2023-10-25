import jestRules from '#src/rules/jest.js';
import jestDomRules from '#src/rules/jest-dom.js';


export default {
  overrides: [
    {
      files: ['**/*.test.*'],
      plugins: [
        'eslint-plugin-jest',
      ],
      env: {
        jest: true,
      },
      rules: {
        ...jestRules,
      },
    },
    {
      files: ['**/*.test.{jsx,tsx}'],
      plugins: [
        'eslint-plugin-jest-dom',
      ],
      rules: {
        ...jestDomRules,
      },
    },
  ],
};
