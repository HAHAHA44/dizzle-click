import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  outDir: 'dist',
  format: ["cjs", "esm"],
  // cssModules: true,
  dts: true,
});