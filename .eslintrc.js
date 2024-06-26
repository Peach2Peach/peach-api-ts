module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "prettier"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  globals: {
    self: true,
    caches: true,
    Buffer: true,
  },
  ignorePatterns: [
    ".eslintrc.js",
    "index.js",
    "babel.config.js",
    "__mocks__/**/*.js",
    "coverage/**/*.js",
    "dist/**/*",
  ],
  rules: {
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "array-element-newline": "off",
    "arrow-body-style": "error",
    "arrow-parens": "off",
    "block-scoped-var": "error",
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    complexity: ["error", 21],
    "consistent-return": "error",
    "consistent-this": "error",
    curly: "off",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],
    eqeqeq: "error",
    "func-name-matching": "error",
    "func-names": "error",
    "func-style": "error",
    "function-paren-newline": "off",
    "grouped-accessor-pairs": "error",
    "guard-for-in": "off",
    "id-denylist": "error",
    "id-length": "off",
    "id-match": "error",
    "implicit-arrow-linebreak": "off",
    "init-declarations": "off",
    "line-comment-position": "off",
    "lines-between-class-members": "error",
    "max-classes-per-file": "error",
    "max-depth": "error",
    "max-lines": "error",
    "max-lines-per-function": ["error", 70],
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": ["error", 21],
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-confusing-arrow": "off",
    "no-console": "error",
    "no-constructor-return": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "off",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-loss-of-precision": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "off",
    "no-nested-ternary": "off",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-promise-executor-return": "off",
    "no-proto": "error",
    "no-restricted-exports": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "off",
    "no-return-await": "warn",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undef": "off",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-optional-chaining": "off",
    "no-unused-expressions": "error",
    "no-use-before-define": "error",
    "no-useless-backreference": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": [
      "error",
      { terms: ["todo", "fixme"], location: "anywhere" },
    ],
    "object-curly-newline": "off",
    "object-property-newline": "off",
    "object-shorthand": "error",
    "one-var": "off",
    "operator-assignment": "error",
    "padded-blocks": "off",
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "off",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "off",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "warn",
    "prettier/prettier": "off",
    "quote-props": "off",
    radix: "error",
    "require-atomic-updates": "error",
    "require-await": "warn",
    "require-unicode-regexp": "error",
    "sort-keys": "off",
    "sort-vars": "error",
    "spaced-comment": ["error", "always"],
    strict: "error",
    "symbol-description": "error",
    "unicode-bom": ["error", "never"],
    "vars-on-top": "error",
    "wrap-regex": "off",
    yoda: "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-non-null-assertion": "warn",
  },
};
