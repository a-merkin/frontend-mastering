import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { defineConfig } from "vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { fileURLToPath } from "url"

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "@vueuse/head",
        "pinia",
        {
          "@/store": ["useStore"]
        }
      ],
      dts: "src/auto-imports.d.ts",
      eslintrc: {
        enabled: true
      },
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: [
      {
        find: /@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
        replacement: fileURLToPath(
          new URL("./src/components/$1/index.vue", import.meta.url)
        )
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url))
      },
      {
        find: /@\/services\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
        replacement: fileURLToPath(new URL("./src/services/$1/index.ts", import.meta.url))
      }
    ]
  },
  envPrefix: "VITE_",
  server: {
    port: 8080
  }
})
