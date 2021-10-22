const CracoAlias = require('craco-alias');
const path = require('path');

module.exports = {
  output: {
    path: __dirname
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'src', 'assets', 'scss'),
      '@imgs': path.resolve(__dirname, 'src', 'assets', 'imgs'),
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ]
};