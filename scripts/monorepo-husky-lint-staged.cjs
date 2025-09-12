// scripts/run-lint.cjs
const { execSync } = require('child_process');
const { readdirSync, existsSync, readFileSync } = require('fs');
const { join } = require('path');

const packagesDir = 'packages';

const packages = readdirSync(packagesDir).filter((pkg) => {
  const pkgJsonPath = join(packagesDir, pkg, 'package.json');
  return existsSync(pkgJsonPath);
});

for (const pkg of packages) {
  const pkgPath = join(packagesDir, pkg);
  const pkgJsonPath = join(pkgPath, 'package.json');
  const pkgIgnoreLintStaged = join(pkgPath, 'pkg-ignore-lint-staged.json');
  
  if (existsSync(pkgIgnoreLintStaged)) {
    // console.error(`\n\n⚠️ [${pkg}] ignore-lint-staged`);
    return;
  }
  
  
  // 读取 JSON 内容
  let pkgJson;
  try {
    const raw = readFileSync(pkgJsonPath, 'utf-8');
    pkgJson = JSON.parse(raw);
    
    
    if (
      pkgJson && (
        (pkgJson['devDependencies'] && pkgJson['devDependencies']['lint-staged']) ||
        (pkgJson['dependencies'] && pkgJson['dependencies']['lint-staged'])
      )
    ) {
      console.log(`\n🔧 [${pkg}] running lint-staged...\n`);
      
      try {
        execSync('yarn lint-staged', {
          stdio: 'inherit',
          cwd: pkgPath,
        });
      } catch(err) {
        console.error(`\n\n❌ [${pkg}] lint field`);
        process.exit(1);
      }
      
      console.log('\n\n\n');
    }
    
  } catch(e) {
    console.warn(`\n\n⚠️ missing ${pkg}/package.json，skip...`);
  }
  
  
}