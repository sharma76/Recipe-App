module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "./node_modules/react-native-reanimated/plugin"
      
    ],
  };
};
