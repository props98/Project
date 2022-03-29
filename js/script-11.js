"use strict";

const str = 'teSt';
const arr = [1, 2, 3]

// console.log(arr.length); //! свойство .length вызывается точкой методы со скобками / действие

console.log(str[2]);
console.log(str.toLocaleUpperCase()); //! Метод круглые скобки в конце
console.log(str.toLocaleLowerCase()); //! Метод круглые скобки в конце
console.log(str);

let fruit = 'Somr fruit';
console.log(fruit.indexOf('fruit'));

const logg = 'Hello world!';
// console.log(logg.slice(5, 7));
// console.log(logg.slice(0, 6) + 'ass');

// console.log(logg.substring(5, 11));
console.log(logg.substr(5, 3));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
