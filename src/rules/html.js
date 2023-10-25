import { ERROR, OFF } from '#src/constants.js';
import style from './eslint/style.js';

export default {
  '@html-eslint/require-lang': ERROR,
  '@html-eslint/require-title': ERROR,
  '@html-eslint/no-multiple-h1': ERROR,
  '@html-eslint/require-meta-description': OFF,
  '@html-eslint/no-extra-spacing-attrs': ERROR,
  '@html-eslint/element-newline': ERROR,
  '@html-eslint/indent': style.indent.slice(0, 2),
  '@html-eslint/quotes': ERROR,
};
