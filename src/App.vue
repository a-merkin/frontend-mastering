<script setup lang="ts">
import { RouterView } from "vue-router"
import router from "@/router"
import { setToken } from "@/services/api"

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
  <RouterView />
</template>

<style scoped lang="scss"></style>
