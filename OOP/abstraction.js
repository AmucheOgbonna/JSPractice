/* We can use the for in loop to enumerate through Objects */
function Triangle(length, base) {

    this.length = length;
    this.base = base;
    let defaultLocation = { x: 0, y: 0 }; //to make it private, only to this fns
    this.getDefaultLocation = function () {
        return defaultLocation;
    };
    this.calculateArea = function () {
        //computeOptimumLocation(0.1);
        //defaultLocation
        //To access properties of fns Triangle, use this keyword
        return length * base * 0.5;
    };
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || value.y) {
                throw new Error('Invalid location');
            }
            defaultLocation = value;
        }
    });
}

const triangle1 = new Triangle(4, 5);
console.log(triangle1.calculateArea());

