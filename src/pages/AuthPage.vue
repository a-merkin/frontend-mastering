<template>
  <div>
    <el-form>
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
const handleLogin = () => {
  //
}
const handleRegistation = () => {
  //
}
</script>

<style scoped></style>
