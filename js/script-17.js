"use strict";
 
//* Объектно ориентированное программирование в JS >>> прототипное прогроммирование

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

// const john = {
//     health: 100
// };

//! Устарувший формат свойство «__proto__»
// john.__proto__ = solder;

// console.log(john);
// console.log(john.armor);
// john.sayHello();

//! Новый способ формата свойств 
//* 1 - setPrototypeOf(john, solder) - Установили прототип
//* 2 - Object.create(solder) - Создали объект крирпый будет прототипно наследоватся от прототипа «solder»
//* 3 - ?
 
Object.setPrototypeOf(john, solder);

const john = Object.create(solder);

john.sayHello();