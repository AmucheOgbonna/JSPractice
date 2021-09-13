//Using Oblect Literals
var car = {
    name: "Camry",
    tyres: 4,
    horn: function () {
        console.log("PI, PI, PI");
    }
};
console.log(car.name);

//Using Object Constructors
var person = new Object();
person.firstname = "AMuche";
person.lastname = "Ogbonna";
person.getFullname = function () {
    return this.firstname + " " + " " + this.lastname;
};