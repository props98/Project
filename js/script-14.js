"use  strict";

const obj = new Object(); //! старая запись создание объекта

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Metod TEST!');
    }
};

console.log(options['colors']['bg']);

// console.log(options);
// delete options.name //! Удаление свойства обектов
// console.log(options);

const {border, bg} = options.colors; //! Деструктуризация объекта
console.log(bg);

// console.log(options.colors.bg);



let counter = 0; //! Создание счетчика

//! Создание перебора объекта, в объекте при помощи условия
for (let key in options) {  //! Перебор объектов – for in

    if (typeof(options[key]) === 'object') {  //! <<<< Перебор объекта в объекте (typeof проверка типа данных)
        for (let i in options[key])
        console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        counter++;
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);
options.makeTest();

//! Функции и методы внутри объекта
//! Документация MDN – https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

console.log(Object.keys(options).length); //* Посчитать длину объекта

let animal = {
    name: 'Monika',
    color: 'red',
    hobby: 'play',
    eat: 5,
    makeMetod: function() {  //! создание метода
        console.log('My first Metod in JS!');
    }
}

// console.log(animal.length);
// console.log(Object.keys(animal)); //! Получение массива объекта
// console.log(Object.keys(animal).length); //! Получение количество элементов объекта
animal.makeMetod(); //! Вызывается с круглыми скобками

for (let key in animal) {
    console.log(`Key ${key}: ${animal[key]}`);
}


//! Деструктуризация объекта
const deskObj = {
    name: 'Mike',
    age: 25,
    obg1: {
        nest1: 1,
        red: {
            nest2: 2,
            blue: {
                nest3: 3,
                yellow: {
                    nest4: 4,
                    brown: 'End'
                }
            }
        }
    }
};


const {nest1, red} = deskObj.obg1;
const {nest2, blue} = deskObj.obg1.red;
const {nest3, yellow} = deskObj.obg1.red.blue;

// console.log(deskObj);
console.log(blue);
