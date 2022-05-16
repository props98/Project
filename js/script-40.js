"use strict"

//! DATE  

//* Месяцы считаються с нуля

//!Передача даты в ввиде строки
const now1 = new Date('2022-05-15');
//? new Date.parse('2022-05-15');

//! Передача прямых аргументов
const now2 = new Date(2020, 5, 15);

//! Исходная точка отсчета 1970-01-01T00:00:00.000Z
//* Чтобы получить ранюю дату нужно использвать отрицытельные значения -777
const now3 = new Date(0);

//!Вывод текущей системной даты
// console.log(now);

//! Основные Методы по отдельным компонентам
// console.log(now.getFullYear()); //? получаем год всегда четырех значный
// console.log(now.getMonth()); //? получаем месяц - счет с нуля 0 - 11
// console.log(now.getDate()); //? дни от 1 до 31
// console.log(now.getDay()); //? Начало с воскресенья = 0

// console.log(now.getHours());
// console.log(now.getMinutes();
// console.log(now.getSeconds();

//! Местное время
// console.log(now.getHours());
//! Аналог UTC - 
// console.log(now.getUTCHours());]

//! Метод - разница между часовым поясом и UTC
// console.log(now.getTimezoneOffset());

//! Колчиество милисекунд которые прошли с начальной точки отсчета
// console.log(now.getTime());

// let time = now.getTime();
// console.log(Date(time));

//! Сеттеры - установка времени
// console.log(now.setHours(11));
// console.log(now.setDate(11));
// console.log(now.setMonth(10));
// console.log(now.setYear(2011));

//! Простенький Benchmark - Посмотреть производительность системы
let start = new Date(); //? Текущая дата

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //? ** Возводит в степень
}

let end = new Date(); //? Конечная дата

alert(`Отработал за ${end - start} миллисекунд`);