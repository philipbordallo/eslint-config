import { OFF } from 'src/states';

/**
 * Automatically disable all rules given a rules list
 *
 * @param {object} rules - Rules to disable
 * @returns {Promise} A promise to return a rules list with each rule disabled
 */
async function disableRules(rules) {
  return Object.keys(rules)
    .reduce((collection, rule) => ({
      ...collection,
      [rule]: OFF,
    }), {});
}

export default disableRules;
