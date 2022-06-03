"use strict";

//* Контекст вызова функции "this"
//* То что окружает функцию и что вызывается

//? 1) 
//? Первый вызов функции / Простой вызов функции
//! Обычная функция:  this = window, но если стоит "use strict"  this = undefined

//* function showThis() {
//*     console.log(this);
//* }
//* showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

//? 2)
//? Второй вызов функции
//! Контекст у методов объекта это будет сам объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         //  console.log(this);

//         //? Простой вызов фнкции, контекст вызова в этой функции выдаст undefined
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();

//? 3)
//? Третий вызов функции - конструктора
//! This в конструктарах и классах это новый экземпляр объекта / This ссылаеться на новый объект

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;

//     //? Метод объекта
//     this.hello = function() {
//         console.log(`Hello! ${this.name}`);
//     }
// }
// let ivan = new User('Ivan', 23);

// console.log(ivan.hello());

//? 3)
//? Четвертый вызв функции
//! РУчная привязка this: call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Jhon'
// };

//! Первый вариант ручного присвоения контекста метод - call()
//? добавление аргумента через запятую
// sayName.call(user, ' Smith');

//! Второй вариант ручного присвоения контекста, метод - apply()
//? добавление аргумента через массив
// sayName.apply(user, [' Arrr']);

//! Третий вариант ручного присвоения контекста, метод - bind()
//! Создает новую функцию связанную с определеным контекстом
//  function count(num) {
//      return this * num;
//  } 

//  const double = count.bind(2);
//  console.log(double(3));
//  console.log(double(9));



const btn = document.querySelector('button');

//? при класческом вызове функции при клике будет ссылаться на сам элемент
// btn.addEventListener('click', function() {
//     // console.log(this);
//     this.style.backgroundColor = 'yellow';
// });

//? Стрелочная функция Контекст вызова теряеться
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor  = 'yellow';
});

//? Функция в объекте ссылается на сам объект
//? стрелочная функция ссылается на родителя
//? стрелочные функции не имеют своего контекста вызова "this"
const obj = {
    num: 5,
    text: 'Hello',
    sayNumber: function() {
        //? Стрелочная функция ссылаеться на родителя
        const say = () => {
            console.log(this.text);
        }
        say();
    }

    // sayNumber: function() {
    //     console.log(this);
    //     function sayText() {
    //         //! Обычный вызов функции выдасть undefind
    //         console.log(this);
    //     }

    //     sayText();
    // }
}

obj.sayNumber();


const double1 = (a) => {
    return a * 2;
};

//? Короткие виды записи
//! return не нужен
// const double2 = (a) => a * 2;

//! Если один аргумент скобки можно не использовать
const double3 = a => a * 2;

console.log(double1(4));