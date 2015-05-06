var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    vendor:[
      'react',
      'flux',
      'immutable'
    ],
    app:[
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './js/app'
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/js',
    publicPath: 'http://localhost:8080/dist/js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
    ]
  }
};
