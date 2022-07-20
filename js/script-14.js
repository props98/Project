"use strict";

//* Деструктуризация объектов

//! Старый спобоб создания объекта
// const obj = new Object();
//////////////////////!

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
// console.log(options.name); -> test
// console.log(options['colors']['border']); -> black

//* Удаление свойства у объекта
// delete options.name;
// console.log(options);


//* Перебор всех свойств в объекте for in
// for (let key in options) {
//     console.log(`Свойтва ${key} имеет значение ${options[key]}`);
// }

//* Перебор вложенного объекта
let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойтва ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойтва ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);


//* Документация MDM Object
//* Методы объекта

const obj = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    //* Созданный метод объекта
    makeTest: function(str) {
        console.log(str);
    }
};
//* Получение массива из свойств объекта
console.log(Object.keys(obj));

//* Получение количество свойст объекта из полученого массива
console.log(Object.keys(obj).length);

obj.makeTest('Hello');


//////////////* Деструктуризация объекта

const obj2 = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

//* Выносим свойства вложенного объекта в отдельные переменные диструктурируем 
const {border, bg} = obj2.colors;
console.log(bg);