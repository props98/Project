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


    //! Получение нового фильма через input
    //! Добавление нового фильма в dataBase
    //! Проверка названия фильма на колическто символов
    //! Проверка чекбокса на добавление фильма в категорию любимые
    //! Добавление фильма в список по сортировке
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // let newInput = addInput.value;
        let newInput = firstLetterToUppercase(addInput.value);
        const like = checkbox.checked;
        
        if (newInput) {
           
            if (newInput.length > 8) {
                newInput = newInput.substring(0, 8) + '...';
            }

            if (like) {
                console.log(newInput + ': Добавляем любимый фильм');
            }
            movieDB.movies.push(newInput);
            sortList(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        console.log(movieDB.movies);

        e.target.reset();
    })

    
    
    //! Удаление исходного списка со траницы
    const deleteAdv = (arr) => {
        adv.forEach(item => {
            item.remove();
        });
    }

    //! Изменения в главном баннере
    const makeChanges = () => {
        promoBG.style.cssText = 'background-image: url(img/bg.jpg)';
        genre.textContent = 'драма';
    }

    //! Делает первый символ заглавным
    function firstLetterToUppercase(string) {
       return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //! Сортировка полученного списка
    function sortList(arr) {
        arr.sort();
    }
    
    //! Добавление нового списка на страницу на основе базы данных
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieDB.movies, movieList);
            });
        });
    }

    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);
    sortList(movieDB.movies);
    makeChanges();
});