<template>
  <div class="users-page">
    <div class="users-page__table-container">
      <TableActions />
      <UsersListTable />
    </div>
    <TablePagination />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/store"

const userStore = useUsersStore()

const paginationParams = {}
const filterForm = {}

userStore.getUsers({ ...paginationParams, ...filterForm })
</script>

<style scoped lang="scss">
.users-page {
  box-sizing: border-box;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
