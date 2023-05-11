<template>
  <div>
    <el-form class="auth__form" label-position="top">
      <el-form-item label="Эл. почта">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">Войти</el-button>
        <el-button @click="handleRegistration">Регистрация</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import router from "@/router"

const handleLogin = () => {
  router.push("/workplace")
}
const handleRegistration = () => {
  router.push("/register")
}
</script>

<style scoped></style>
