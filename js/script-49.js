//* Оператор «Rest»

const log = function(a, b, ...anyName) {
    console.log(a, b, anyName);
}

log('basic', 'rest', 'optrator', 'useg'); // basic rest [ 'optrator', 'useg' ]



function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);

// Остаточные параметры и оператор расширения

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3, 4, 5));


function sumAll(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumAll(1, 2, 3));

function showName(firstName, lastName, ...titles) {
    console.log(firstName + ' ' + lastName);
    console.log(titles.length);
    console.log(titles[0]);
    console.log(`${titles[0]} ${firstName} ${lastName}`);
}
showName('Ivan', 'Petrov', 'Hello', 'Bye');

function showArguments() {
    console.log(arguments.length);
    console.log(arguments[0]);
}
showArguments('Hello', 'world');


// Оператор расширения


console.log(Math.max(3, 5, 1));

let arr = [3, 2, 1];
console.log(...arr, 10);
console.log(Math.max(...arr, 10));

let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];
let merge = [0, ...arr1, 0, ...arr2];
console.log(merge);

let str = 'Hello';
console.log([...str][1]);
console.log(Array.from(str)[2]);