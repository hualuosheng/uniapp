module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'standard',
    'prettier',
    'plugin:vue/essential',
    'plugin:prettier/recommended'
  ],
  globals: {
    plus: true,
    uni: true,
    wx: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['prettier', 'vue'],
  rules: {
    'prettier/prettier': 'error',
    'prefer-const': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'no-case-declarations': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-undef': 2
  }
}
