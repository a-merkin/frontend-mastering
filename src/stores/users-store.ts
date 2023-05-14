import { User } from "@/types/User"
import { defineStore } from "pinia"
import { users } from "@/services/api"

export const useUserStore = defineStore("user-store", {
  state: () => ({
    users: null as User
  }),
  actions: {
    getUsers(params) {
      return users.getUsers(params).then(({ data }) => {
        this.users = data
      })
    }
  }
})
