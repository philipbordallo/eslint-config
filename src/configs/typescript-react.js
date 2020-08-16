import createConfig from 'src/utilities/createConfig';

export default {
  name: 'typescript-react',
  packageName: 'eslint-config-typescript-react',
  creator: createConfig({
    rules: {
      'eslint/best-practices': true,
      'eslint/errors': true,
      'eslint/es6': true,
      'eslint/node-rules': true,
      'eslint/react': true,
      'eslint/strict-mode': true,
      'eslint/style': true,
      'eslint/variables': true,
      '@typescript-eslint/extension': true,
      '@typescript-eslint/supported': true,
      'jsx-a11y': true,
      'react': true,
    },
    base: {
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        'jsx-a11y',
        'react',
      ],
      settings: {
        react: {
          pragma: 'React',
          version: '16.0',
        },
      },
    },
  }),
};
