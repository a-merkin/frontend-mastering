<template>
  <el-carousel-item>
    <div class="card">
      <h3 class="card__title">{{ props.name }}</h3>
      <el-link
        :href="props.link"
        target="_blank"
        icon="Link"
        class="card__technology"
        type="primary"
        >{{ props.technology }}</el-link
      >
      <p class="card__description">{{ props.description }}</p>
      <el-image style="width: 80px; height: 80px" :src="props.img" />
    </div>
  </el-carousel-item>
</template>

<script setup lang="ts">
interface Props {
  name: string
  technology: string
  description: string
  img?: string
  link?: string
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;

  &__technology {
    text-align: center;
  }

  &__description {
    text-align: center;
    font-size: 13.5px;
  }
}
</style>
