import "./assets/main.scss"
import { createApp } from "vue"
import { createPinia } from "pinia"
import { createVfm } from "vue-final-modal"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import "element-plus/dist/index.css"
import "vue-final-modal/style.css"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)
const vfm = createVfm()

app.use(createPinia())
app.use(router)
app.use(vfm)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount("#app")
