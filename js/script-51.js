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

//* Превращает объект в формат JSON >>>> Все сущности записаны в двойные скобки
//* В таком формате можно отправить на сервер
// console.log(JSON.stringify(persone));

//* Форматирование формата JSON в обычный объект JS
//* Можно использовать во фронттенде
//console.log(JSON.parse(JSON.stringify(persone)));

//! Глубокоу клонирование объекта не зависящие друг от друга
let clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
clone.parents.dad = 'Pete';

console.log(persone);
console.log(clone);

