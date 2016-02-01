/* eslint-disable no-console */
//var path = require('path')
import express from 'express'
import webpack from 'webpack'
import config from './config'
import webpackConfig from './dev.config'

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.publicPath,
  noInfo: true,
  hot: true,
  inline: true,
  historyApiFallback: true,
  port: config.port,
  stats: {colors: true},
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)

app.use(devMiddleware)

app.use(hotMiddleware)

console.log(config.indexDev)
app.get('*', (req, res) => {
  res.sendFile(config.indexDev)
})

app.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:' + config.port)
})
