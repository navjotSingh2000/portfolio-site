import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Short content hash of the resume PDF, used as a cache-busting query param
// (`?v=<hash>`) so the filename itself stays clean while browsers/CDNs still
// pick up new versions whenever the file changes.
const resumePdfPath = fileURLToPath(
  new URL("./public/Navjot_Singh_Resume.pdf", import.meta.url),
);
const resumeVersion = createHash("md5")
  .update(readFileSync(resumePdfPath))
  .digest("hex")
  .slice(0, 8);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __RESUME_VERSION__: JSON.stringify(resumeVersion),
  },
});
