var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
  entry: [
  './src/index.js',
  './style/main.scss'
  ],
  output: {
    path: __dirname ,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [require('babel-plugin-transform-object-rest-spread')],
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'style.css',
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin(),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production'
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
  };
