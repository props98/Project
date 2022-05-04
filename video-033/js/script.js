/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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

    //! DataBase
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
    
    //! Получение элементов со странцы сайта
    const adv = document.querySelectorAll('.promo__adv img'),
          promoBG = document.querySelector('.promo__bg'),
          genre = promoBG.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list');

    const addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newInput = addInput.value.toLowerCase();
        const like = checkbox.checked;

        if (newInput) {

            if(newInput.length > 21) {
                newInput = newInput.substring(0, 21) + '...';
            } 

            if (like) {
                console.log(newInput + ': Добавляем любимый фильм');
            }

            movieDB.movies.push(newInput);
        }

        console.log(newInput);
        console.log( movieDB.movies);

        sortList(movieDB.movies);
        newList();
        
    })
    
    //! Удаление исходного списка со траницы
    const removeAdv = () => {
        adv.forEach(item => {
            item.remove();
        });
    }

    //! Изменения в главном баннере
    const changes = () => {
        promoBG.style.cssText = 'background-image: url(img/bg.jpg)';
        genre.textContent = 'драма';
    }

    //! Сортировка полученного списка
    const sortList = (list) => {
        list.sort();
    }
    
    //! Добавление нового списка на страницу из базы данных
    function newList() {
        movieList.innerHTML = '';

        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `
        });
    }
    
    sortList(movieDB.movies);
    newList();
    removeAdv();
    changes();
});