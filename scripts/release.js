import { execSync } from 'child_process';
import { getPackageName, readConfigs } from './toolbox.js';

function release(file) {
  const { longName } = getPackageName(file);
  const pkg = `packages/${longName}/`;

  execSync(`pnpm publish ${pkg}`, { stdio: 'inherit' });
}


readConfigs().forEach(release);
