"use strict";

const arr = [1, 2, 3, 6, 8];

//* Работа с концом массива
// arr.pop(); //Удалить
// arr.push(100); //Добавить

//* Работа с началом массива
// arr.shift(100);
// arr.unshift(100);

// console.log(arr);

//* Перебор массива циклом и «for of»
//Обычный цикл
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//! можно использовать break и continue
// for (let value of arr) {
//     console.log(value);
// }

//* Длина массива
//! «Свойство length состоит из последнего индекса в массиве плюс один»
// console.log(arr.length);
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

//* Метод в массиве перебор массива «forEach»
// Метод используеться с коллбек функцией которая принмает 3 аргумента =>
// (элемент, индекс, перебираемый массив)
arr.forEach(function(item, index, array) {
    console.log(`${index}: ${item} inside array ${array}`)
});

//* Методы split, join, sort
//Формирование массива на остновании строки, разделенные запятой
const str = 'string, ok, num';
const products = str.split(', ');
console.log(products);

const names = ['Jhon', 'Peter', 'Anna'];
names.sort(); // сортирует массивы как строки
const namesString = names.join(', ');
console.log(namesString);

let arrNum = [2, 13, 5, 6, 11, 0];
arrNum.sort(compareNum)
console.log(arrNum);

function compareNum(a, b) {
    return a - b;
}