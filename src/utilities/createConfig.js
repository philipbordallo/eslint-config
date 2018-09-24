import combineRules from 'utilities/combineRules';

const DEFAULT_OPTIONS = {
  rules: {},
  base: {},
};

/**
 * Create an ESLint config given rules and a base config
 *
 * @param {Object} optionsArgs
 * @returns {Promise} A promise to return a full config
 */
async function createConfig(optionsArgs) {
  const options = {
    ...DEFAULT_OPTIONS,
    ...optionsArgs,
  };
  const { rules, base } = options;

  const config = {
    ...base,
    rules: base.rules || {},
  };

  return Object.keys(config)
    .reduce(async (collection, key) => {
      const previous = await collection;

      if (key === 'rules') {
        const combinedRules = await combineRules(rules);

        return {
          ...previous,
          rules: {
            ...combinedRules,
            ...config.rules,
          },
        };
      }

      return {
        ...previous,
        [key]: config[key],
      };
    }, Promise.resolve({}));
}

export default createConfig;
