<template>
  <el-table
    v-loading="props.isLoading"
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
        <el-button size="small" @click="handleEdit(scope.row.id)">Изменить</el-button>
        <el-popconfirm title="Вы уверены?" @confirm="handleDelete(scope.row.id)">
          <template #reference>
            <el-button size="small" type="danger">Удалить</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/store"

const emits = defineEmits(["edit-user", "delete-user"])

interface Props {
  isLoading: boolean
}

const props = defineProps<Props>()

const userStore = useUsersStore()

const handleEdit = (id: number) => {
  emits("edit-user", id)
}
const handleDelete = (id: number) => {
  userStore.deleteUser(id).then(() => {
    emits("delete-user")
  })
}
</script>

<style scoped lang="scss"></style>
