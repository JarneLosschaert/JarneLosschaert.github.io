import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  base: "/JarneLosschaert.github.io/",
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: []
  },
})
