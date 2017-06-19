import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dir = (...args) => path.resolve(__dirname, ...args);
const codedir = (...args) => dir('app', ...args);
const outdir = (...args) => dir('dist', ...args);

export default {
  devtool: 'source-map',
  entry: codedir('index.jsx'),
  output: {
    filename: 'bundle.js',
    path: outdir(),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: codedir('index.html.ejs') })],
  resolve: { extensions: ['.js', '.jsx'] },
};
