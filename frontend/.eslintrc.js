module.exports = {
  root: true,
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  plugins: ["prettier"],
  ignorePatterns: ["webpack.config.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  }
}
