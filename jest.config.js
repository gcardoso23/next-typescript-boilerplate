const nextJest = require('next/jest');

// Compiles tests with Next's SWC setup and loads next.config.js, so tests see
// the code the same way the app does.
const createJestConfig = nextJest({ dir: './' });

module.exports = createJestConfig({
  testEnvironment: 'jsdom',
  // Mirrors baseUrl in tsconfig.json.
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/\\.next/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/stories.tsx', '!src/pages/_document.tsx']
});
