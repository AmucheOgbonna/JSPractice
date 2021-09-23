/* jshint proto: true */
var car = {
    model: "Mercerdez",
    color: "White",
    prize: 5000
};
console.log(car);

car.type = "4WD";//To add a new property to the oblject:Car,using dot notation
console.log(car);
// console.log(car['prize']);


//Construction Objects
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getYearOfBirth = function () {
        return new Date().getFullYear() - this.age;
    };
}
const firstPerson = new Person("Amara Peters", 21);
console.log(firstPerson.getYearOfBirth());

//Classes; Objects defined easily
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calculateArea();
    }
    calculateArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 12);
console.log(square.area);
//Object prototype
const cars = {
    brand: "Camry"
};
console.log(cars.__proto__);
