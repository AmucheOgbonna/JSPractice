/* The Singleton pattern is thus known because it restricts 
instantiation of a class to a single object. Classically, 
the Singleton pattern can be implemented by creating a class 
with a method that creates a new instance of the class if 
one doesn't exist. In the event of an instance already 
existing, it simply returns a reference to that object. 

In JavaScript, Singletons serve as a shared resource 
namespace which isolate implementation code from the global 
namespace 
so as to provide a single point of access for functions.

*/

let singleton = (function () {
    let instance;

    function privateMethod() {
        console.log("I am private");
    }
    let privateVariable = "I am also private";
    let privateRandomNum = Math.random();
    function init() {
        var privateRandomNumber = Math.random();
        return {
            getRandomNumber: function () {
                return privateRandomNumber;
            }

        };

    }
    return {
        publicMethod: function () {
            console.log("The public can see me!");
        },
        publicProperty: "I am also public",
        getRandomNumber: function () {
            return privateRandomNum;
        },
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }

    };

})();