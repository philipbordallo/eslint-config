const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  rules: {
    'react/boolean-prop-naming': ERROR,
    'react/button-has-type': [ERROR, {
      button: true,
      submit: true,
      reset: false,
    }],
    'react/default-props-match-prop-types': [ERROR, { allowRequiredDefaults: false }],
    'react/destructuring-assignment': [ERROR, 'always'],
    'react/display-name': OFF,
    'react/forbid-dom-props': OFF,
    'react/forbid-prop-types': [ERROR, {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    'react/jsx-boolean-value': [ERROR, 'never', { always: [] }],
    'react/jsx-child-element-spacing': OFF,
    'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],
    'react/jsx-closing-tag-location': ERROR,
    'react/jsx-curly-brace-presence': [ERROR, { props: 'never', children: 'never' }],
    'react/jsx-curly-spacing': [ERROR, 'always', {
      allowMultiline: true,
      spacing: { objectLiterals: 'never' },
    }],
    'react/jsx-handler-names': [ERROR, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-key': OFF,
    'react/jsx-max-props-per-line': [ERROR, { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': [ERROR, {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],
    'react/jsx-no-duplicate-props': [ERROR, { ignoreCase: true }],
    'react/jsx-no-literals': OFF,
    'react/jsx-no-undef': ERROR,
    'react/jsx-pascal-case': [ERROR, {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/sort-prop-types': [OFF, {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
      sortShapeProp: true,
    }],
    'react/jsx-sort-props': [OFF, {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],
    'react/jsx-sort-default-props': [OFF, {
      ignoreCase: true,
    }],
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    'react/no-danger': WARN,
    'react/no-deprecated': ERROR,
    'react/no-did-mount-set-state': OFF,
    'react/no-did-update-set-state': OFF,
    'react/no-will-update-set-state': OFF,
    'react/no-direct-mutation-state': ERROR,
    'react/no-is-mounted': ERROR,
    'react/no-multi-comp': [ERROR, {
      ignoreStateless: true,
    }],
    'react/no-set-state': OFF,
    'react/no-string-refs': ERROR,
    'react/no-unknown-property': ERROR,
    'react/prefer-es6-class': [ERROR, 'always'],
    'react/prefer-stateless-function': [ERROR, {
      ignorePureComponents: true,
    }],
    'react/prop-types': [ERROR, {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    }],
    'react/react-in-jsx-scope': ERROR,
    'react/require-render-return': ERROR,
    'react/self-closing-comp': ERROR,
    'react/sort-comp': [ERROR, {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^handle.+$/',
        'getters',
        'setters',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],
    'react/jsx-wrap-multilines': [ERROR, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    'react/jsx-first-prop-new-line': [ERROR, 'multiline-multiprop'],
    'react/jsx-equals-spacing': [ERROR, 'never'],
    'react/jsx-indent': [ERROR, 2],
    'react/jsx-no-target-blank': [ERROR, { enforceDynamicLinks: 'always' }],
    'react/jsx-filename-extension': [ERROR, { extensions: ['.jsx'] }],
    'react/jsx-no-comment-textnodes': ERROR,
    'react/no-render-return-value': ERROR,
    'react/require-optimization': OFF,
    'react/no-find-dom-node': ERROR,
    'react/forbid-component-props': OFF,
    'react/forbid-elements': [ERROR, {
      forbid: [
        { element: 'a', message: 'Use <Link> instead' },
      ],
    }],
    'react/no-danger-with-children': ERROR,
    'react/no-unused-prop-types': [ERROR, {
      customValidators: [],
      skipShapeProps: true,
    }],
    'react/style-prop-object': ERROR,
    'react/no-unescaped-entities': ERROR,
    'react/no-children-prop': ERROR,
    'react/jsx-tag-spacing': [ERROR, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/no-array-index-key': ERROR,
    'react/require-default-props': [ERROR, {
      forbidDefaultForRequired: true,
    }],
    'react/forbid-foreign-prop-types': [WARN, { allowInPropTypes: true }],
    'react/void-dom-elements-no-children': ERROR,
    'react/no-redundant-should-component-update': ERROR,
    'react/no-unused-state': ERROR,
    'react/no-typos': ERROR,
    'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],
    'react/no-access-state-in-setstate': ERROR,
    'react/no-this-in-sfc': ERROR,
    'react/jsx-max-depth': OFF,
    'react/jsx-props-no-multi-spaces': ERROR,
    'react/no-unsafe': ERROR,
  },
};
