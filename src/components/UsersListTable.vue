<template>
  <el-table
    :data="userStore.users"
    height="100%"
    style="width: 100%"
    :row-style="{ 'width': '100%' }"
  >
    <el-table-column label="Фото" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <img :src="scope.row.avatar" />
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Имя" width="180">
      <template #default="scope">
        <p>{{ scope.row.first_name }}</p>
      </template>
    </el-table-column>
    <el-table-column label="Фамилия" width="180">
      <template #default="scope">
        <p>{{ scope.row.last_name }}</p>
      </template>
    </el-table-column>
    <el-table-column label="Email" width="180">
      <template #default="scope">
        <p>{{ scope.row.email }}</p>
      </template>
    </el-table-column>
    <el-table-column fixed="right">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Изменить</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Удалить</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/store"

const userStore = useUsersStore()

const handleEdit = (index: number, row: number) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: number) => {
  console.log(index, row)
}
</script>

<style scoped lang="scss">
.users-list {
  height: 100%;
}
</style>
