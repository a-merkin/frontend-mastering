<script setup lang="ts">
import { RouterView } from "vue-router"
import router from "@/router"
import { setToken } from "@/services/api"
import { ModalsContainer } from "vue-final-modal"
import ru from "element-plus/dist/locale/ru.mjs"

function checkToken() {
  const token = localStorage.getItem("token")
  if (token) {
    setToken(token)
    router.push("/workplace")
  } else router.push("/auth")
}

checkToken()
</script>

<template>
  <el-config-provider :locale="ru">
    <RouterView />
    <ModalsContainer />
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
