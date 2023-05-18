import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      { find: /^@\/(.+)/, replacement: resolve(__dirname, '../$1') },
      { find: /^zeal-ui$/, replacement: resolve(__dirname, '../components/index.ts') },
    ],
  },
})
