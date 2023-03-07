const CracoLessPlugin = require('craco-less');
const themeConfig = require('./theme.config');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeConfig,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};