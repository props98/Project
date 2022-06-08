'use strict';

//! Классы - в стандарте ES6

//* Создание класса, НАЗЫВАЕТЬСЯ ВСЕГДА С БОЛЬШОЙ БУКВЫ
//* Концепции
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //* Создаем МЕТОД класса без «function» (считает площадь прямоугольника)
    calcArea() {
        return this.height * this.width;
    }
}

//* Создание класса наследуемый (extends) от Rectangle
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        //* метод «super» наследование height & width от родителя «Rectangle»
        //* Всегда на первом месте, первой строчкой
        super(height, width);

        //* Присваивание
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

// //* Создаем элемент квадрат и помещаем объект созданный классом
// //* Экземпляры
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

// //* вызовы
// console.log(square.calcArea());
// console.log(long.calcArea());


const div = new ColoredRectangleWithText(25, 10, 'Hello world!', 'red');

div.showMyProps();
console.log(div.calcArea());
console.log(square.calcArea());