'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

//? Получение ширины и высоты видимой части элемента не включая margin (border-box) - 15px(Колесо прокрутки)
//? 385 – 235px
// const width = box.clientWidth;
// const height = box.clientHeight;

//? Получение ширины и высоты видимой части элемента включая margin // 400 – 250px
// const width = box.offsetWidth;
// const height = box.offsetHeight;

//? Полная высота элемента включая невидимую часть элемента
//? Минус 15px(Колесо прокрутки) у ширины элемента 
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

//? при нажатии на кнопку элемент полностью раскрывается
btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';

    //? При нажатии на кнопку показывает в консоль на сколько пикселей с верху
    //? спустился скролл
    console.log(box.scrollTop);
});

//? Метод которое получает все координаты которые есть у элемента (Верх, лево, право, низ)
console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().top);
// console.log(box.getBoundingClientRect().height);

//? Метод узнает какие стили были применены к элементу
const style = window.getComputedStyle(btn);

//? Получение всего списка стилей
console.log(style);
//? получение свойста display
console.log(style.display);
//? Получение цвета фона
console.log(style.backgroundColor);
//? Получение свойства выравнивания
console.log(style.alignItems);

console.dir(document);
console.log(document.documentElement.scrollTop);

//? Скролл относительно текущей позиции
// window.scrollBy(0, 400)
//? Скролл относительно всей страницы
// window.scrollTo(0, 400)