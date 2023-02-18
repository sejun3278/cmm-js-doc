module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "***/tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: "off",
    semi: "off",
    "space-before-function-paren": "off",
    "react/react-in-jsx-scope": "off",
  },
};
