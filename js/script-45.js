"use strict";

const num = new Number(3);
console.log(num);

//* Конструктор User
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    //* Создание метода объекта
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };

    // exit() {
    //     console.log(`User ${this.name} left`);
    // }
}


//*Свойство prototype с помощью него можно добовлять методы в конструктор
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел!`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 30);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

ivan.hello();
alex.hello();
ivan.exit();

console.log(ivan.id);