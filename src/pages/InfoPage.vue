<template>
  <el-scrollbar max-height="1000px">
    <div class="info-page">
      <h2>Привет! Меня зовут Арсен, я front-end разработчик.</h2>
      <div class="info-page__description">
        <p>
          Мне 20 лет, я учусь в Уфимском университете науки и технологий на специальности
          Информатика и вычислительная техника (заканчиваю 3 курс). Знакомство с JS у меня
          началось 2 года назад в университетском конкурсе. Я разрабатывал мобильное
          приложение для алгоритмической торговли на бирже на React Native.
        </p>
        <p>
          Web-разработка заинтересовала меня уже тогда. Я начал с верстки и через
          некоторое время в команде писал pet проекты на Lit-Elements.
        </p>
        <p>
          Коммерческой разработкой я начал заниматься полтора года назад. Тогда я
          устроился в компанию, разрабатывающую информационные системы для экстренных
          служб (112, 122).
        </p>
      </div>
      <el-scrollbar max-height="350px" always style="width: 450px">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :color="activity.color"
            :type="activity.type"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </el-scrollbar>
      <div class="info-page__stack">
        <h3>Технологии с которыми я работал:</h3>
        <el-carousel :interval="4000" trigger="click" type="card" height="200px">
          <CarouselCardStack v-for="item in stack" :key="item.name" v-bind="item" />
        </el-carousel>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { activities, stack } from "@/static/myInfo"
</script>

<style scoped lang="scss">
h3 {
  padding-bottom: 10px;
}
.info-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;
  padding: 15px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #d1ddef;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #e5eff8;
}
</style>
