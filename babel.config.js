module.exports = {
  presets: ['module:@react-native/babel-preset',], // veya 'module:@react-native/babel-preset', ikisi birden olamaz
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      safe: false,
      allowUndefined: true
    }]
  ]
};
