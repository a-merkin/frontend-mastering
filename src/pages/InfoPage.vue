<template>
  <el-scrollbar max-height="1000px">
    <div class="info-page">
      <h2>Привет! Меня зовут Арсен, я front-end разработчик.</h2>
      <div class="info-page__description">
        <p>
          Мне 20 лет, я учусь в Уфимском университете науки и технологии на 3 курсе. Моя
          специальность - Информатика и вычислительная техника. Знакомство с JS у меня
          началось 2 года назад в университетском конкурсе. Я разрабатывал мобильное
          приложение для алгоритмической торговли на бирже (использовал React Native).
        </p>
        <p>
          Web-разработка заинтересовала меня уже тогда. Я начал с верстки и через
          некоторое время начал писать pet проекты на Lit-elements.
        </p>
        <p>
          Коммерческой разработкой я начал заниматься полтора года назад. Тогда я
          устроился в компанию, разрабатывающую информационные системы для экстренных
          служб (112, 122).
        </p>
      </div>
      <div class="info-page__stack">
        <h3>За 1.5 года я познакомился с большим количеством технологий:</h3>
        <p>Chart.js - построение диаграмм и графиков.</p>
        <p>WebSocket - разработка чатов и двусторонней связи между пользователями.</p>
        <p>JsSip - разработка web-телефонии.</p>
        <p>Vuex, Pinia - стейт менеджеры.</p>
        <p>Leaflet, OpenLayers - разработка интерактивных карт.</p>
        <p>Vuetify, Element Plus - UI киты.</p>
      </div>
      <div class="info-page__achievments">
        <h3>Индивидуальные достижения:</h3>
        <p>Рефактор приложения с Vue 2 Option на Vue 3 Composition.</p>
        <p>Разработка функционала звонков-конференций.</p>
        <p>Разработка модуля интерактивной карты.</p>
        <p>
          Разработка модуля статистики с отображением данных в виде диаграм и графиков.
        </p>
      </div>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
          :color="activity.color"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
const activities = [
  {
    content: "Конкурс в универе (React Native)",
    timestamp: "Март 2021"
  },
  {
    content: "Изучение верстки",
    timestamp: "Июнь 2021"
  },
  {
    content: "Изучение JS + Lit elements",
    timestamp: "Сентябрь 2021"
  },
  {
    content: "Командные pet-проекты",
    timestamp: "Ноябрь 2021"
  },
  {
    content: "Стажировка Vue js",
    timestamp: "Декабрь 2021"
  },
  {
    content: "Первая работа",
    timestamp: "Февраль 2022 - по настоящее время",
    color: "#0bbd87"
  }
]
</script>

<style scoped lang="scss">
.info-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;
  padding: 15px;
}
</style>
