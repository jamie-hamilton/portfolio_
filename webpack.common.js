const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "frontend/src", "index.js") 
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, "frontend/static/frontend"),
        publicPath: "./frontend/static/frontend",
        filename: "main.js",
        chunkFilename: "[id]-[chunkhash].js",
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
};