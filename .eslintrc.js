/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error'
  }
}
