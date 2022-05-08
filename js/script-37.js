"use strict";

//! ClassList делегирование событий 
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//! Узнаем сколько классов у элемента
// console.log(btns[0].classList.length);

//! Находим нужный класс элемента по индексу методом item()
// console.log(btns[0].classList.item(1));

//! Добавляем нужный класс методом 
// console.log(btns[1].classList.add('red', 'dfdfdf')); //!добавление второго класса
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }

    // btns[1].classList.toggle('red'); //! Использовать с осторожностью
});

// console.log(btns[0].className); //! СТАРЫЙ МЕТОД - выводит строку всех классов

//! Сробатывание обработчика событий у всех кнопок в родителе
// wrapper.addEventListener('click', (evt) => {
//     if (evt.target && evt.target.tagName == "BUTTON") {
//         console.log('hello');
//     }
// });

//! Сробатывание обработчика событий если у определнггого тега с определеным классом есть совпадения.
//! Google
wrapper.addEventListener('click', (evt) => {
    // if (evt.target && evt.target.tagName == 'BUTTON') {
    //     console.log('Contains tagName "BUTTON"');
    // };

    // if (evt.target && evt.target.classList.contains('red')) {
    //     console.log('Contains class RED');
    // };

    //! Google тема / метод - matches / совпадение элемента
    if (evt.target && evt.target.matches('button.red')) {
        console.log('hello');
    }

    // console.dir(evt.target);
});

//! Перебераем все кнопки и навешиваем на них событие Click, НЕ работает на созданных элементах в JS
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello');
    })
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);