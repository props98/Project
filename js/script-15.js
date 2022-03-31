"use strict";

const arr = [1, 2, 3, 6, 8];

// arr.pop(); //! Удаляет последний элемент массива
// arr.push(10); //! Добавляет последний элемент массива

// console.log(arr);

//! Перебор массива
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

for (let value of arr) {  //! Можно использовать break, continue для выхода
    // console.log(value);
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

//* Метод массива .forEach

arr.forEach(function(element, index, arr) { //! имена ТРЕХ аргументов можно использовать какие угодно
    // console.log(`${element}: ${index} in Array ${arr}`);
});

const str = prompt('Products', '');
const products = str.split(', ')

console.log(products);

products.sort();
// console.log(products);
console.log(products.join('; '));

console.log(products);


const arr2 = [2, 13, 26, 8, 10]; //! Сортируеться как строки посимвольно по возрастанию
arr2.sort();
console.log(arr2);


const arr3 = [2, 13, 26, 8, 10]; 
arr3.sort(compareNum); //! Сортировка массива с помощью функции
console.log(arr3);

function compareNum(a, b) {
    return a - b;
}

//! Псевдомассивы не имеют методов - структура храниние данных по порядку ////////