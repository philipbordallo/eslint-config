import { CONFIGS_PATH } from 'file.config';
import fs from 'fs';

/**
 * @param {(file: string) => void} callback
 */
export function readConfigs(callback) {
  fs.readdirSync(CONFIGS_PATH)
    .filter(file => file !== '.DS_Store')
    .forEach(callback);
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
