import path from "path";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  test: {
    globals: true,
    testTimeout: 10000,
    include: ["./src/**/*.(test|spec).(ts|tsx)"],
    exclude: ["**/node_modules/**", "**/coverage/**", "**/tests-e2e/**"],
    coverage: {
      all: true,
      include: ["src"],
      exclude: [
        "vitest.setup.ts",
        "vitest.helpers.ts",
        "src/__mocks__",
        "src/dist",
        "src/**/*.{test,spec,d,stories}.{ts,tsx}",
      ],
    },
  },
}));
