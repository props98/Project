"use strict";


//? Отталкиваемся от родителя
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes); //! Nodelist
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

//! Получение элемента 
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);


//? Получение родителя от ребенка
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('.class').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode); //! Родитель родителя от ребенка

//! Получение элемента РОДИТЕЛЯ
// console.log(document.querySelector('#current').parentElement);



//? Получение через дата атрибута
//! Получение узла - Нода
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-yourName="3"]').previousSibling);

//! Получение элемента СЛЕДУЮЩЕГО ИЛИ ПРЕДИДУЩЕГО ЭЛЕМЕНТА
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);
// console.log(document.querySelector('[data-yourName="3"]').previousElementSibling);


//!  Переберающая функция NODE-list (for of)
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}