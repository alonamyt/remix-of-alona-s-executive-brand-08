import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const base = process.env.SITE_BASE || "/";

// Теки зі статичними картинками, зробленими під цей сайт.
// index.html посилається на них і через <img src="...">, і через JS-рядки
// (галереї GAL/EXTRA, TV-режим). JS-рядки vite не обробляє, тож ці теки
// треба скопіювати у dist «як є», інакше галереї/обкладинки 404-ляться.
const STATIC_DIRS = ["prod", "community", "panels", "rnd"];

function copyStaticDirs() {
  return {
    name: "copy-static-asset-dirs",
    apply: "build" as const,
    closeBundle() {
      for (const dir of STATIC_DIRS) {
        const src = resolve(__dirname, dir);
        if (existsSync(src)) {
          cpSync(src, resolve(__dirname, "dist", dir), { recursive: true });
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStaticDirs()],
  base,
  server: {
    host: "::",
    port: 4174,
  },
});
