import bestPracticesRules from 'src/rules/eslint/best-practices';
import errorsRules from 'src/rules/eslint/errors';
import es6Rules from 'src/rules/eslint/es6';
import nodeRules from 'src/rules/eslint/node-rules';
import strictModeRules from 'src/rules/eslint/strict-mode';
import styleRules from 'src/rules/eslint/style';
import variablesRules from 'src/rules/eslint/variables';

import { ECMA_YEAR } from 'src/constants';


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
