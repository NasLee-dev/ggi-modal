import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import {
  configDefaults,
  defineConfig as defineVitestConfig,
} from "vitest/config";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      jsxImportSource: "react",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactModalLibrary",
      fileName: (format) => `react-modal-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  // Vitest 설정
  test: {
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
