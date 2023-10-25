import esLintReactRules from '#src/rules/eslint/react.js';
import jsxA11yRules from '#src/rules/jsx-a11y.js';
import reactRules from '#src/rules/react.js';
import reactHooksRules from '#src/rules/react-hooks.js';


export default {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.{jsx,tsx}'],
      plugins: [
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
      ],
      rules: {
        ...esLintReactRules,
        ...jsxA11yRules,
        ...reactRules,
        ...reactHooksRules,
      },
    },
  ],
};
