import { User } from "@/types/User"
import { defineStore } from "pinia"
import { users } from "@/services/api"

export const useUsersStore = defineStore("users-store", {
  state: () => ({
    users: [] as User[],
    usersMaxPage: null as number
  }),
  actions: {
    getUsers(params) {
      return users.getUsers(params).then(({ data }) => {
        this.usersMaxPage = data.total_pages
        this.users = data.data
      })
    },
    getUser(id) {
      return users.getUser(id)
    },
    updateUser(user) {
      return users.updateUser(user)
    },
    createUser(user) {
      return users.createUser(user)
    },
    deleteUser(id) {
      return users.deleteUser(id)
      // Отправка запроса на удаление, API не предоставляет возможность изменять данные в БД, поэтому массив users остается прежним
    }
  }
})
