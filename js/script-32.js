"use strict";


//? Отталкиваемся от родителя
// console.log(document.head);
// console.log(document.documentElement);
console.log(document.body.childNodes); //! Nodelist
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

//! Получение элемента 
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);


//? Получение родителя от ребенка
// console.log(document.querySelector('#current').parentNode); //!Нода
// console.log(document.querySelector('#current').parentNode.parentNode); //! Родитель родителя от ребенка

//! Получение элемента
// console.log(document.querySelector('#current').parentElement);



//? Получение через дата атрибута
//! Получение узла
// console.log(document.querySelector('[data-current="3"]').nextSibling); //!Нода
// console.log(document.querySelector('[data-current="3"]').previousSibling); //!Нода

//! Получение элемента
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);


//!  Перебор НОД листа
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}