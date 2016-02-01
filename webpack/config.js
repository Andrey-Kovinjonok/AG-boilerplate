import path from 'path'
const root = path.join(__dirname, '..')

export default {
  rootPath: root,
  entry: './src/index',
  outputPath: path.join(root, 'dist'),
  publicPath: '/dist',
  contentFolder: path.join(root, 'src'),
  indexDev: path.join(root, 'src/index_dev.html'),
  index: path.join(root, 'src/index.html'),
  store: path.join(root, 'src/store'),
  port: 3031,
}
