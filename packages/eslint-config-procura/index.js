module.exports = {
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "next",
    "prettier",
    "plugin:import/typescript",
  ],
  settings: {
    "import/resolver": {
      // https://github.com/import-js/eslint-import-resolver-typescript#configuration
      typescript: true,
      node: true,
    },
  },
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
