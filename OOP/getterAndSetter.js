let Person = {
    firstName: "Amuche",
    lastName: "Ogbonna",
    yearPublished: 2014,
    get FullName() {
        return this.firstName + " " + this.lastName;
    },
    set FullName(Lname) {
        this.lastName = Lname;
    }
};
Person.FullName = "MaryLucy";
console.log(Person.FullName);