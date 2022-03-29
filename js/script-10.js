"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    // let num = 10; // 10
    console.log(num); // 20
}
showFirstMessage('Hello world!');
console.log(num); // 20

//! Замыкание функции - Сама функуция вместе со всеми внешними переменными которые ей доступны

function calc(a, b) {
    return ( a + b );
    console.log('eeeeeeeee'); //! после return функция не работает
};
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
    let num = 50;
    return num;
};
const anotherNum = ret();
console.log(anotherNum);


//! Виды функций
//* Function declaration -
//* Создается до начала выполнения скрипта, можно вызвать перед объявлением
//?  function foo() {
//?  ...
//?  }

//* Function expression - 
//* Создается только тогда, когда доходит поток кода, можно вызвать только после объявления
//?  let foo = function() {
//?      ...  
//?  };

//* Стрелочные функции -
//* Не имеет своего контескта (this) - контекста вызова
/*const calc = (a, b) => a + b;*/ //*Если помещается в одну строчку
//?  () => {
//?      ...
//?  };


const calc = (a, b) => {
    return a + b;
}
console.log(calc(3, 2));
