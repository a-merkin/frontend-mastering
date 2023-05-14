<template>
  <el-dropdown class="user-menu">
    <div class="user-menu__info">
      <p class="user-menu__username">test testovich</p>
      <p class="user-menu__email">test.testovich@gmail.com</p>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleNotification"
          >Уведомления включены</el-dropdown-item
        >
        <el-dropdown-item @click="handleLogout">Выход</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store"

const { handleLogout } = useAppStore()

const handleNotification = () => {
  //
}
</script>

<style scoped lang="scss">
.user-menu {
  &__info {
    padding: 15px;
  }
}
</style>
