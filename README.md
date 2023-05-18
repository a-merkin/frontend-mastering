# frontend-mastering
Данное приложение написано с целью отобразить мой уровень frontend разработки. 

В качестве API был использован сервис тестовых запросов [ReqRes](https://reqres.in/). 

Приложение содержит страницу авторизации и регистрации. После авторизации пользователь попадает на главную станицу, где находится таблица с данными, полученными с API. Приложение имеет CRUD(создание, вывод, изменение, удаление) функционал для работы с полученными с сервера данными. Реализована система оповещений об ответах сервера с последующим отображением уведомлений об успешном/неуспешном запросе.

Также:

Выполнена настройка CI/CD с выкладкой в GitHubPages (https://a-merkin.github.io/frontend-mastering/) и Netlify (https://beamish-sorbet-28f214.netlify.app).

Написан pre-commit hook для запуска линтера и форматирования кода.

Стек используемых технологий: 

 - [Vue js](https://vuejs.org/) (Composition API)
 - [TypeScript](https://www.typescriptlang.org/)
 - Стейт-менеджер [Pinia](https://pinia.vuejs.org/)
 - Ui Kit [Element Plus](https://element-plus.org/en-US/)
 - HTTP клиент [Axios](https://axios-http.com/ru/docs/intro)
 - CSS препроцессор [SCSS](https://sass-scss.ru/)

# Инструкция запуска:
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format code with [Prettier](https://prettier.io/)

```sh
npm run format
```
