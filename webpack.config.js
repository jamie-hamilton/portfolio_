const path = require("path")

module.exports = {
  entry: { 
    index: path.resolve(__dirname, "frontend/src", "index.js") 
  },
  output: {
    path: path.resolve(__dirname, "frontend/static/frontend"),
    publicPath: "./frontend/static/frontend",
    filename: "[name].js",
    chunkFilename: "[id]-[chunkhash].js",
  },
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
  };
  