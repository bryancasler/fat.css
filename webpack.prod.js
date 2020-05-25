const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CleanWebpackPlugin()
  ],
  module: {
    // rules: [
    //   {
    //     test: /\.scss$/,
    //     use: [
    //       MiniCssExtractPlugin.loader, // 4. Save css to files
    //       "css-loader", // 3. From css to vanilla js
    //       {
    //         loader: "postcss-loader", // 2. Add Autoprefixer to CSS
    //         options: {
    //           ident: "postcss",
    //           plugins: [require("autoprefixer")]
    //         }
    //       },
    //       "sass-loader" // 1. From SASS to CSS
    //     ]
    //   }
    // ]
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',               // 4. Creates `style` nodes from JS strings
           MiniCssExtractPlugin.loader, // 3. Save CSS to files
          'css-loader',                 // 2. Translates CSS into CommonJS (aka Vanilla JS)
          'sass-loader',                // 1. Compiles Sass to CSS
        ],
      },
    ],
  }
});
