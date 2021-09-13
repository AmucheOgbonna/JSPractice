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

console.log(person);

function changeFirstname(obj) {
    obj.firstname = "steve";
}
changeFirstname(person);

console.log(person);

//Nested Objects
var person = {
    firstname: "Amuche",
    "age": 30,
    nationality: {
        id: 1,
        countryCode: "NG",
        state: "Umuhia",
        address: "Government college",
    },
    lastname: "Ogbonna",
};
