const path = require('path');

module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  // webpack 4 needs an OpenSSL hash that Node 17+ no longer allows.
  core: { builder: 'webpack5' },
  webpackFinal: config => {
    // Resolve imports from src, like baseUrl in tsconfig.json.
    config.resolve.modules.push(path.resolve(__dirname, '../src'));
    return config;
  }
};
