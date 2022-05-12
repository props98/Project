
//! Асинхронный код - setTimeout()
                          //! анонимная функция - без имени
const time1Id = setTimeout(function() {
    console.log('text1');
}, 2000);

//! передача аргумента функции, через третий аргумент в setTimeout
//* Используеться редко
// const timeId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

//! Передача функцию аргументом (без ее вызова)
const time2Id = setTimeout(logger, 4000);

//! Сброс команды SetInterval
clearInterval(time1Id);
clearInterval(time2Id);

function logger() {
    console.log('text2');
}


//! Анимация на странице при нажатии на кнопку
//! Используем команду setInterval
const btn = document.querySelector('.btn');
let time3Id;
let i = 0;

// function anim() {
//     if (i === 3) {
//         clearInterval(time3Id);
//     }
//     console.log('animation check');
//     i++;
// }

// btn.addEventListener('click', () => {
//     time3Id = setInterval(anim, 1000);
// });


//! Рекурсивный вызов setTimeout
//* let id = setTimeout(function log() {
//*     console.log('Hello');
//*     id = setTimeout(log, 500)
//* }, 500);

const elem = document.querySelector('.box');
let direction = 'right';
let offset = 0;
let id;

function myAnimation() {

    id = setInterval(frame, 20)
    function frame() {
        
        // if (pos == 300) {
        //     clearInterval(id);
        // } else {
        //     pos++;
        //     elem.style.top = pos + 'px';
        //     elem.style.left = pos + 'px';
        // }

        if (direction === 'right') {
            elem.style.left = offset + 'px';
            offset++;
            if (offset > 300) {
                offset = 0;
                direction = 'down'
            }
        } else if (direction === 'down') {
            elem.style.top = offset + 'px';
            offset++;
            if (offset > 300) {
                offset = 300;
                direction = 'left';
            }
        } else if (direction === 'left') {
            elem.style.left = offset + 'px';
            offset--;
            if (offset < 0) {
                offset = 300;
                direction = 'top'
            }
        } else if (direction === 'top') {
            elem.style.top = offset + 'px';
            offset--;
            if (offset < 0) {
                offset = 0;
                direction = 'right'
            }
        }

    }
};

btn.addEventListener('click', myAnimation);

elem.addEventListener('click', () => {
    clearInterval(id);
})