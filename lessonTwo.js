var a_string = "a";
var ASCII_value = a_string.charCodeAt(0);
console.log(ASCII_value + "\n");

var my_string = "Udadcity";

for (var index = 0; index < my_string.length; index++) {
    var element = my_string.charCodeAt(index);
    console.log(element + "\n");
}
console.log("green" > "Green");

//Booleans
var studentName = "Amuche";
var haveEnrolledCourse = false;
if (0) {
    console.log("Welcome to UDACITY " + studentName);
} else {
    console.log("You can enrolled now " + studentName);
}
//Exercises
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;
var to = total.toFixed(2);

console.log("$" + to);

//exercise
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
console.log("The Intro to JavaScript course is " + adjective1 + " . James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!");

// To check even or odd
var number = -4;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}
// Check musical groups
var musicians = 2;

if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}

//Murder game. Catch the murderer!
// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";
var suspect = "Mrs. Sparr";
var weapon = " ";
var solved = false;

if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr") {
        solved = true;
    }
} else if (room === "dining room") {
    weapon = "knife";
    if (suspect === "Mr. Parkes") {
        solved = true;
    }
} else if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
        solved = true;
    }
} else if (room === "ballroom") {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff") {
        solved = true;
    }
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

//Checking account balance
var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance) {
    if (!isActive && balance > 0) {
        bal = balance.toFixed(2);
        console.log("Your balance is $" + bal + ".");
    } else if (isActive) {
        console.log("Your account is no longer active");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else {
        console.log("YOur balance is negative. Please contact bank");
    }
} else {
    console.log("Thank you. Have a nice day!");
}
//Quiz Ice Cream
var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

// Add your code here
if (flavor === "vanilla" || flavor === "chocolate") {
    if (vessel === "cone" || vessel === "bowl") {
        if (toppings === "sprinkles" || toppings === "peanuts") {
            console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + " .");
        } else {
            console.log("Kindly select a peanut or sprinkles for your icecream");
        }
    }
}

//ANother dimension
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + " .");
} else {
    console.log("Kindly select a peanut or sprinkles for your icecream");
}

//What do I wear
// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;
var size = null;
/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    var size = "S";
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    var size = "M";
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    var size = "L";
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    var size = "XL";
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    var size = "2XL";
} else if (shirtWidth == 28 && shirtLength == 34 && shirtSleeve == 10.13) {
    var size = "3XL";
} else {
    var size = "N/A";
}
console.log(size);

//Tenary Operators
var eatsPlants = true;
var eatsAnimals = false;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

console.log(category);
//Switch Statement
option = 3;

switch (option) {
    case 1:
        console.log("You selected option 1.");
        break;
    case 2:
        console.log("You selected option 2.");
        break;
    case 3:
        console.log("You selected option 3.");
        break;
    case 4:
        console.log("You selected option 4.");
        break;
    case 5:
        console.log("You selected option 5.");
        break;
    case 6:
        console.log("You selected option 6.");
}
//Back to school ====Quiz
var education = 'a Doctoral degree';

// set the value of this based on a person's education
var salary = 0;



// your code goes here
switch (education) {
    case 'no high school diploma':
        salary = 25636;
        sal = salary.toLocaleString("en-US");
        break;
    case 'a high school diploma':
        salary = 35256;
        sal = salary.toLocaleString("en-US");
        break;
    case 'an Associate\'s degree':
        salary = 41496;
        sal = salary.toLocaleString("en-US");
        break;
    case "a Bachelor's degree":
        salary = 59124;
        sal = salary.toLocaleString("en-US");
        break;
    case 'a Master\'s degree':
        salary = 69732;
        sal = salary.toLocaleString("en-US");
        break;
    case 'a Professional degree':
        salary = 89960;
        sal = salary.toLocaleString("en-US");
        break;
    case 'a Doctoral degree':
        salary = 84396;
        sal = salary.toLocaleString("en-US");
}console.log("In 2015, a person with " + education + " earned an average of $" + sal + "/year.");