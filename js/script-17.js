"use strict";

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str)); //! typeof - тип данных
// console.log(typeof(strObj));

console.dir([1, 3, 4]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Say Hello!');
    }
};

const john = Object.create(soldier); //! Новый объект Джон прототипно наследуемый от солдата

john.health = 100;
// const john = {
//     health: 100
// };

// john.__proto__ = soldier; //! Устаревший способ прототипирования объекта
Object.setPrototypeOf(john, soldier); //! Новый способ (прототип от Джона до солдата)

console.log(john.health);
john.sayHello()