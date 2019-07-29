import fs from 'fs';
import { Linter } from 'eslint';

import rules from 'rules/eslint/variables';


const BASE_OPTIONS = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
};

const linter = new Linter();

describe('ESLint variables', () => {
  test('should pass', () => {
    const code = fs.readFileSync('./tests/eslint/__fixtures__/variables-pass.js', 'utf8');

    const output = linter.verify(code, {
      ...BASE_OPTIONS,
      rules,
    });

    expect(output).toHaveLength(0);
    expect(output).toMatchSnapshot();
  });

  test('should fail', () => {
    const code = fs.readFileSync('./tests/eslint/__fixtures__/variables-fail.js', 'utf8');

    const output = linter.verify(code, {
      ...BASE_OPTIONS,
      rules,
    });

    expect(output).toMatchSnapshot();
  });
})
