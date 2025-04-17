import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import refreshPlugin from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import typescriptResolver from "eslint-import-resolver-typescript";
import reactPerf from "eslint-plugin-react-perf";
import unusedImports from "eslint-plugin-unused-imports";

export default tseslint.config(
  // base JS rules
  eslint.configs.recommended,
  // TypeScript rules
  tseslint.configs.recommended,
  // React rules
  reactPlugin.configs.recommended,
  {
    ignores: ["dist", "node_modules", "vite.config.ts"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
      },
      globals: { window: "readonly", document: "readonly" },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        typescript: typescriptResolver,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "react-refresh": refreshPlugin,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "react-perf": reactPerf,
      "unused-imports": unusedImports,
    },
    rules: {
      // React‑Hooks
      ...hooksPlugin.configs.recommended.rules,
      // Fast Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Performance
      "react-perf/jsx-no-new-object-as-prop": "error",
      "react-perf/jsx-no-new-array-as-prop": "error",
      "react-perf/jsx-no-new-function-as-prop": "error",
      "react-perf/jsx-no-jsx-as-prop": "error",
      // A11y
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          components: ["Link"],
          specialLink: ["to"],
          aspects: ["noHref", "invalidHref"],
        },
      ],
      // Cleanup
      "unused-imports/no-unused-imports": "error",
    },
  }
);
