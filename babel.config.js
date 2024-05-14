
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["module:@react-native/babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
          alias: {
            "components": ["./apps/component"],
            "screens": ["./apps/screens"],
            "utils": ["./apps/utils"],
            "assets": ["./apps/assets"],
          },
        },
      ],
    ],
  };
};
