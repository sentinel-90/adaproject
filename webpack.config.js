module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: './public'
  },

  devServer: {
    inline: true,
    contentBase: './public'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
