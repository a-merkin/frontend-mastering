<template>
  <el-container style="height: 100%">
    <el-header style="padding: 0">
      <AppHeader />
    </el-header>
    <el-container style="height: 100%">
      <el-aside width="100">
        <AppSidebar />
      </el-aside>
      <el-main>
        <div style="background: #fff; height: 100%">
          <RouterView></RouterView>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<style scoped></style>
