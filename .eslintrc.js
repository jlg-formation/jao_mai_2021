module.exports = {
  ignorePatterns: ['dist/**/*.js'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'require-jsdoc': 0,
    'no-unused-vars': 1,
    eqeqeq: 2,
    'quote-props': 0,
    indent: 0,
  },
};
