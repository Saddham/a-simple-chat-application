const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './client-scripts/pages/chat/index.js',
  output: {
    filename: 'script.min.js',
    path: path.resolve(__dirname, 'public/js')
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
}
