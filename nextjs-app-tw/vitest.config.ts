/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react({ exclude: [/node_modules/] }), tsconfigPaths()],
  test: {
    setupFiles: ["./vitest.setup.ts", "./vitest.helpers.ts"],
    environment: "jsdom",
    globals: true,
    testTimeout: 10000,
    include: ["**/*.(test|spec).(ts|tsx)"],
    exclude: ["**/node_modules/**", "**/coverage/**", "**/tests-e2e/**"],
    coverage: {
      all: true,
      include: ["src/**/*"],
    },
  },
});
