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

//! Находим нужные элементы на странице

const promo = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

//! Удаляем блок с рекламной       
promo.forEach(item => {
    item.remove();
});

//! Заменяем текст на странице
genre.textContent = 'Драма';

//! Заменяем фон блока с помощью JS
promoBg.style.cssText = `background-image: url("img/bg.jpg"); background-size: cover`;

//! Удаляем список со страницы
movieList.innerHTML = '';

movieDB.movies.sort();
// console.log(movieDB.movies);
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} - ${film}
            <div class="delete"></div>
        </li>
    `;
});

