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