/**
 * Creates an array of rules files to use based on if enabled or disabled
 *
 * @param {Object} rules
 * @returns {string}
 */
function extendsRules(rules) {
  return Object.keys(rules).map((rule) => {
    const toggle = rules[rule]
      ? 'enabled'
      : 'disabled';

    return `./rules/${rule}/${toggle}.js`;
  });
}

module.exports = extendsRules;
