<br />
<div align="center">

  <h3 align="center">Chronicle</h3>

  <p align="center">
  Данный вебсайт представляет собой новостной портал. На выбор представлено 5 категорий: бизнес, спорт, наука, здоровье, развлечения. Так же есть сортировка новостей по странам: США, Украина, Россия, Германия, Китай. Можно добавлять свои новостные посты, а так же комментировать каждый пост в отдельности. Далее будет обзор остальных возможностей сайта. <br />
  </p>
</div>


### Использованные технологии

* Angular
* NgRx
* RxJs
* Ngx-pagination
* Google icons
* Bootstrap
* Версия NodeJS - 16.20.1
* API - newsapi.org

Реализована полная адаптивность под все устройства.

## Запуск приложения локально

### Установка

1. Клонируем репозиторий
   ```sh
   git clone https://github.com/GlebProkopovich/news-angular-app
   ```
2. Устанавливаем все необходимые зависимости
   ```sh
   npm install
   ```
3. Запускаем приложение
   ```sh
   ng serve
   ```

   
## Использование

<img src="https://i.ibb.co/BTms0Gy/2023-07-17-11-22-19.png" alt="Sign in" width="1000" height="400">
<img src="https://i.ibb.co/QbBsn8p/2023-07-17-11-26-46.png" alt="Sign in" width="1000" height="400">

1. Для успешного логина используем email: admin@gmail.com, password: admin12345. Логинизация реализована через localStorage, после логина в хранилище сохраняется "токен" и по нему проверяется авторизован ли пользователь в дальнейшем. В случае успешного логина будет выведено уведомление об успешном логине, а в случае ввода некорректных данных увеомление об ошибке.

<img src="https://i.ibb.co/PgkJ21J/2023-07-17-12-19-44.png" alt="Interface" width="1000" height="400">
<img src="https://i.ibb.co/dMy3Jcd/2023-07-17-12-27-32.png" alt="Interface" width="1000" height="400">
<img src="https://i.ibb.co/Lg2cKyr/2023-07-17-11-31-29.png" alt="Interface" width="1000" height="400">
   
2. В header реализована навигация по сайту, а так же возможность разлогиниться. Проскроллив немного вниз главной страницы начинается отображение новостных постов, которые можно фильтровать по разным категориям и странам, а так же возможен поиск по ключевым словам. По клику на кнопку "ADD ARTICLE" есть возможность добавить свой кастомный пост. Так же реализована пагинация.
   
<img src="https://i.ibb.co/yRBTCCr/2023-07-17-12-08-38.png" alt="Interface" width="1000" height="400">
<img src="https://i.ibb.co/y4Ftssm/2023-07-17-12-10-14.png" alt="Interface" width="1000" height="400">

3. Есть возможность перейти в детальную информацию о каждом новостном посте по клику на кнопку "Details", там можно перейти на источник информации о новости в развернутом виде кликнув на кнопку "READ FULL ARTICLE", а так же можно оставлять комментарии.

<img src="https://i.ibb.co/jH6N8Xs/2023-07-17-12-23-29.png" alt="Interface" width="1000" height="400">
<img src="https://i.ibb.co/gg6z42z/2023-07-17-12-24-41.png" alt="Interface" width="1000" height="400">

5. Для добавления поста нужно заполнить форму, если какие-то поля не будут заполнены они будут использовать значение по умолчанию.

<img src="https://i.ibb.co/3FLMSGL/2023-07-17-12-13-57.png" alt="Interface" width="1000" height="400">

6. Страница about.

<img src="https://i.ibb.co/r5XwH5n/2023-07-17-12-14-59.png" alt="Interface" width="1000" height="400">
<img src="https://i.ibb.co/7pRRzL3/2023-07-17-12-15-45.png" alt="Interface" width="1000" height="400">

7. Страница выбора тарифа платной подписки.


<!-- CONTACT -->
## Контакты

Почта: glebprokopovich@gmail.com

Ссылка на проект: https://github.com/GlebProkopovich/news-angular-app
