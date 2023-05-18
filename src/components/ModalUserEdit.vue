<template>
  <VueFinalModal
    style="display: flex; justify-content: center; align-items: center"
    contentStyle="background: #fff; padding: 20px; border-radius: 5px; height: fit-content"
  >
    <div class="modal">
      <p class="modal__title">
        {{ title }}
      </p>
      <el-form @keyup.enter="handleSubmit">
        <el-form-item label="Почта">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="Имя">
          <el-input v-model="form.first_name" />
        </el-form-item>
        <el-form-item label="Фамилия">
          <el-input v-model="form.last_name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="isLoading" @click="handleSubmit"
            >Подтвердить</el-button
          >
          <el-button @click="emit('close')">Отмена</el-button>
        </el-form-item>
      </el-form>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal"
import { ref } from "vue"
import type { User } from "@/types/User"
import { useUsersStore } from "@/store"

const usersStore = useUsersStore()

interface Props {
  title: string
  userId?: number
}
const props = defineProps<Props>()

const form = ref({} as User)

const isLoading = ref(false as boolean)

const emit = defineEmits<{
  (e: "close"): void
  (e: "confirm"): void
}>()

const initForm = () => {
  if (props.userId) {
    usersStore.getUser(props.userId).then(({ data }) => {
      form.value = data.data
    })
  } else
    form.value = {
      email: "",
      first_name: "",
      last_name: ""
    }
}
initForm()

const handleSubmit = () => {
  isLoading.value = true
  if (props.userId) {
    usersStore
      .updateUser(form.value)
      .then(() => {
        isLoading.value = false
        emit("confirm")
      })
      .catch(() => (isLoading.value = false))
  } else {
    usersStore
      .createUser(form.value)
      .then(() => {
        isLoading.value = false
        emit("confirm")
      })
      .catch(() => (isLoading.value = false))
  }
}
</script>

<style scoped lang="scss">
.modal {
  &__title {
    font-size: 18px;
    padding-bottom: 20px;
  }
}
</style>
