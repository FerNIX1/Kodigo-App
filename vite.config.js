import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'chrome88', // Especifica el objetivo del navegador
  },
  build:{
    target: "esnext" // or "es2019",

   },
})
