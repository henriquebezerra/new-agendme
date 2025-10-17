module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "safe": false,
        "allowUndefined": true
      }],
      
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@styles': './src/styles',
            '@assets': './src/assets',
            '@types': './src/types',
            '@model': './src/model',
            '@enums': './src/enums'
          }
        }
      ]
    ]
  };
};