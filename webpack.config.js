const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  entry: {
    fetch: './src/fetch.js',
    button: './src/button.js',
    main: './src/main.js',
    vender: ['react', 'react-dom', 'babel-standalone']
  },
  output: {
    filename: './dist/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: require.resolve('react'), 
        loader: "expose-loader?$!expose-loader?React" 
      },
      { 
        test: require.resolve('react-dom'), 
        loader: "expose-loader?$!expose-loader?ReactDOM" 
      },
      { 
        test: require.resolve('babel-standalone'), 
        loader: "expose-loader?$!expose-loader?Babel" 
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vender',
      filename: './dist/[name].js'
    }),
    // new UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};