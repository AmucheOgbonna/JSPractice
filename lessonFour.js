//laugh it Off (Quiz)
function laugh() {
    var laughing = "hahahahahahahahahaha!";
    return laughing;
}

console.log(laugh());

function laughs(num) {
    var laughing = "ha";
    for (var x = 1; x < num; x++) {
        laughing = laughing + "ha";
    }
    laughing = laughing + "!";
    return laughing;
}
console.log(laughs(5));

//Testing the difference between console and return
function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    //return "Returning: I am returning this string!";
}

console.log(isThisWorking(3));

//Using return values
function addTen(x) {
    return x + 10;
}

function divideByThree(y) {
    return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));

//QUiz(Build a Triangle)
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
console.log(makeLine(4));

function buildTriangle(num) {
    var row = "";
    for (var x = 0; x <= num; x++) {
        row += makeLine(x);
        console.log(row);
    }
    return row;
}
buildTriangle(4);

//Callback functions
var favouriteMovie = function (movieName) {
    console.log("My favavorite movie is " + movieName);
};
function movie(messageFunction, name) {
    messageFunction(name);
}
//console.log(favouriteMovie);
movie(favouriteMovie, "Finding Nemo");

//OR OR OR OR OR 
movie(function displayName(movieName) {
    console.log("My favourite movie is " + movieName);
}, "Finding AMuche");

function reverseString(str) {
    var reversedString = "";
    for (var x = []; x < str; x++) {

        reversedString += str[x];
    } return str;
}
console.log(reverseString("hello"));

