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

const {border, bg} = options.colors; //! Деструктуризация объекта
console.log(bg);

// console.log(options.colors.bg);

// delete options.name //! Удаление свойства обектов
// console.log(options);

let counter = 0; //! Создание счетчика

for (let key in options) {  //! Перебор объектов

    if (typeof(options[key]) === 'object') {  //! <<<< Перебор объекта в объекте
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

console.log(Object.keys(options).length); //* Посчитать длину объекта

let animal = {
    name: 'Monika',
    color: 'red',
    hobby: 'play',
    eat: 5,
    makeMetod: function() {
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



