"use strict";

const num = new Number(3);
console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`User ${this.name} left`);
    }
}



// User.prototype.exit = function(name) {
//     console.log(`Пользователь ${this.name} ушел!`);
// }

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 30);

// ivan.exit();

// ivan.hello();
// alex.hello();

console.log(ivan.id);