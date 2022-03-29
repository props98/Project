"use strict";

/* 
    Задание на урок:

    1) Автоматизировать вопросы пользователю про фильмы при помощи цикла.

    2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
    отменить ответ или ввести название фильма длинее, чем 50 символов. Если это присходит -
    возвращаем пользователя к вопросам опять.
    (К любой строке можно обратиться как str.length - и получить ее длину)

    3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение
    "Просмотренно давольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если
    больше - "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

    4) Потренироваться и переписать цикл еще двумя способами
*/

const numberOfFilm = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '0');

//     if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// };

let i = 0;

while (i < 2) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 10) {
        personalMovieDB.movies[a] = b;
        i++;
        console.log('done');
    } else {
        i = 1;
        console.log('error');
    }
};

if (personalMovieDB.count < 10) {
    console.log('Просмотренно давольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);

