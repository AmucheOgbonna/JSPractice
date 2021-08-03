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
var to = total.toFixed(2)

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
