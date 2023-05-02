const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    entry: "./src/index.tsx",
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    plugins: [
      new htmlWebpackPlugin({
        favicon: "./src/images/favicon.ico",
        template: "./src/index.html",
      }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        { test: /\.(png|svg|jpg|jpeg)$/i, type: "asset/resource" },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    performance: {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000,
    },
  },
];
