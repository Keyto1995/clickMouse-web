import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/web",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 目标服务器地址
        changeOrigin: true, // 修改请求头 Origin 为目标地址
      },
    },
  },
});
