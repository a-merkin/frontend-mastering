<template>
  <el-form
    ref="ruleFormRef"
    :model="form"
    class="auth__form"
    label-position="top"
    :rules="rules"
    @keyup.enter="submitForm(ruleFormRef)"
  >
    <el-form-item label="Эл. почта" prop="email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="Пароль" prop="password">
      <el-input v-model="form.password" type="password" :show-password="true"></el-input>
    </el-form-item>
    <el-form-item label="Подтверждение пароля" prop="password_confirmation">
      <el-input
        v-model="form.password_confirmation"
        type="password"
        :show-password="true"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="submitForm(ruleFormRef)"
        >Создать аккаунт</el-button
      >
      <el-button @click="handleCancel">Отмена</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import router from "@/router"
import { ref, reactive } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import { useAppStore } from "@/store"

const { handleRegister } = useAppStore()

const ruleFormRef = ref<FormInstance>()

const form = reactive(
  {} as {
    email: string
    password: string
    password_confirmation: string
  }
)

const isLoading = ref(false as boolean)

const validateEmail = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("Введите email"))
  } else {
    callback()
  }
}

const validatePassword = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("Введите пароль"))
  } else {
    callback()
  }
}

const validatePasswordConfirm = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("Введите пароль"))
  } else if (value !== form.password) {
    callback(new Error("Пароли не совпадают"))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  password: [{ required: true, validator: validatePassword, trigger: "blur" }],
  password_confirmation: [
    { required: true, validator: validatePasswordConfirm, trigger: "blur" }
  ],
  email: [{ required: true, validator: validateEmail, trigger: "blur" }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: boolean) => {
    if (valid) {
      isLoading.value = true
      handleRegister({ email: form.email, password: form.password }).then(() => {
        isLoading.value = false
        router.push("/workplace")
      })
    } else {
      return false
    }
  })
}
const handleCancel = () => {
  router.push("/auth")
}
</script>

<style scoped></style>
