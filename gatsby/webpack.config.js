const createWebpackconfig = ({ getConfig, actions }) => {
  const webpackConfig = getConfig();
  if (webpackConfig.mode === 'production') {
    actions.setWebpackConfig({
      devtool: false
    });
  }
};

module.exports = createWebpackconfig;