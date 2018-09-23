import { ERROR } from 'states';
import createConfig from 'utilities/createConfig';

export default createConfig({
  rules: {
    'eslint/best-practices': true,
    'eslint/errors': true,
    'eslint/es6': true,
    'eslint/node-rules': true,
    'eslint/react': true,
    'eslint/strict-mode': true,
    'eslint/style': true,
    'eslint/variables': true,
    'jsx-a11y': true,
    'react': true,
  },
  base: {
    env: {
      es6: true,
      browser: true,
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2018,
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
    rules: {
      'class-methods-use-this': [ERROR, {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
      }],
    },
  },
});
