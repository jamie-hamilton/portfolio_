const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrotliPlugin = require('brotli-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
   mode: 'production',
   devtool: '',
   plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
		new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		})
   ],
   module: {
      rules: [
          {
              test: /\.scss$/,
              use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
              loader: "babel-loader",
              options: { 
                  presets: ['@babel/preset-env', '@babel/react'],
                  plugins:['@babel/plugin-proposal-class-properties']
              }
              }
          }
      ]
  }
});