"use strict";

//* Контекст вызова функции "this"

//! То что окружает функцию и в каких условиях она вызываеться

//* 1) Обычная функция: this = window, но если use strict: this = undefined
//* 2) Контекст у методов объекта - будет сам объект
//* 3) This в конструкторах и классах - это новый экземпляр объекта
//* 4) Ручная привязка «This» call, apply, bind

//* Обычная функция «this = window» но если стоит «use strict = undefined» 
// function showThis(a, b) {
//     // console.log(this);
//     function sum() {
//         // console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

//* Контекст у методов объекта - сам объект
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         // console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();

//* This в конструктарах и классах это новвый экземпляр объекта
// function User(name, id) {
// this.name = name;
// this.id = id;
// this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// let peter = new User('Peter', 25);
// peter.hello();

//* Ручная привязка This: call, apply, bind
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Peter'
// };

// sayName.call(user, 'Parker');
// sayName.apply(user, ['Jhion']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(10));


//* Стролочная функция полная запись

const double = (a) => {
    return a * 2;
}

//* Стрелочные функции - укароченный вид 
//* Если тело функции помещаеться в одну строку, можно опустить фигурные скобки и «return»
//* Если один оргумент можно опустить круглые скобки
// const double = a => a * 2;
// console.log(double(5));


//! Практическая задача

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

//* Выводит undfind контекст вызова у стролочной функции теряеться
//* Используется событие для стрелочной функции event.target
// btn.addEventListener('click', (event) => {
//     event.target.style.backgroundColor = 'red';
// });

//* Стрелочная функция say() ссылаеться на своего родителя на метод объекта sayNumber()
//* метод объекта ссылаеться на сам объект, поэтому вызовом стрелочной функции say()
//* будет вызов объкта obj
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
            console.log(this.num);
        };

        say();
    }
}

obj.sayNumber();




