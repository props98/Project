"use strict";

// const obj = new Object(); //! Старая запись создания объекта

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}
console.log(options.colors.bg);

// delete options.name; //! Удаляет свойство объекта
// console.log(options);

//! Перебор свойств в объекте при помощи «for ... in»
//! Переменная для счетчика
let counter = 0;
for (let key in options) {
    //! Проверка с перебором вложеных объектов
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            //! Подсчет количества свойств запись в «counter»
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        //! Подсчет количества свойств запись в «counter»
        counter++;
    }
}
// console.log(counter);

////////////! Все свойства и методы ОБЪЕКТА на сайте MDN

console.log(Object.keys(options).length);

const man = {
    name: 'Mike',
    surname: 'Const',
    age: 30,
    pets: {
        dog: 'Rex',
        cat: 'Cat'
    },
    city: 'Denver',
    makeTest: function() {
        console.log('TEST');
    }
}

// console.log(man);
// console.log(Object.keys(man));
// console.log(Object.keys(man).length);

// man.makeTest();

// for (let key in man) {
//     console.log(`key: ${man[key]}`);
// }

//////////////! Деструктуризация объекта

const {dog, cat} = man.pets;
console.log(cat);