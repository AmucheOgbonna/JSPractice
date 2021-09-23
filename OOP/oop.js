const createCounter = function () {
    let count = 0;
    return {
        click: function () {
            count += 1;
        },
        getCount: function () {
            return count;
        }
    };
};

let counter = createCounter();
counter.click();
counter.click();
console.log(counter.getCount());
console.log(counter.count);//It not available, due to encapsulation, it has been hidden. And can only be accessed via getCOunt()

// To illustrate Inheritance, using a constructor funs
function Animal(name, limbs) {
    this.name = name;
    this.limbs = limbs;
}
Animal.prototype.move = function () {
    console.log("Currently moving");
};
function Dog(name) {
    Animal.call(this, name, 4);//Inheriting from the Animal()
}
Dog.prototype = Object.create(Animal.prototype);

function Bird(name) {//inheriting from the ANimal()
    Animal.call(this, name, 2);
}
Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.move = function () {
    console.log("Currently Flying");
};

const puppy = new Dog("Puppy");
console.log(puppy);
puppy.move();

const chick = new Bird("Chick");
console.log(chick);
chick.move();