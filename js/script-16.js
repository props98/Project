"use strict";

//! Простое копирование примитивов
let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
                     
                     //! Передача по ссылке   
// const copy = obj; //! obj передает ссылку на объект ! НЕ СОЗДАЕТ КОПИЮ

// copy.a = 10; 
// console.log(copy);
// console.log(obj);

//! 

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c']
const newArray = oldArray.slice();

newArray[1] = 'adsfasdfasd';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'reatube'],
      blogs = ['wordpress', 'livehournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5 ,7];

log(...num);

//! Четвертый способ создания поверхностных копий объекта

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);