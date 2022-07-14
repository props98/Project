// "use strict";

//* Функции конструкторы стандарты ES - «5»

//! Устаревший вид
const num = new Function(3);
console.log(num);

//! Функция конструктор - конструирование объектов
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    //* Метод
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

//! Добавление метода через прототип
User.prototype.exit = function(name) {
    console.log(`User ${this.name} left`);
};


const ivan = new User('Ivan', 28);
const max = new User('Max', 20);

ivan.exit();

ivan.hello();
max.hello();

console.log(ivan);
console.log(max);

//! Классы - синтактический сахар ES - 6