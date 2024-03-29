module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          App: '../../../App',
          '@Components': './src/components',
          '@Screens': './src/screens',
        },
      },
    ],
  ],
};
