"use strict";

//! Виды функций
//* Function declaration -
//* Создается до начала выполнения скрипта, можно вызвать перед объявлением
//?  function foo() {
//?     ...
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

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    // let num = 10;
    console.log(num);
}
showFirstMessage('Hello world!');
console.log(num);


function calc(a, b) {
    return (a + b);
    // console.log('dew'); // После return код не выполняеться
}
console.log(calc(2, 3));
console.log(calc(7, 3));
console.log(calc(7, 13));

function ret() {
    let num = 50;

    // какой-то код

    return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Hello');
};
logger();

const calc2 = (a, b) => a + b;