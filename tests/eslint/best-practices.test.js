import fs from 'fs';
import { Linter } from 'eslint';

import rules from 'rules/eslint/best-practices';


const BASE_OPTIONS = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
};

const linter = new Linter();

describe('ESLint best practices', () => {
  test('should pass', () => {
    const code = fs.readFileSync('./tests/eslint/__fixtures__/best-practices-pass.js', 'utf8');

    const output = linter.verify(code, {
      ...BASE_OPTIONS,
      rules,
    });

    expect(output).toHaveLength(0);
    expect(output).toMatchSnapshot();
  });

  test('should fail', () => {
    const code = fs.readFileSync('./tests/eslint/__fixtures__/best-practices-fail.js', 'utf8');

    const output = linter.verify(code, {
      ...BASE_OPTIONS,
      rules,
    });

    expect(output).toMatchSnapshot();
  });
})
