"use strict";
 
//* Объектно ориентированное программирование в JS >>> прототипное ориентированное прогроммирование

let str = 'some'; // Примитивный тип данных (строка)
let strObj = new String(str); // Превращение в объект через метод

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

//! Устарувший формат свойство «__proto__»

// const man = {
//     health: 100,
//     smart: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = {
//     health: 80
// };

// john.__proto__ = man;

// console.log(john);
// console.log(john.smart);
// john.sayHello();

//! Новый способ формата свойств 
//* 1 - Object.setPrototypeOf(john, man) - Установили прототип «man» для «john»
//* 2 - Object.create(solder) - Создали объект крирпый будет прототипно наследоватся от прототипа «man»
//* 3 - getPrototypeOf

const man = {
    health: 100,
    smart: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(man);

// const john = {
//     health: 80
// };
// Object.setPrototypeOf(john, man);


console.log(john);
console.log(john.smart);
john.sayHello();
