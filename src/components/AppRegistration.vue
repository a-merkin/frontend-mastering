<template>
  <el-form class="auth__form" label-position="top">
    <el-form-item label="Эл. почта">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="Пароль">
      <el-input></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleRegistration">Создать аккаунт</el-button>
      <el-button @click="handleCancel">Отмена</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import router from "@/router"

const handleRegistration = () => {
  router.push("/workplace")
}
const handleCancel = () => {
  router.push("/auth")
}
</script>

<style scoped></style>
