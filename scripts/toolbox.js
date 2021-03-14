import { CONFIGS_PATH } from 'file.config';
import fs from 'fs';

/**
 * Read config files and filter out any extra filers
 */
export function readConfigs() {
  return fs.readdirSync(CONFIGS_PATH)
    .filter(file => file !== '.DS_Store');
}

/**
 * @param {string} file
 * @returns Long and short version of package name
 */
export function getPackageName(file) {
  const name = String(file).split('.')[0];

  return {
    shortName: name,
    longName: `eslint-config${name !== 'default' ? `-${name}` : ''}`,
  };
}
