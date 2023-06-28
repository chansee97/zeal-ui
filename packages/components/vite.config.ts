import { resolve } from 'node:path'
import { type ESBuildOptions, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
  external: ['vue', /\.scss/],
  input: ['./index.ts'],
  output: [
    {
      format: 'umd',
      entryFileNames: '[name].js',
      name: 'index',
      dir: '../../dist/dist',
      globals: {
        vue: 'Vue',
      },
    },
    {
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true,
      exports: 'named',
      dir: '../../dist/es',
      globals: {
        vue: 'Vue',
      },
    },
    {
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
      exports: 'named',
      dir: '../../dist/lib',
      globals: {
        vue: 'Vue',
      },
    },
  ],
}

const esbuildOptions: ESBuildOptions = {
  jsx: 'transform',
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  drop: ['debugger'],
  pure: ['console.log'],
}

export default defineConfig({
  publicDir: false,
  define: {
    __VERSION__: '0.0.1',
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  esbuild: esbuildOptions,
  build: {
    sourcemap: false,
    minify: false, // Disable Obfuscation
    commonjsOptions: {
      sourceMap: false,
    },
    chunkSizeWarningLimit: 10000,
    // @ts-expect-error: error type
    rollupOptions,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'zeal',
    },
  },
})
