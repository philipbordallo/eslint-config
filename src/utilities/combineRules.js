import disableRules from 'utilities/disableRules';

/**
 * Combine all the rules of the rules list given
 *
 * @param {Object} rulesList – A list of rules to use
 * @returns {Promise} A promise to return a combined list of all rules
 */
async function combineRules(rulesList) {
  return Object.keys(rulesList)
    .reduce(async (collection, definitions) => {
      const isEnabled = rulesList[definitions];

      let { default: rules} = await import(`../rules/${definitions}`);
      if (!isEnabled) rules = await disableRules(rules);

      const previousRules = await collection;

      return {
        ...previousRules,
        ...rules
      };
    }, Promise.resolve({}));
}

export default combineRules;
