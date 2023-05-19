import { resolve } from 'node:path'
import { type ESBuildOptions, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
  external: ['vue', /\.scss/],
  input: ['src/index.ts'],
  output: [
    {
      // 打包格式
      format: 'es',
      // 打包后文件名
      entryFileNames: '[name].mjs',
      // 让打包目录和我们目录对应
      preserveModules: true,
      exports: 'named',
      // 配置打包根目录
      dir: './dist/es',
      globals: {
        vue: 'Vue',
      },
    },
    {
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
      exports: 'named',
      dir: './dist/lib',
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
    sourcemap: true,
    minify: false, // Disable Obfuscation
    commonjsOptions: {
      sourceMap: false,
    },
    chunkSizeWarningLimit: 10000,
    // @ts-expect-error: error type
    rollupOptions,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'zeal',
    },
  },
})
