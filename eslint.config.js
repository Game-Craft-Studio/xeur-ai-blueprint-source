import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next"; // Add Next.js plugin

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:@next/next/recommended", // Add Next.js recommended rules
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022, // Updated to 2022 (supports modern JS)
      globals: {
        ...globals.browser,
        React: "readonly", // Explicitly define React global
      },
      parserOptions: {
        project: "./tsconfig.json", // Link to tsconfig
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@next/next": next, // Register Next.js plugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-interface": "warn", // Handle empty interfaces
      "@next/next/no-html-link-for-pages": "error", // Next.js-specific rule
    },
  }
);
