const webpack = require('webpack');

const config = {
  context: __dirname + '/src',
  entry: './index.ts',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.less', '.html']
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ng-annotate-loader!awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  },
  plugins: [

  ]
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
