module.exports = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/env', {
      targets: {
        node: 'current'
      }
    }]
  ];

  const plugins = [
    '@babel/syntax-dynamic-import',
    'dynamic-import-node',
    ['module-resolver', {
      root: ['./src'],
      alias: {}
    }]
  ];

  return {
    presets,
    plugins
  };
}
