import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(() => ({
  publicDir: false,
  build: {
    emptyOutDir: true,
    minify: true,
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: (id: string) => !id.startsWith(".") && !path.isAbsolute(id),
    },
  },
  plugins: [dts()],
  test: {
    globals: true,
    testTimeout: 10000,
    include: ["./src/**/*.(test|spec).(ts|tsx)"],
    exclude: ["**/node_modules/**", "**/coverage/**", "**/tests-e2e/**"],
    coverage: {
      all: true,
      reporter: ["json-summary", "text", "html"],
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
