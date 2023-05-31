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
      <el-scrollbar max-height="250px" always style="width: 450px">
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
    content: "Первая работа (Vue js)",
    timestamp: "Февраль 2022 - по настоящее время",
    color: "#0bbd87"
  },
  {
    content: "Фриланс проект SSR (Vue js, Nuxt)",
    timestamp: "Декабрь 2022",
    type: "primary"
  }
]
const stack = [
  {
    name: "Диаграммы",
    technology: "Chart.js",
    description: "Создание диаграмм и графиков",
    img: "https://www.chartjs.org/img/chart-types.svg",
    link: "https://www.chartjs.org/"
  },
  {
    name: "Websocket клиент",
    technology: "Socket IO",
    description: "Подключение к сокет-серверу и обработка событий",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
    link: "https://socket.io/"
  },
  {
    name: "Web-телефония",
    technology: "Js SIP",
    description: "Разработка и отладка функционала sip и ТфОП звонков",
    img: "https://freesvg.org/img/molumen_phone_icon.png",
    link: "https://jssip.net/"
  },
  {
    name: "Стейт-менеджеры",
    technology: "Vuex, Pinia",
    description: "Управление состоянием приложения",
    img: "https://cdn1.iconfinder.com/data/icons/cartoon-glyphs-part-3/128/Graph_Diagram_Mindmap_Block-1024.png",
    link: "https://pinia.vuejs.org/"
  },
  {
    name: "Интерактивные карты",
    technology: "Leaflet, OpenLayers",
    description: "Разработка карт",
    img: "https://pic.onlinewebfonts.com/svg/img_220469.png",
    link: "https://openlayers.org/"
  },
  {
    name: "UI киты",
    technology: "Vuetify, Element Plus",
    description:
      "Готовые компоненты и стили для создания интерфейсов и быстрой разработки",
    img: "https://avatars.githubusercontent.com/u/68583457?s=200&v=4",
    link: "https://element-plus.org/en-US/"
  }
]
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
