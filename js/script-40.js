"use strict"

//! DATE

const now = new Date('2022-05-15');
//? new Date.parse('2022-05-15');

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// console.log(now.getDay()); //! Начало с воскресенья = 0

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

// console.log(now.getTime());
// let time = now.getTime();
// console.log(Date(time));

//! Сеттеры

// console.log(now.setHours(11));
// console.log(now.setDate(11));
// console.log(now.setMonth(10));
// console.log(now.setYear(2011));
// console.log(now);

//! Простенький Benchmark
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //! Возводит в степень
}

let end = new Date();

alert(`Отработал за ${end - start} миллисекунд`);