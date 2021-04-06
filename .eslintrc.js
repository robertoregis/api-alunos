module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "quotes": "props",
    "quotes-props": "off",
    "object-shorthand": "off",
    "keyword-spacing": "off",
    "func-names": "off",
  },
};
