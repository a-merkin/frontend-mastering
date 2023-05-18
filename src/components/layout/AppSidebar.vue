<template>
  <el-menu default-active="1" class="sidebar" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1" @click="router.push('/users-list')">
      <el-icon><UserFilled /></el-icon>
      <span>Список пользователей</span>
    </el-menu-item>
    <el-menu-item index="2" @click="router.push('/about')">
      <el-icon><UserFilled /></el-icon>
      <span>Об авторе</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import router from "@/router"

const handleOpen = () => {
  //
}
const handleClose = () => {
  //
}
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
}
</style>
