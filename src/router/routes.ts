import { RouteRecordRaw } from "vue-router"

const routes: readonly RouteRecordRaw[] = [
  {
    path: "/auth",
    name: "Auth",
    component: import("@/pages/AuthPage.vue")
  },
  {
    path: "/registration",
    name: "Registarion",
    component: import("@/pages/RegistrationPage.vue")
  }
]

export default routes
