const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./js/clientApp.jsx",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jxs', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jxs?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
