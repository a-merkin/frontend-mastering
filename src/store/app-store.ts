import { defineStore } from "pinia"
import { authorization, setToken } from "@/services/api"
import { User } from "@/types/User"

import router from "@/router"

export const useAppStore = defineStore("app-store", {
  state: () => ({
    user: null as User
  }),
  actions: {
    handleLogin(form) {
      return authorization.login(form).then((response) => {
        const { token } = response.data
        localStorage.setItem("token", `${token}`)
        setToken(localStorage.getItem("token"))
        return response
      })
    },
    handleLogout() {
      setToken(null)
      localStorage.clear()
      router.push("/auth")
    },
    handleRegister() {
      //
    }
  }
})
