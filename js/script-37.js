"use strict";

//* ClassList и делегирование событий - динамические изменения

const btns = document.querySelectorAll('button');

//* Получение количество классов которе содержить элемент
// console.log(btns[0].classList.length);

//* Получение класса по его индексу начиная с 0
// console.log(btns[0].classList.item(0));

//* Добавление класса в элементе
// console.log(btns[1].classList.add('red', 'secondClass'));

//* Удаление класса в элементе
// console.log(btns[0].classList.remove('blue'));

//* Переключение классов
// console.log(btns[0].classList.toggle('blue')); 

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    //* Используем Toggle
    //! Toggle не всегда доступен
    btns[1].classList.toggle('red');
});

//! Не использовать className - выводит список классов одной строкой
// console.log(btns[0].className);


//* Делегирование событий
const wrapper = document.querySelector('.btn-block')

wrapper.addEventListener('click', (event) => {
    event.preventDefault();

    // console.dir(event.target);
    //! Проверяет и выводит к сонсоль Hello если событие происходит на кнопке «tagName»
    // if (event.target && event.target.tagName == 'BUTTON') {
    //     console.log('Hello!');
    // }

    //* Продтвинутое делегирование
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello!');
    }

    //! Проверяет и выводит в консоль Hello если кнопка содержить класс «blue»
    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('Hello!');
    // }
});

// //* Назначение события пребором
// //! Событие не рабатоет на динамическом элементе
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('forEach Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);