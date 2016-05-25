var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('../../webpack.config.dev');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: 'www',
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  historyApiFallback: true,
  stats: {
    colors: true,
  },
});
server.listen(3000, 'localhost', function() {});