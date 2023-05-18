import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const outDir = 'dist'

export default defineConfig(() => {
  return {
    publicDir: false,
    define: {
      __VERSION__: '0.0.1',
    },
    esbuild: {
      drop: ['debugger'],
      pure: ['console.log'],
    },
    build: {
      outDir,
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, 'index.ts'),
        formats: ['es', 'cjs', 'iife'],
        name: 'ZealUI',
        fileName: format => `zeal-ui.${format === 'es' ? 'mjs' : format === 'cjs' ? 'cjs' : 'js'}`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
      commonjsOptions: {
        sourceMap: false,
      },
      chunkSizeWarningLimit: 10000,
    },
    plugins: [
      vue(),
      vueJsx(),
    ],
  }
})
