const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const TerserJSPlugin = require(`terser-webpack-plugin`);
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const {
  CleanWebpackPlugin
} = require(`clean-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const RemovePlugin = require(`remove-files-webpack-plugin`);
const {
  resolve
} = require(`path`);
const copyWebpackPlugin = require("copy-webpack-plugin");

const SOURCE_DIRECTORY = resolve(__dirname, `./src`);
const BUILD_DIRECTORY = resolve(__dirname, `./docs`);

module.exports = {
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: BUILD_DIRECTORY
  },
  devtool: `source-map`,
  devServer: {
    contentBase: BUILD_DIRECTORY,
    compress: true,
    watchContentBase: true,
  },
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, `${SOURCE_DIRECTORY}/*.js`),
        use: {
          loader: `babel-loader`,
          options: {
            presets: `env`
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, `css-loader`],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: `file-loader`,
          options: {
            name: `[name].[ext]`,
            outputPath: `./fonts/`
          }
        }],
      },
      {
        test: /\.svg$/,
        loader: `svg-inline-loader`
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [{
          loader: `file-loader`,
          options: {
            name: `[folder]/[name].[ext]`,
            outputPath: `img/`,
            esModule: false,
            useRelativePath: true
          }
        }]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${SOURCE_DIRECTORY}/index.html`
    }),
    new MiniCssExtractPlugin(),
    new copyWebpackPlugin({
      patterns: [
        {
          from: `./docs/img/img`,
          to: `./img`
        }
      ]
    })
  ],
};
