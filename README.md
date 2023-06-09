# frontend-mastering
Данное приложение написано с целью отобразить мой уровень frontend разработки. 

В качестве API был использован сервис тестовых запросов [ReqRes](https://reqres.in/). 

Приложение содержит страницу авторизации и регистрации. 

<img width="500" alt="image" src="https://github.com/a-merkin/frontend-mastering/assets/64312315/6077c733-d295-49dc-b12c-7c51b2ca8590">
<img width="500" alt="image" src="https://github.com/a-merkin/frontend-mastering/assets/64312315/a060580a-46dc-4536-8cc2-f7c155017628">

После авторизации пользователь попадает на главную станицу, где находится таблица с данными, полученными с API. 

<img width="512" alt="image" src="https://github.com/a-merkin/frontend-mastering/assets/64312315/aba35ff0-9e6b-4133-8b40-a15c5019da8d">

Есть возможность регулировать пагинацию, указать количество элементов для получения а также вручную ввести страницу на которую мы хотим перейти.

Приложение имеет CRUD(создание, вывод, изменение, удаление) функционал для работы с полученными с сервера данными. 

<img width="500" alt="image" src="https://github.com/a-merkin/frontend-mastering/assets/64312315/de2379f0-8adf-4a5d-a0ae-8871d42d63c6">
<img width="500" alt="image" src="https://github.com/a-merkin/frontend-mastering/assets/64312315/6b9ee5ef-20cc-4b15-be5d-89ed8552346f">


Реализована система оповещений об ответах сервера с последующим отображением уведомлений об успешном/неуспешном запросе.

<img width="500" alt="image" src="https://github.com/a-merkin/frontend-mastering/assets/64312315/9294bfcc-e795-43e6-8313-af73cefc2f4a">
<img width="500" alt="image" src="https://github.com/a-merkin/frontend-mastering/assets/64312315/55ded277-4186-4ea3-a511-a22df8904f73">



Также:

Выполнена настройка CI/CD с выкладкой в GitHubPages (https://a-merkin.github.io/frontend-mastering/) и Netlify (https://beamish-sorbet-28f214.netlify.app).

Для содержания кода в едином стиле были использованы [Eslint](https://eslint.org/) и [Prettier](https://prettier.io/).

Написан pre-commit hook для запуска линтера и форматирования кода.

Написан автоимпорт для минимизации объема кода связанного с импортом Vue или UI kit компонентов.

Стек используемых технологий: 

 - [Vue js](https://vuejs.org/) (Composition API)
 - [TypeScript](https://www.typescriptlang.org/)
 - Стейт-менеджер [Pinia](https://pinia.vuejs.org/)
 - Ui Kit [Element Plus](https://element-plus.org/en-US/)
 - HTTP клиент [Axios](https://axios-http.com/ru/docs/intro)
 - CSS препроцессор [SCSS](https://sass-scss.ru/)

# Инструкция запуска:
Для авторизации или регистрации тестовое API принимает только определенную почту: eve.holt@reqres.in, пароль можно использовать любой.

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
