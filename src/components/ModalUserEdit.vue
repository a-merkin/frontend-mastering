<template>
  <VueFinalModal
    style="display: flex; justify-content: center; align-items: center"
    contentStyle=""
  >
    <div class="modal">
      <el-form>
        <el-form-item label="Activity name">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input v-model="form.first_name" />
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input v-model="form.last_name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal"
import { ref } from "vue"
import type { User } from "@/types/User"

const form = ref({} as User)

const handleSubmit = () => {
  console.log(form)
}
</script>

<style scoped lang="scss">
.modal {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
