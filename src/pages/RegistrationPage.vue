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
        <el-button type="primary" @click="handleRegistration">Создать аккаунт</el-button>
        <el-button @click="handleCancel">Отмена</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
const handleRegistration = () => {
  //
}
const handleCancel = () => {
  //
}
</script>

<style scoped></style>
