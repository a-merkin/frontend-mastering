import { RouteRecordRaw } from "vue-router"

const routes: readonly RouteRecordRaw[] = [
  {
    path: "/start",
    name: "Start",
    component: () => import("@/pages/StartPage.vue"),
    redirect: "/auth",
    children: [
      {
        path: "/auth",
        name: "Auth",
        component: () => import("@/components/AppAuth.vue"),
        meta: {
          title: "Авторизация"
        }
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/components/AppRegistration.vue"),
        meta: {
          title: "Регистрация"
        }
      }
    ]
  },
  {
    path: "/workplace",
    name: "Workplace",
    component: () => import("@/pages/MainPage.vue")
  }
]

export default routes
