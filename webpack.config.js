const path = require('path');

module.exports = {
  entry: path.resolve('./client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  target: 'node',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    // fallback: {
    //   stream: require.resolve("stream-browserify"),
    //   buffer: require.resolve("buffer/"),
    //   http: require.resolve("stream-http"),
    //   crypto: require.resolve("crypto-browserify"),
    // },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
    ],
  },
};
