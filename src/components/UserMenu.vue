<template>
  <el-dropdown class="user-menu" trigger="click">
    <el-button type="primary"
      ><p class="user-menu__username">Меню пользователя</p>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleLogout">Выход</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store"

const { handleLogout } = useAppStore()
</script>

<style scoped lang="scss">
.user-menu {
  display: flex;
  align-items: center;
  padding: 15px;
}
</style>
