import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const base = process.env.SITE_BASE || "/";

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    host: "::",
    port: 4175,
  },
});
