"use strict";

let num = 50;

//! Проверяет условие затем выполняет действие
// while (num <= 55) {
//     console.log(num);
//     num++;
// };

//! Сначала выполняет действие затем проверяет условие
// do {
//     console.log(num);   
//     num++;
// }
// while (num <= 55);

for (let i = 1; i < 20; i++) {
    // console.log(num);
    // num++;

    if (i % 2 !== 0) {
        // break;   //! Останавливается
        continue;   //! Пропускает нужное и идет дальше
    }
    console.log(i);
};