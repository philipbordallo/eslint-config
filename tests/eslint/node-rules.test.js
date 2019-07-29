import fs from 'fs';
import { Linter } from 'eslint';

import rules from 'rules/eslint/node-rules';


const BASE_OPTIONS = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
};

const linter = new Linter();

describe('ESLint node rules', () => {
  test('should pass', () => {
    const code = fs.readFileSync('./tests/eslint/__fixtures__/node-rules-pass.js', 'utf8');

    const output = linter.verify(code, {
      ...BASE_OPTIONS,
      rules,
    });

    expect(output).toHaveLength(0);
    expect(output).toMatchSnapshot();
  });

  test('should fail', () => {
    const code = fs.readFileSync('./tests/eslint/__fixtures__/node-rules-fail.js', 'utf8');

    const output = linter.verify(code, {
      ...BASE_OPTIONS,
      rules,
    });

    expect(output).toMatchSnapshot();
  });
})
