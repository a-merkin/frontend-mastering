import "./assets/main.scss"
import { createApp } from "vue"
import { createPinia } from "pinia"
import { vfmPlugin } from "vue-final-modal"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(vfmPlugin)

app.mount("#app")
