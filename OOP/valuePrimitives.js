let x = 10;
let y = x;

x = 20;//x and y are to independent variable
let number = 10;
function increase(number) {
    number++;
}
console.log(increase(10));
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}
const circle1 = new Circle(10);
circle1.location = { x: 1 };
//delete circle1.location;
console.log(circle1);