/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

?Вторая часть практической работы

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
        "Скотт Пилигрим против..."
    ]
};

//! Получение элементов со траницы
const adv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      movies = document.querySelector('.promo__interactive-list');


//! Удаление рекламных блоков со траницы
adv.forEach(function (item) {
    item.remove();
});

//! Изменение жанра фильма
genre.textContent = 'Драма';

//! Изменение заднего фона
promoBg.style.cssText = `background-image: url("img/bg.jpg")`;

movies.innerHTML = "";

movieDB.movies.forEach((film, i) => {
    movies.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});