<template>
  <div class="users-page">
    <div class="users-page__table-container">
      <TableActions @create-user="handleUserCreate" />
      <UsersListTable
        :isLoading="isLoading"
        @edit-user="handleUserEdit"
        @delete-user="handleUserDelete"
      />
    </div>
    <TablePagination
      v-model:page="paginationForm.page"
      v-model:per_page="paginationForm.per_page"
      :maxPage="userStore.usersMaxPage"
    />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/store"
import { reactive, watch, ref } from "vue"
import { useModal } from "vue-final-modal"
import ModalUserEdit from "@/components/ModalUserEdit.vue"

const userStore = useUsersStore()

const INIT_PAGINATION = {
  page: 1,
  per_page: 10
}

const isLoading = ref(true as boolean)

const {
  close: closeUserModal,
  open: openUserModal,
  options: userModalOptions
} = useModal({
  component: ModalUserEdit
})

const paginationForm = reactive(
  {} as {
    page: number
    per_page: number
    max_page: number
  }
)

const resetForm = () => {
  Object.assign(paginationForm, INIT_PAGINATION)
}

resetForm()

const fetchUsers = () => {
  isLoading.value = true
  userStore.getUsers({ ...paginationForm }).then(() => {
    isLoading.value = false
  })
}

fetchUsers()

const handleUserCreate = () => {
  userModalOptions.attrs = {
    title: "Создание",
    onClose() {
      closeUserModal()
    },
    onConfirm() {
      closeUserModal()
      fetchUsers()
    }
  }
  openUserModal()
}

const handleUserEdit = (id: number) => {
  userModalOptions.attrs = {
    title: "Редактирование",
    userId: id,
    onClose() {
      closeUserModal()
    },
    onConfirm() {
      closeUserModal()
      fetchUsers()
    }
  }
  openUserModal()
}

const handleUserDelete = () => {
  fetchUsers()
}

watch(paginationForm, fetchUsers)
</script>

<style scoped lang="scss">
.users-page {
  box-sizing: border-box;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__table-container {
    height: 75vh;
  }
}
</style>
