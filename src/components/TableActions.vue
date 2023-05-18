<template>
  <div class="actions">
    <el-button @click="emit('create-user')">Создать</el-button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["create-user"])
</script>

<style scoped lang="scss">
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
