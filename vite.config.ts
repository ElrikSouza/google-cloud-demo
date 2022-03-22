import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://storage.googleapis.com/cb-frontend/",
  server: {
    origin: "https://storage.googleapis.com/cb-frontend",
  },
});
