<template>
  <VueFinalModal
    style="display: flex; justify-content: center; align-items: center"
    contentStyle="background: #fff; padding: 20px; border-radius: 5px; height: fit-content"
  >
    <div class="modal">
      <p class="modal__title">
        {{ title }}
      </p>
      <el-form v-loading="loaders.formLoader" @keyup.enter="handleSubmit">
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
          <el-button type="primary" :loading="loaders.sumbitLoader" @click="handleSubmit">
            Подтвердить
          </el-button>
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

const loaders = ref({
  sumbitLoader: false,
  formLoader: false
} as {
  sumbitLoader: boolean
  formLoader: boolean
})

const emit = defineEmits<{
  (e: "close"): void
  (e: "confirm"): void
}>()

const initForm = () => {
  if (props.userId) {
    loaders.value.formLoader = true
    usersStore
      .getUser(props.userId)
      .then(({ data }) => {
        loaders.value.formLoader = false
        form.value = data.data
      })
      .catch(() => (loaders.value.formLoader = false))
  } else
    form.value = {
      email: "",
      first_name: "",
      last_name: ""
    }
}
initForm()

const handleSubmit = () => {
  loaders.value.sumbitLoader = true
  if (props.userId) {
    usersStore
      .updateUser(form.value)
      .then(() => {
        loaders.value.sumbitLoader = false
        emit("confirm")
      })
      .catch(() => (loaders.value.sumbitLoader = false))
  } else {
    usersStore
      .createUser(form.value)
      .then(() => {
        loaders.value.sumbitLoader = false
        emit("confirm")
      })
      .catch(() => (loaders.value.sumbitLoader = false))
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
