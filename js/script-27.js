"use strict";

/* 1) Какое будет выведено значение: let x = 5; alert( x++ );*/ 

let x = 5; 
console.log( x++ ) //! 6


/* 2) Чему равно такое выражение: [ ] + false - null + true */

console.log([ ] + false - null + true); //! NaN

/* 3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); */

let y = 1; 
let x = y = 2; 

console.log(x); //! 2

/* 4) Чему равна сумма [ ] + 1 + 2 */

console.log([ ] + 1 + 2); //! 12

/* 5) Что выведет этот код: alert( "1"[0] ) */

console.log( "1"[0]); //! 1

/* 6) Чему равно 2 && 1 && null && 0 && undefined */

console.log(2 && 1 && null && 0 && undefined); //! null

/* 7) Есть ли разница между выражениями? !!( a && b ) и (a && b) */

console.log(!!( a && b )); 
console.log( a && b );

/* 8) Что выведет этот код: alert( null || 2 && 3 || 4 ); */

console.log(null || 2 && 3 || 4); // true

/* 9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b */


/* 10) Что выведет этот код: alert( +"Infinity" ); */


// 11) Верно ли сравнение: "Ёжик" > "яблоко"


/* 12) Чему равно 0 || "" || 2 || undefined || true || falsе */

