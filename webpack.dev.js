const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    writeToDisk: true,
  },
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
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
  