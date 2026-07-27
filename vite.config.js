import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // While developing locally, forward /api calls to `vercel dev`
      // (see README). If you're not using `vercel dev`, this proxy
      // simply won't match anything and can be ignored.
      "/api": "http://localhost:3000"
    }
  }
});
