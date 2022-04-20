"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width  = '500px';

//! Одиночное изменение стилей
// btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'yellow';

//! Несколько - изменений стиля
// const num = 450;
// box.style.cssText = `background-color: red; width: ${num}px`;


//! Действия над несколькими элементами 
//! Циклом
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'pink';
//     hearts[i].style.borderRadius = '100px';
// }

hearts.forEach(item => {
    item.style.cssText = 'background-color: lightgrey';
});

// const div = document.createElement('div');
const text = document.createTextNode('Созданный текст через JS');

// div.classList.add('black');

// document.body.append(div); //? Элемент добавлен перед закрывающим тегом body

// wrapper.append(div); //? Элемент вставлен в блок wrapper в конец
// wrapper.appendChild(div); //! Устаревший способ добавление элемента

// wrapper.prepend(div); //? Элемент вставлен в начало блока wrapper

// hearts[2].before(div); //? Перед или после выброного элемента
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); //! Устаревший способ добавление элемента

// circles[0].remove(); //? Удаление элемента
// wrapper.removeChild(hearts[1]); //! Устаревший способ удаления элемента

// hearts[0].replaceWith(circles[0]); //? замена выбранного элемента
// wrapper.replaceChild(circles[0], hearts[0]); //! Устаревший способ замены элемента

// div.innerHTML = '<h1>Hello world!</h1>';
// div.textContent = 'Hello!';

// div.insertAdjacentHTML('afterBegin', '<h2>beforeBegin</h2>'); //? вставляется в начало/перед элементом h1
// div.insertAdjacentHTML('beforeBegin', '<h2>afterBegin</h2>'); //? вставляет код перед элеменотом div
// div.insertAdjacentHTML('afterEnd', '<h2>afterEnd</h2>'); //? вставляет после элеменота div
// div.insertAdjacentHTML('beforeEnd', '<h2>beforeEnd</h2>'); //? вставляется в в конце элементом h1


//! Самостоятельная практика

// box.style.marginBottom = '30px';

box.style.cssText = 'border-bottom: 5px solid green; margin-bottom: 30px';

let longText = btns[2].textContent;
let sliced = longText.slice(0, 4);


if (longText.length > sliced.length) {
    sliced += '...';
    console.log(sliced);
    btns[2].textContent = sliced;
}


for (let i = 0; i < btns.length; i++) {
    btns[i].style.cssText = 'background-color: blue; margin-bottom: 30px';
}

const wrapperCircle = document.createElement('div');

for (let i = 0; i < circles.length; i++) {
    circles[i].style.cssText = 'background-color: green;';
    wrapperCircle.insertAdjacentHTML('afterbegin', circles);
}

circles[2].style.marginBottom = '30px';