<template>
  <el-menu default-active="1" class="sidebar" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1">
      <el-icon><Watermelon /></el-icon>
      <span>Путь 1</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <span>Путь 2</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
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
