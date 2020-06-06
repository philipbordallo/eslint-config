module.exports = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/env', {
      targets: {
        node: 'current',
      },
    }],
  ];

  const plugins = [
    ['module-resolver', {
      root: ['./'],
    }],
  ];

  return {
    presets,
    plugins,
  };
};
