"use strict";

if (4 == 9) {
    console.log('ok!');
} else {
    console.log('Error!')
}

// const num = 50;
if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('Big')
} else {
    console.log('Ok!');
}

//* Тернарный оператор - участвуют три аргумента
//* Сначала условие если не первое тогда второе
(num === 50) ? console.log('Ok!') : console.log('Error!');

//* Бинарный - участвуют два аргумента
4 + 4

//* Унарный плюс - Участвует один аргумент
+'4';


const num = 49;

switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('big');
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('sorry');
        break;
}