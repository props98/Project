/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Апполон",
        "Ямакаси"
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      promoBG = document.querySelector('.promo__bg'),
      genre = promoBG.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

// Убирает рекламноые блоки со страницы
adv.forEach(item => {
    item.remove();
});

// Меняем название жанра
genre.textContent = 'драма';

// Меняем задний фон баннера
promoBG.style.cssText = 'background: url("img/bg.jpg")';

// Очищаем список с фильмами
movieList.innerHTML = '';

// Сортируем спсисок из объекта movieDB
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item"> ${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

