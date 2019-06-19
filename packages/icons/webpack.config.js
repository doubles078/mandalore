const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  target: "web",
  devtool: "source-map",
  entry: {
    Icons: ["./src/index.ts"]
  },
  output: {
    filename: "icons.js",
    globalObject: "typeof self !== 'undefined' ? self : this",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".svg"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  externals: {
    // Use external version of React
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom"
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};
