'use strict';

//* 2015год -> Классы - в стандарте ES6
//* Синтактический сахар

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

//* Наследование свойств и методов от класса «Rectangle»
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        //* Метод который вызывает конструктор родителя «Rectangle»
        //! Должна быть всегда на первом месте в конструкторе при раскрытии конструктора
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'yellow');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

