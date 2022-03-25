"use strict";

// alert('Hello!');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('You have 18', '18');
// console.log(typeof(answer));

//! ^^^^
//! Вся информация получаемая от пользователя будет строкой!

// const answer = +prompt('You have 18', '18');
// console.log(answer + 5);

const answers = [];

answers[0] = prompt('What is you name?', '');
answers[1] = prompt('What is you surname?', '');
answers[2] = prompt('How old are you?', '');

console.log(typeof(answers)); //! Массив это частный случай объекта
console.log(typeof(null)); //! Oject