module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      // fallback to style-loader in development
      "style-loader",
      "css-loader",
      "sass-loader"
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
