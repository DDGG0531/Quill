// vue.config.js
const webpack = require("webpack");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        "window.Quill": "quill",
      },
    ]);

    // config.module.rule("graphql").test(/\.js$/).loader("babel-loader");
  },
};
