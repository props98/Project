"use strict";

//* Контекст вызова функции "this"
//* То что окружает функцию и в каких условиях она вызываеться

//* 1) Обычная функция: this = window, но если use strict: this = undefined
//* 2) Контекст у методов объекта - будет сам объект
//* 3) This в конструкторах и классах - это новый экземпляр объекта
//* 4) Ручная привязка «This» call, apply, bind


//* Первая ситуация вызова This
//! Без строгого режима такая конструкция будет ссылаться на «window»
//! Со строгим режимом такая конструкция будет выводить «undefined»
// function showThis() {
//     console.log(this);
// }
// showThis();


//* Вторая ситуация вызова This
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);


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


//* Третья ситуация вызова This
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello! ${this.name}`);
//     }
// }
// let max = new User('Max', 23);



//* Четвертая ситуация вызова This
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Jhon'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Carter']);

//* Вызывает новую функцию
// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(33));


//* Практика к уроку, разбор на кнопке

const btn = document.querySelector('button');

//! Имеем доступ к this
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

//! Стрелочная функция контекст вызова теряется «This будет равна undefined»
btn.addEventListener('click', () => {
    this.style.backgroundColor = 'red';
});

//! Если в стрелочной функции передать event событые сработет
btn.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
});



//! У стрелочной функции нет своего контекста вызова
//* Метод стрелочная функция say ссылаеться на своего родителя, на метод sayNumber
//* a метод sayNymber ссылветься на сам оюъект, выводом функции «say» будет объект «obj»
const obj = {
    num: 5,
    name: 'Max',
    sayNumber: function() {
        const say = () => {
            console.log(this.name);
        }

        say();
    }
}

obj.sayNumber();



//* Стрелочные функции - укароченный вид 
//* Если тело функции помещаеться в одну строку, можно опустить фигурные скобки и «return»
//* Если один оргумент можно опустить круглые скобки

const double = a => a * 2;
console.log(double(5));