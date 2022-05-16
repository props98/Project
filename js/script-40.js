"use strict"

//! DATE  

//* Месяцы считаються с нуля

//!Передача даты в ввиде строки
const now1 = new Date('2022-05-15');

//! Передача прямых аргументов
const now2 = new Date(2020, 5, 15);

//! Исходная точка отсчета 1970-01-01T00:00:00.000Z
//* Чтобы получить ранюю дату нужно использвать отрицытельные значения -777
const now3 = new Date(0);

//? new Date.parse('2022-05-15');

//!Вывод текущей системной даты
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