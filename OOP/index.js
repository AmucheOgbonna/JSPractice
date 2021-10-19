console.log("Hello World");
//Defining objects:Object literal syntax
const circle = {
    radius: 1,
    Location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log("draw ");
    }
};
circle.draw();

//Using Factory because of return

function createCircle(radius) {
    return {
        radius: 1,
        draw: function () {
            console.log("draw ");
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);

//Using Constructor because of this, new keyword 
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    };
}
const circle2 = new Circle(1);
console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);
console.log(circle2.constructor);

//Circle2, is the same with the function below
/*     */