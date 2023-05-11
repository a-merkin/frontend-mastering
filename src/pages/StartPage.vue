<template>
  <div class="start-page">
    <IconITTP />
    <p class="start-page__title">{{ pageTitle }}</p>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import router from "@/router"
import { computed } from "vue"

const pageTitle = computed(() => {
  return router.currentRoute.value.meta.title
})
</script>

<style scoped lang="scss">
.start-page {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 15px 30px;
  border-radius: 5px;
  width: 400px;

  &__title {
    text-align: center;
  }
}
</style>
