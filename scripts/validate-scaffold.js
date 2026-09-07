#!/usr/bin/env node

/**
 * Validation script for the Blueprint Platform Stress Suite scaffold
 * Checks that all required blueprint scaffold files exist and are valid
 */

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'package.json',
  'README.md',
  'ASSUMPTIONS.md',
  'DECISION_LOG.md',
  '.github/workflows/ci.yml',
  'docs/blueprint.md',
  'src/index.js'
];

const errors = [];

console.log('📋 Validating Blueprint Platform Stress Suite scaffold...\n');

// Check each required file
requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${file}`);
  } else {
    console.log(`✗ ${file} - NOT FOUND`);
    errors.push(`Missing required file: ${file}`);
  }
});

// Validate package.json can be parsed
console.log('\n📦 Validating package.json...');
try {
  const pkgPath = path.join(__dirname, '..', 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  console.log(`✓ package.json is valid JSON`);
  if (pkg.name && pkg.version) {
    console.log(`✓ package.json has name and version`);
  } else {
    errors.push('package.json missing name or version field');
  }
} catch (err) {
  console.log(`✗ package.json is invalid JSON: ${err.message}`);
  errors.push(`package.json validation failed: ${err.message}`);
}

// Summary
console.log('\n' + '='.repeat(50));
if (errors.length === 0) {
  console.log('✅ All validations passed!');
  process.exit(0);
} else {
  console.log(`❌ Validation failed with ${errors.length} error(s):\n`);
  errors.forEach((err, i) => {
    console.log(`  ${i + 1}. ${err}`);
  });
  process.exit(1);
}
