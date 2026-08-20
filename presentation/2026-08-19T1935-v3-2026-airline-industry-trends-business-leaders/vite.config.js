import { defineConfig } from 'vite';

// Local-first: development base is '/'. Publishing base is applied by the
// orchestrator at build time via `npm run build -- --base=/<repo-name>/`.
export default defineConfig({
  base: '/',
  server: {
    strictPort: false,
    host: true
  },
  preview: {
    strictPort: false
  }
});
