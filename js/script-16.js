"use strict";

//! Простое копирование примитивов, передаются по значению
let a = 5,
    b = a;

b = b + 5;
console.log(b); // 10
console.log(a); // 5

//! Передача по ссылке 
const obj = {
    a: 5,
    b: 1
};
// const copy = obj; //! obj, массивы, функции -  передает ссылку на объект ! НЕ СОЗДАЕТ КОПИЮ

// copy.a = 10; 
// console.log(copy);
// console.log(obj);

//! Использование функции для копировании объекта ||||>>>>  Первый метод клонирования
//! Поверхностная копия объекта (Без вложенния, только первый уровень вложенности)

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
};

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); //! Создание копии объета через функцию

newNumbers.a = 10; //! Внесли изменения в скопированное свойство объекта
// newNumbers.c.x = 10; //! Измения в копии второго уровня вложенности !!!не сработает

console.log(numbers);
console.log(newNumbers);

//! Копирования объекта с помощью метода >>>>>> Object.asssign() ||||>>>> Второй метод клонирования

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); //! Копия объекта

clone.d = 20; //! Замена свойтва объекта d = 20
// console.log(add);
// console.log(clone);

//! Клонирование (Копия) Массива ||||>>>> Третий метод клонирования

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adsfasdfasd';
console.log(oldArray);
console.log(newArray);

//! ||| Оператор развертка массива(unpacking) "spread" ES8 |||||>>>>> Четвертый способ клонирования

const video = ['youtube', 'vimeo', 'reatube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; //! массив всех свойств video, blogs

// console.log(internet);

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

newAarray[0] = 'adsfasdf';
newObj.three = 7;
newObj.one = 100;

console.log(array);
console.log(newAarray);
console.log(q);
console.log(newObj);