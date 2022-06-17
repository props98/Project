"use strict";

////////////* JSON

const persone = {
    name: 'Alex',
    tel: '+75555555',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

//! Клиент с сервером / Протоколы основы HTTP запросов
//! 3 формата  JSON
//! 1 - URL Encoded / стандартная отправка формы с перезагрузкой страницы
//! 2 - form Data 
//! 3 - формат Data JSON 

// console.log(JSON.stringify(persone));
// console.log(JSON.parse(JSON.stringify(persone)));

//! Глубокоу клонирование объекта не зависящие друг от друга
let clone = JSON.parse(JSON.stringify(persone))

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);

