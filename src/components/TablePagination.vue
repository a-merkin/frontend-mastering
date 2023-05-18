<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next, jumper, sizes"
      :page-size="props.per_page"
      :page-count="props.maxPage"
      @current-change="(page: number) => handlePaginationEnter('update:page', page)"
      @size-change="(size: number) => emits('update:per_page', size)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface Props {
  page: number
  per_page: number
  maxPage: number
}

const props = defineProps<Props>()

const emits = defineEmits(["update:per_page", "update:page", "submit-pagination"])

const pageField = ref("")

const handlePaginationEnter = (event: any, value: any) => {
  emits(event, value)
  emits("submit-pagination")
  pageField.value = ""
}
</script>

<style scoped></style>
