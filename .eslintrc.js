module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  extends: "airbnb",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    quotes: ["error", "double"]
  },
};
