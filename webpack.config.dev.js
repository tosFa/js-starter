var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var PORT = process.env.WEBPACK_PORT || 3000;

module.exports = {

  devtool: 'source-map',
  context: path.resolve('./src'),
  entry: {
    main: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:' + PORT,
      'bootstrap-loader',
      './index.web.js'
    ]
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './www',
    hot: true,
    historyApiFallback: true
  },
  modulesDirectories: [
    'node_modules'
  ],

  babel: {
    presets: ['react', 'es2015', 'stage-0']
  },
  module: {
    //preLoaders: [
    //  {
    //    test: /\.js(x?)$/,
    //    exclude: /node_modules/,
    //    loader: 'jshint-loader'
    //  }
    //],
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0']
      },
      { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
      { test: /\.eot/, loader: 'url?limit=100000&mimetype=application/vnd.ms-fontobject' },
      { test: /\.woff2(\?\S*)?$/, loader: 'url-loader?limit=100000&mimetype=application/font-woff2' },
      { test: /\.woff/, loader: 'url?limit=100000&mimetype=application/font-woff' },
      { test: /\.ttf/, loader: 'url?limit=100000&mimetype=application/font-ttf' },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack'
        ]
      }
    ]
  },

  imageWebpackLoader: {
    pngquant:{
      quality: "65-90",
      speed: 4
    },
    svgo:{
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        }
      ]
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  jshint: {
    // any jshint option http://www.jshint.com/docs/options/
    camelcase: true,
    emitErrors: false,
    failOnHint: false,
    esversion: 6
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};
