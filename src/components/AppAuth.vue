<template>
  <div>
    <el-form
      ref="ruleFormRef"
      class="auth__form"
      label-position="top"
      :model="form"
      :rules="rules"
    >
      <el-form-item label="Эл. почта" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input v-model="form.password" type="password"
          ><template #suffix>
            <el-button link
              ><el-icon><Hide /></el-icon> </el-button></template
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="isLoading" @click="submitForm(ruleFormRef)"
          >Войти</el-button
        >
        <el-button @click="handleRegistration">Регистрация</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import router from "@/router"
import { ref, reactive } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import { useAppStore } from "@/store/"

const { handleLogin } = useAppStore()

const ruleFormRef = ref<FormInstance>()

const isLoading = ref(false as boolean)

const form = reactive(
  {} as {
    email: string
    password: string
  }
)

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

const rules = reactive<FormRules>({
  password: [{ required: true, validator: validatePassword, trigger: "blur" }],
  email: [{ required: true, validator: validateEmail, trigger: "blur" }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: boolean) => {
    if (valid) {
      isLoading.value = true
      handleLogin(form).then(() => {
        router.push("/workplace")
        isLoading.value = false
      })
    } else {
      return false
    }
  })
}

const handleRegistration = () => {
  router.push("/register")
}
</script>

<style scoped></style>
