import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginInspect from "vite-plugin-inspect"
// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react(),vitePluginInspect()],
  // 设置路径别名
  resolve: {
    alias: {
      "@": "/src", // 正确配置的路径别名，将 @ 映射到 /src
    },
  },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
