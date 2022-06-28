"use strict";

//* Callback Функции

//Функция с задержкой, имитация работы функции с сервером
function first() {
    // do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log('I learn ' + lang);
    callback();
}

function done() {
    console.log('I passed this lesson');
}

//Передаем функцию не вызывая ее, функция вызывается в «learnJS»
learnJS('JavaScript', done);

