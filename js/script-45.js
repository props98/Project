// "use strict";

//* Функции конструкторы ES - «5»

//! Устаревший вид
// const num = new Function(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    //* Метод функции конструктора «User»
    this.hello = function()  {
        console.log(`Hello ${this.name}`);
    };
}

//* Добавляем метод в функцию конструктор «User»
User.prototype.exit = function() {
    console.log(`User ${this.name} left`);
}

const ivan = new User('Ivan', 22);
const max = new User('Max', 25);
// const t2 = new User('T2', 100, false)

//* Вызываем методы функции конструктора «User»
ivan.hello();
ivan.exit(); 
max.hello();

console.log(ivan);
console.log(max);