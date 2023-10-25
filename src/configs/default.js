import bestPracticesRules from '#src/rules/eslint/best-practices.js';
import errorsRules from '#src/rules/eslint/errors.js';
import es6Rules from '#src/rules/eslint/es6.js';
import nodeRules from '#src/rules/eslint/node-rules.js';
import strictModeRules from '#src/rules/eslint/strict-mode.js';
import styleRules from '#src/rules/eslint/style.js';
import variablesRules from '#src/rules/eslint/variables.js';

import { ECMA_YEAR } from '#src/constants.js';


export default {
  env: {
    [`es${ECMA_YEAR}`]: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: ECMA_YEAR,
    sourceType: 'module',
  },
  rules: {
    ...bestPracticesRules,
    ...errorsRules,
    ...es6Rules,
    ...nodeRules,
    ...strictModeRules,
    ...styleRules,
    ...variablesRules,
  },
};
