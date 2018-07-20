module.exports = {
  entry: [
    './src/index.js'
  ],
  
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './dist'
  }
};