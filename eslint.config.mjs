import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from 'eslint-config-prettier';
import google from 'eslint-config-google';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Combine all configurations
export default [
  // Next.js configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Google config
  google,
  // Custom rules
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      // Enable prettier errors
      "prettier/prettier": "error",
      // your other custom rules here
    },
  },
  // Prettier config must be last to override other style rules
  prettier
];