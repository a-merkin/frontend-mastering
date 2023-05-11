import "./assets/main.scss"
import { createApp } from "vue"
import { createPinia } from "pinia"
import { vfmPlugin } from "vue-final-modal"
import "element-plus/dist/index.css"
import ElementPlus from "element-plus"
import ru from "element-plus/es/locale/lang/ru"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vfmPlugin)
app.use(ElementPlus, { locale: ru })

app.mount("#app")
