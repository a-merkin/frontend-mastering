<template>
  <div class="users-list">
    <el-table :data="userStore.users" style="width: 100%">
      <el-table-column label="Фото" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
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
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
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
