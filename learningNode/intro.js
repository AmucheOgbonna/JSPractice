//MODULES
// CommmonJs , every file is module by default
// Modules - Encapsulated Code (only share minimum)
const john = "John";
const secret = 'SUPER SECRET';
const alex = "Alex";

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
};
sayHi("Susan");
sayHi(john);