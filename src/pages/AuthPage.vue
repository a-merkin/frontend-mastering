<template>
  <div>
    <el-form label-position="top">
      <el-form-item label="Эл. почта">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">Войти</el-button>
        <el-button @click="handleRegistation">Регистрация</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import router from "@/router"

const handleLogin = () => {
  //
}
const handleRegistation = () => {
  router.push("/registration")
}
</script>

<style scoped></style>
