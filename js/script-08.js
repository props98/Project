"use strict";

//* Циклы

let num = 50;

//* Первый цикл 
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

//* Второй цикл
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

//* Третий цикл
// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

//* Цикл с отановкой «break» / «continue»
for (let i = 1; i < 10; i++) {
    if (i  === 6) {
        // break;
        continue;
    }
    console.log(i);
}

//////////////////? Задачи

//* Перебор четных цифр от 1 - 30
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}