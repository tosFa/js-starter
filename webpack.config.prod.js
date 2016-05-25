var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve('./'),
  entry: {
    main: [
      './src/index.web.js',
	  'bootstrap-loader',
    ]
  },

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },

  modulesDirectories: [
    'node_modules'
  ],

  babel: {
    presets: ['react', 'es2015', 'stage-0']
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0']
      },
      { test: /\.json$/, loader: 'json-loader' },

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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true)
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin(
      {
        filename: './index.html',
        title: 'My App',
        template: './templates/index.html'
      }
    )
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
