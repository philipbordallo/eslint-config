import htmlRules from '#src/rules/html.js';

export default {
  overrides: [
    {
      files: ['**/*.html'],
      plugins: [
        '@html-eslint/eslint-plugin',
      ],
      parser: '@html-eslint/parser',
      rules: {
        ...htmlRules,
      },
    },
  ],
};
