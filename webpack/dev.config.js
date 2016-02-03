import webpack from 'webpack'
import path from 'path'

import config from './config'

module.exports = {
  // content: config.rootPath,
  cache: true,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true?http://localhost:' + config.port,
    config.entry,
  ],
    // vendor: ['react'],
  output: {
    path: config.outputPath,
    publicPath: config.publicPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      /*
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },*/
      {
        test: /\.js$/,
        loader: 'babel',
        include: config.contentFolder,
      },
      /*
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader',
        ],
      },*/
    ],
  },
  /*modulesDirectories: [
    'src/',
    'node_modules',
    // 'web_module'
  ],*/
  resolve: {
    //root: config.rootPath,
    extensions: ['', '.js'],
    alias: {
      store: config.store,
      api: config.api,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    }),
  ],
}
