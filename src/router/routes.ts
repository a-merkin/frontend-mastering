import { RouteRecordRaw } from "vue-router"
import AppAuth from "@/components/AppAuth.vue"
import AppRegistration from "@/components/AppRegistration.vue"
import StartPage from "@/pages/StartPage.vue"
import MainPage from "@/pages/MainPage.vue"
import UsersPage from "@/pages/UsersPage.vue"

const routes: readonly RouteRecordRaw[] = [
  {
    path: "/start",
    name: "Start",
    component: StartPage,
    redirect: "/auth",
    children: [
      {
        path: "/auth",
        name: "Auth",
        component: AppAuth,
        meta: {
          title: "Авторизация"
        }
      },
      {
        path: "/register",
        name: "Register",
        component: () => AppRegistration,
        meta: {
          title: "Регистрация"
        }
      }
    ]
  },
  {
    path: "/workplace",
    name: "Workplace",
    component: MainPage,
    redirect: "/users-list",
    children: [
      {
        path: "/users-list",
        name: "Users",
        component: UsersPage,
        meta: {
          title: "Список пользователей"
        }
      }
    ]
  }
]

export default routes
