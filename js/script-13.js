"use strict";

//* Callback Функции

function first(second) {
    //DO Something
    setTimeout(function() {
        console.log(1);
    }, 500);
    second()
}

function second() {
    console.log(2);
}

first(second);

// function line(a, b) {
//     console.log(1);
//     a();
//     console.log(2);
//     b();
// }
// line(first, second);



function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('I pass this lesson!');
}

learnJS('JavaScript', done);