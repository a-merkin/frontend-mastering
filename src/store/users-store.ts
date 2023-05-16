import { User } from "@/types/User"
import { defineStore } from "pinia"
import { users } from "@/services/api"

export const useUsersStore = defineStore("users-store", {
  state: () => ({
    users: [] as User[]
  }),
  actions: {
    getUsers(params) {
      return users.getUsers(params).then(({ data }) => {
        this.users = data.data
      })
    }
  }
})
