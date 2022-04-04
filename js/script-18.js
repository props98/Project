"use strict";

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let  numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '0');

            a.slice(0, 2).toLocaleLowerCase();
    
        if (a != null && b != null && a != '' && b != '' && a.length < 20) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    };
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно давольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// function showMyDB () {
//     if (personalMovieDB.private == false) {
//         console.log(personalMovieDB);
//     }
// }

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    };
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
        let genres = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(genres.toLocaleLowerCase()); //! Методом .push()
    };
}


rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.private);
writeYourGenres();

console.log(personalMovieDB);