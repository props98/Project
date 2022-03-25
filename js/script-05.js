"use strict";

console.log('arr' + ' - object');
console.log(4 + ' - object');

//! Знак "+" перед стракой 5 называется УНАРНЫЙ ПЛЮС преобразует строку с число, 
console.log(4 + +'5');
//! не преобразует если в строке текст или слово.
console.log(4 + +' какой-то текст');

//! Инкременты и Дикременты
let incr = 10,
    decr = 10;


//! Инкремент: увелечение на единицу
incr++;
//! Декремент: уменьшение на единицу
decr--;

console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2*4 === '8');

//! && - Если есть два провдивых аргумента
//! || - Если один из аргументов провдивый

const isChecked = true,
      isClose = false;

console.log(isChecked || isClose);

