const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = [
  {
    entry: "./src/index.tsx",
    mode: "development",
    target: "web",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    plugins: [new htmlWebpackPlugin({ template: "./src/index.html" })],
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
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        { test: /\.(png|svg|jpg|jpeg)$/i, type: "assets/resource" },
      ],
    },
  },
];
