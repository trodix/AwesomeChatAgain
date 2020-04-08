module.exports = {
  root: true,
  extends: [
    '@react-native-community'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "comma-dangle": ["warn", "never"],
    "semi": ["error", "always"],
    // "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  }
};
