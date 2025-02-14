import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Permite acesso externo
    port: 5173,
    watch: {
      usePolling: true, // Necessário para hot reload no Docker
    },
    strictPort: true,
    hmr: {
      clientPort: 5173, // Garante que o HMR use a porta correta
    },
  },
});
