import { defineStore } from "pinia"
import { authorization, setToken, logout, registration } from "@/services/api"
import { User } from "@/types/User"

import router from "@/router"

export const useAppStore = defineStore("app-store", {
  state: () => ({
    user: null as User
  }),
  actions: {
    handleLogin(data) {
      return authorization.login(data).then((response) => {
        const { token } = response.data
        localStorage.setItem("token", `${token}`)
        setToken(localStorage.getItem("token"))
        return response
      })
    },
    handleLogout() {
      logout.logout()
      setToken(null)
      localStorage.clear()
      router.push("/auth")
    },
    handleRegister(data) {
      return registration.register(data).then((response) => {
        const { token } = response.data
        localStorage.setItem("token", `${token}`)
        setToken(localStorage.getItem("token"))
        return response
      })
    }
  }
})
