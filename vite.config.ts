import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
      dts: path.resolve(__dirname, 'types', 'auto-imports.d.ts'),
      vueTemplate: true,
      resolvers: [ElementPlusResolver(), IconsResolver({})],
    }),
    Components({
      dts: path.resolve(__dirname, 'types', 'components.d.ts'),
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'], // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
})
