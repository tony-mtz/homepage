const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

const { argv } = require("process");

module.exports = {
  target: "web",
  mode: argv.mode,
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    host: "localhost",
    port: 8080,
    publicPath: "/",
    historyApiFallback: true,
    inline: true,
    hot: true
    
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: [
          {
            loader: "url-loader",
            // options: {
            //   limit: 5000,
            // },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      template: path.resolve(__dirname, "src/template.html"),
      filename: "index.html",
    }),
    new PrettierPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};