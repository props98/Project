"use strict";

//* Контекст вызова функции
//* То что окружает функцию и что вызывается

//? Первый вызов функции
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

//? Второй вызов функции
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();

//? Третий вызов функции - конструктора
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello! ${this.name}`);
//     }
// }
// let ivan = new User('Ivan', 23);
// console.log(ivan.hello());

//? Четвертый вызв функции
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Jhon'
// };

//? добавление аргумента через запятую
// sayName.call(user, ' Smith');

//? добавление аргумента через массив
// sayName.apply(user, [' Arrr']);


//? Создает новую функцию связанную с определеным контестом
//  function count(num) {
//      return this * num;
//  } 

//  const double = count.bind(2);
//  console.log(double(3));
//  console.log(double(9));



//! Обычная функция:  this = window, но если стоит use strict  this = undefined
//! контекст у методов объекта это будет сам объект
//! This в конструктарах и классах это новый экземпляр объекта
//! РУчная привязка this: call, apply, bind


const btn = document.querySelector('button');

//? при класческом вызове функции при клике будет ссылаться на сам элемент
// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';
// });

//? Стрелочная функция
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});

//? Функция в объекте ссылается на сам объект
//? стрелочная функция ссылается на родителя
//? стрелочные функции не имеют своего контекста вызова
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        }

        say();
    }
}

obj.sayNumber();

const double1 = (a) => {
    return a * 2;
};

const double2 = (a) => a * 2;
const double3 = a => a * 2;

console.log(double1(4));