const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: config => {
    config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        })
    )
  }
})
