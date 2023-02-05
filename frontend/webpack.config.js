const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "RecipeFinder",
      template: path.resolve(__dirname, "./index.html"),
    }),
  ],
};
