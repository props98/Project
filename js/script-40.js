"use strict"

//* DATE

//! Начало отсчета даты - «1970-01-01»
// const now = new Date(0);
// console.log(now);

//? timestamp - любая дата это секунды

//* Методы
const now = new Date();
// console.log(now.getFullYear()); // Получит год / всегда четырез значный
// console.log(now.getMonth()); // Получит месяц
// console.log(now.getDate()); // Получит день
// console.log(now.getDay()); // Получит нумерация дня, начало 0 - воскресенье

// console.log(now.getUTCHours());

// console.log(now.getTime()); // Возращает количество прошедших секунд с 1970 года
// console.log(now.getTimezoneOffset()); // Разница между часовым поясом и поясои UTC


//* Методы и Сеттеры

// new Date.parse('2020-05-01');

// console.log(now.setHours(15)); // изменяет часы
// console.log(now);

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();
console.log(`worked ${end - start} milisecond`)