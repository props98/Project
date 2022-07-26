"use strict"

//* Работы с датами »»» DATE

//! Начало отсчета даты - «1970-01-01»

// const now = new Date('2022-07-26');
// const now = new Date(2020, 7, 26, 20);
// const now = new Date(0);
// const now = new Date(-99999999);

const now = new Date('2022-07-26');
    // new Date.parse('2022-07-26');

//! Методы Set (Сеттеры)
// console.log(now.setHours(40));
// console.log(now);

//! Методы Get (Геттеры)
// console.log(now.getFullYear()); //* Год
// console.log(now.getMonth()); //* Месяц
// console.log(now.getDate()); //* День

//? getHours(); getMinutes(); getSeconds;

//* Нулевой отсчет с воскресенья = 0 и т.д.
// console.log(now.getDay()); //* День недели

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime()); 


let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за: ${end - start} милисекунды`);