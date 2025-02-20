module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier/vue', 'plugin:prettier/recommended'],
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
      parser: 'babel-eslint',
      ecmaFeatures: { legacyDecorators: true }
  },
  overrides: [
      {
          files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
          env: {
              jest: true
          }
      }
  ]
};