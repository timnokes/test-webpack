const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globImporter = require('node-sass-glob-importer');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 8000,
    open: true,
    hot: false,
    liveReload: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter(),
              },
            },
          },
        ],
      },
    ],
  },
});

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   devServer:  {
//     open: true
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: 'src/index.html'
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader, "css-loader",
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1
//             }
//           },
//           'postcss-loader'
//         ]
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.svg$/,
//         use: 'file-loader'
//       },
//       {
//         test: /\.png$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               mimetype: 'image/png'
//             }
//           }
//         ]
//       }
//     ]
//   }
// };
