type Activity = {
  content: string
  timestamp: string
  type?: "success" | "warning" | "info" | "primary" | "danger"
  color?: string
}

type Technology = {
  name: string
  technology: string
  description: string
  img: string
  link: string
}

export const activities = [
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
] as Activity[]

export const stack = [
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
] as Technology[]
