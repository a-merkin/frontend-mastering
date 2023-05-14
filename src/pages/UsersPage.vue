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
