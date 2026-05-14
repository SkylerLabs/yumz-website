import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel-ready Vite config.
// - outDir defaults to "dist" (matches Vercel's framework preset for Vite)
// - no SSR, no special server requirements
// - no Nginx / EC2 assumptions
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2020",
  },
});
