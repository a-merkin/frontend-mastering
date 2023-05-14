import { defineStore } from "pinia"
import { authorization, setToken } from "@/services/api"

import router from "@/router"

export const useAppStore = defineStore("app-store", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token"),
  }),
  actions: {
    handleLogin(form) {
      return authorization.login(form).then((response) => {
        const { user, token } = response.data
        localStorage.setItem("token", `${token}`)
        localStorage.setItem("userId", user.id)
        setToken(localStorage.getItem("token"))
        this.user = user
        this.token = token
        return response
      })
    },
    handleLogout() {
      setToken(null)
      localStorage.clear()
      router.push({ name: "Auth" })
    },
    handleRegister() {
      // 
    }
  }
})
