//* Оператор «Rest»

const log = function(a, b, ...anyName) {
    console.log(a, b, anyName);
}

log('basic', 'rest', 'optrator', 'useg'); // basic rest [ 'optrator', 'useg' ]



function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);