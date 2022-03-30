"use strict";

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 1000);
}

function second() {
    //Do something
    console.log(2);
}

first();
second();


function done() {
    console.log('Lesson is passed!');
}

function learnJS(lang, callback) {  //! Callback функция
    console.log(`I learn: ${lang}`);
    callback();
}

learnJS('Java Script', done); //! Передовать без круглых скобок, чтобы вызываласб в опр. вермя.