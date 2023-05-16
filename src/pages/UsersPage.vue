<template>
  <div class="users-page">
    <div class="users-page__table-container">
      <TableActions />
      <UsersListTable />
    </div>
    <TablePagination
      v-model:page="paginationForm.page"
      v-model:per_page="paginationForm.per_page"
      :maxPage="userStore.usersMaxPage"
    />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/store"
import { reactive, watch } from "vue"

const userStore = useUsersStore()

const INIT_PAGINATION = {
  page: 1,
  per_page: 15
}

const paginationForm = reactive(
  {} as {
    page: number
    per_page: number
    max_page: number
  }
)

const resetForm = () => {
  Object.assign(paginationForm, INIT_PAGINATION)
}

resetForm()

const fetchUsers = () => {
  userStore.getUsers({ ...paginationForm })
}

fetchUsers()

watch(paginationForm, fetchUsers)
</script>

<style scoped lang="scss">
.users-page {
  box-sizing: border-box;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__table-container {
    height: 75vh;
  }
}
</style>
