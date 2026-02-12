const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const prettier = require("eslint-plugin-prettier");
const tsImmutable = require("eslint-plugin-ts-immutable");
const eslintConfigPrettier = require("eslint-config-prettier");
const globals = require("globals");

module.exports = [
  {
    ignores: ["node_modules/**", "public/**", ".cache/**", "dist/**"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react: react,
      "react-hooks": reactHooks,
      prettier: prettier,
      "ts-immutable": tsImmutable,
    },
    settings: {
      react: {
        pragma: "h",
        version: "detect",
      },
    },
    rules: {
      ...typescriptEslint.configs["eslint-recommended"].rules,
      ...typescriptEslint.configs["recommended"].rules,
      ...typescriptEslint.configs["recommended-requiring-type-checking"].rules,
      ...react.configs["recommended"].rules,
      ...reactHooks.configs["recommended"].rules,
      ...prettier.configs["recommended"].rules,
      ...tsImmutable.configs["recommended"].rules,
      ...eslintConfigPrettier.rules,

      "react/no-unknown-property": ["error", { ignore: ["class"] }],
      "react/prop-types": ["off"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-duplicate-imports": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "no-implicit-globals": "error",
      "linebreak-style": ["error", "unix"],
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["*.js"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
