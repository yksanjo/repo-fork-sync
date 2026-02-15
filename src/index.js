#!/usr/bin/env node
const chalk = require('chalk');
const { execSync } = require('child_process');

async function main() {
  console.log(chalk.cyan('\n🔀 Fork Sync v1.0.0\n'));
  const forks = JSON.parse(execSync('gh repo list yksanjo --fork --json name,parent', { encoding: 'utf8' }));
  console.log(chalk.yellow(`Found ${forks.length} forks\n`));
  forks.forEach(f => console.log(`  ${f.name} ← ${f.parent?.fullName || 'unknown'}`));
  console.log(chalk.blue('\nTo sync a fork: git fetch upstream && git checkout main && git merge upstream/main'));
}
if (require.main === module) main().catch(console.error);
module.exports = { main };
