"use strict";

//* Методы и свойства у строк и чисел

const str = 'teSt';
const arr = [1, 2, 3];

// console.log(str.length);
// console.log(str[2]);
// console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('q'));

const logg = 'jahawindsjhfblakdsjf';
console.log(logg.slice(4, 7));
console.log(logg.substring(4, 7)); //! не поддерживает отрицательные значения
console.log(logg.substr(4, 7));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test)); //! Возварщает округленное число
console.log(parseFloat(test)); //! Возращает число с плавающей точкой