import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginEslintComments from "eslint-plugin-eslint-comments";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:jsx-a11y/recommended"),
  
  // TypeScript strict rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // Forbid explicit 'any' types
      "@typescript-eslint/no-explicit-any": "error",
      
      // Forbid TypeScript suppression directives
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": "allow-with-description",
          "minimumDescriptionLength": 10
        }
      ],
      
      // Prevent unnecessary non-null assertions
      "@typescript-eslint/no-non-null-assertion": "error",
    }
  },
  
  // ESLint comment rules
  {
    plugins: {
      "eslint-comments": eslintPluginEslintComments,
    },
    rules: {
      // Disallow eslint-disable without rule names
      "eslint-comments/no-unlimited-disable": "error",
      
      // Require descriptions for eslint-disable comments
      "eslint-comments/require-description": ["error", { "ignore": [] }],
      
      // Disallow duplicate eslint-disable comments
      "eslint-comments/no-duplicate-disable": "error",
      
      // Require eslint-enable after eslint-disable comments
      "eslint-comments/disable-enable-pair": ["error", { "allowWholeFile": true }],
      
      // Disallow eslint-disable comments for specific rules
      "eslint-comments/no-restricted-disable": [
        "error", 
        "@typescript-eslint/no-explicit-any",
        "@typescript-eslint/ban-ts-comment"
      ]
    }
  }
];

export default eslintConfig;
