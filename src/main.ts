import "./assets/main.scss"
import { createApp } from "vue"
import { createPinia } from "pinia"
import { createVfm } from "vue-final-modal"
import ElementPlus from "element-plus"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import ru from "element-plus/es/locale/lang/ru"
import "element-plus/dist/index.css"
import "vue-final-modal/style.css"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)
const vfm = createVfm()

app.use(createPinia())
app.use(router)
app.use(vfm)
app.use(ElementPlus, { locale: ru })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount("#app")
