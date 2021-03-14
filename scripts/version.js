import fs from 'fs';
import { PACKAGES_PATH } from 'file.config';

import pkg from 'package.json';
import { getPackageName, readConfigs } from './toolbox';

/**
 * Update all packages to latest version
 *
 * @param {string} file
 */
async function updateVersion(file) {
  const { longName } = getPackageName(file);

  const packageFile = `${PACKAGES_PATH}/${longName}/package.json`;
  const { default: packageMeta } = await import(packageFile);

  if (pkg.version !== packageMeta.version) {
    const newPackageMeta = {
      ...packageMeta,
      version: pkg.version,
    };

    fs.promises.writeFile(packageFile, JSON.stringify(newPackageMeta, null, '  '))
      .then(() => {
        console.log(`Updated ${longName} to ${pkg.version}`);
      })
      .catch(console.error);
  }
}

readConfigs().forEach(updateVersion);
