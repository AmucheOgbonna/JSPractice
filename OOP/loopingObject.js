/* We can use the for in loop to enumerate through Objects */
function Square(length, width) {
    this.length = length;
    this.width = width;
    this.calculateArea = function () {
        return length * width;
    };
}

const square1 = new Square(4, 5);
console.log(square1.calculateArea());

for (let key in square1) {
    if (typeof square1[key] !== 'function') {//to check typeOf value
        console.log(key, square1[key]);
    }
}
//TO get all the keys in an object, outputs it in an array
const keys = Object.keys(square1);
console.log(keys);

//To get particular property
if ('length' in square1) {
    console.log(`The area is ${square1.calculateArea()}`);
}