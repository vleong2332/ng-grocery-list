module.exports = {
  context: __dirname + '/src',
  entry: './index.ts',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
    ]
  }
};
