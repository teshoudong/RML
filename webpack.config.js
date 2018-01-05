const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    fetch: './src/fetch.js',
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
    })
  ]
};