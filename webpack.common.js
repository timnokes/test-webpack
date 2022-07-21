const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = ["index", "components"];

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      // {
      //   test: /\.(svg|png|jpg|gif|woff|woff2)$/,
      //   use: {
      //     loader: "file-loader",
      //     // options: {
      //     //   name: "[name].[ext]",
      //     //   outputPath: "/public/images"
      //     // }
      //     options: {
      //       name: '[path][name].[ext]',
      //     },
      //   }
      // }
    ]
  }
};