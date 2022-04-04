"use strict";

//! Callback Функции

function first() {
    //Do something
    setTimeout(function() { //! Залержка функции на пол секунды
        console.log(1);
    }, 1000);
}

function second() {
    //Do something
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {  //! Callback функция / Первый аргумент текст (любой аргумент), второй важный аргумент CALLBACK (другая функция)
    console.log(`I learn: ${lang}`);
    callback();
}

//! Ананимная функция / после вызова ищезнет
learnJS('Java Script', function() {
    console.log('I passed this lesson!');
});

//! Передача функции для дальнейшего её использования
function done() {
    console.log('Lesson is passed!');
}

function sayHello() {
    console.log('Hello!');
}

learnJS('Java Script', sayHello); //! Передовать без круглых скобок, чтобы вызываласб в опр. вермя.