import fs from 'fs';
import { CONFIGS_PATH, PACKAGES_PATH } from './paths';

import info from './package.json';

/**
 * Update all packages to latest version
 *
 * @param {string} file
 */
async function updateVersion(file) {
  const { default: config } = await import(`${CONFIGS_PATH}/${file}`);
  const { packageName } = config;

  const packageInfoFile = `${PACKAGES_PATH}/${packageName}/package.json`;
  const { default: packageInfo } = await import(packageInfoFile);

  if (info.version !== packageInfo.version) {
    const newPackageInfo = {
      ...packageInfo,
      version: info.version,
    };

    fs.promises.writeFile(packageInfoFile, JSON.stringify(newPackageInfo, null, '  '))
      .then(() => {
        console.log(`Updated ${packageName} to ${info.version}`);
      })
      .catch(console.error);
  }
}

fs.readdirSync(CONFIGS_PATH)
  .filter(file => file !== '.DS_Store')
  .forEach(updateVersion);
