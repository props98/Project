/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против...",
//         "Апполон",
//         "Ямакаси"
//     ]
// };

// const adv = document.querySelectorAll('.promo__adv img'),
//       promoBG = document.querySelector('.promo__bg'),
//       genre = promoBG.querySelector('.promo__genre'),
//       movieList = document.querySelector('.promo__interactive-list');

// // Убирает рекламноые блоки со страницы
// adv.forEach(item => {
//     item.remove();
// });

// // Меняем название жанра
// genre.textContent = 'драма';

// // Меняем задний фон баннера
// promoBG.style.cssText = 'background: url("img/bg.jpg")';

// // Очищаем список с фильмами
// movieList.innerHTML = '';

// // Сортируем спсисок из объекта movieDB
// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item"> ${i + 1}. ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });

//! Вторая часть практики Урок 33

/*
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту 
*/

//! Событие загрузки DOM
document.addEventListener('DOMContentLoaded', () => {

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

    const addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value.toLowerCase();
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 10) {
                newFilm = `${newFilm.substring(0, 10)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);

            // movieDB.movies.sort();//! Заменили на функцию sortArr()
            sortArr(movieDB.movies);

            creatMovieList(movieDB.movies, movieList);
        }

        event.target.reset(); 
    });
    
    //! Функция удаляет рекламу на странице
    const deleteAdv = (arr) => {
        // Убирает рекламноые блоки со страницы
        arr.forEach(item => {
            item.remove();
        });
    }
    
    //! Функция делае изменения на странице
    const makeChanges = () => {
        // Меняем название жанра
        genre.textContent = 'драма';
        // Меняем задний фон баннера
        promoBG.style.cssText = 'background: url("img/bg.jpg")';
    }
    
    //! Функция сортировки массива
    const sortArr = (arr) => {
        // Сортируем спсисок из объекта movieDB
        movieDB.movies.sort();
    }

    //! Функция создания элементов на странице
    function creatMovieList(films, parent) {
        // Очищаем список с фильмами
        parent.innerHTML = '';
        //Сортировка фильмов по алфовиту
        sortArr(films);

        // Добавление элементов в список 
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                creatMovieList(films, parent); //! Рекурсия функции - обновление нумерации списка
            });
        });

    }

    deleteAdv(adv);
    makeChanges();
    creatMovieList(movieDB.movies, movieList);

});