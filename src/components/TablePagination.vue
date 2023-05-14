<template>
  <div>
    <el-pagination
      v-model:current-page="paginationForm.currentPage"
      v-model:page-size="paginationForm.pageSize"
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const paginationForm = ref({
  currentPage: "",
  pageSize: ""
})

const handleSizeChange = () => {
  //
}

const handleCurrentChange = () => {
  //
}
</script>

<style scoped></style>
