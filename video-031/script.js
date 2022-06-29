"use strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');


//! Не использовать такой вариант записи обработчика т.к. при повторном
//! вызове будет выводиться последнее сообщение
// btn.onclick = function() {
//    alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

let i = 0;

const deleteElement = (event) => {
    console.log(event.target);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
}; 

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

//* Опции события третий аргумент (type, listener, {option: boleen})
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(evt) {
    evt.preventDefault();

    console.log(evt.target);
});


