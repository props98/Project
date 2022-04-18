"use strict";

//? Динамическая типизация

//! to String
//1
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num); // https://vk.com/catalog/5

const fontSize = 26 + 'px';
console.log(fontSize); // 26px

//!To Number
//1
console.log(typeof(Number('4')));

//* 2 Унарный плюс
console.log(typeof(+'5'));

// 3
console.log(typeof(parseInt('15px', 10)));


let answer = +prompt('Hello', '');


//! to Bolean

//! всегда false
0, '', undefined, Nan;

//? 1 Нативный способ динамического преоброзования

let switcher = null;

if (switcher) {
    console.log('working...'); //? Не выполниться null = False
}

switcher = 1;

if (switcher) {
    console.log('working...'); //? Выполниться 1 = True
}

//? 2 способ

console.log(typeof(Boolean('4')));

//? 3 способ

console.log(typeof(!!'22222'));