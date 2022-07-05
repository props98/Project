"use strict";

//? Динамическая типизация

//////////////* to String
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) Конкaтенация
console.log(typeof(String(5 + '')));
console.log(typeof(String(null + '')));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';


//////////////* To Number
// 1)
console.log(typeof(Number('4')));

// 2) Унарный плюс
console.log(typeof(+'4'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt('Hello', '');


//////////////* to Bolean
// 1)
//! Всeгда false 
//!   0, '', null, undefined, NaN

//* Не работает switcher => null => false
let switcher = null;
if (switcher) {
    console.log('Working...');
}

//* Работает switcher => 1 => true
switcher = 1;
if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3) Два знака отрицания превращает в boolean
console.log(typeof((!!'4444')));