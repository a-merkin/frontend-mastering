<template>
  <div>
    <el-form class="auth__form" label-position="top">
      <el-form-item label="Эл. почта">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleAuth">Войти</el-button>
        <el-button @click="handleRegistration">Регистрация</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import router from "@/router"
import { ref } from "vue"
import { useAppStore } from "@/store/"

const { handleLogin } = useAppStore()

const form = ref(
  {} as {
    email: string
    password: string
  }
)

const handleAuth = () => {
  handleLogin(form.value).then(() => router.push("/workplace"))
}
const handleRegistration = () => {
  router.push("/register")
}
</script>

<style scoped></style>
