import tsExtensionRules from 'src/rules/@typescript-eslint/extension';
import tsSupportedRules from 'src/rules/@typescript-eslint/supported';


export default {
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: process.cwd(),
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint/eslint-plugin',
      ],
      rules: {
        ...tsExtensionRules,
        ...tsSupportedRules,
      },
    },
  ],
};
