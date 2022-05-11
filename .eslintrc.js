module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  extends: "airbnb-base",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-param-reassign": 0,
    "no-shadow": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
