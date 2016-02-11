module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: 'build',
    filename: 'bundle.js',
    publicPath: '/',
    sourceMapFilename: 'bundle.map.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader!cssnext-loader',
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets=react'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?prefix=img/&limit=5000',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url-loader?prefix=font/&limit=5000',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}