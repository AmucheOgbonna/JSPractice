var str = "hhiijj";
console.log(str.length);
console.log(str[5] + str[4] + str[3] + str[2] + str[1] + str[0]);

//To reverse a string
function reverseString(string) {
    var toReverse = string;
    var reversed = "";
    for (x = (toReverse.length) - 1; x >= 0; x--) {
        reversed += toReverse[x];
    }
    console.log(reversed);
    return reversed;
}
reverseString("Hello");

//To factorialize a number
function factorialize(num) {
    var number = 1;
    for (var x = 1; x <= num; x++) {
        number = number * x;
        // console.log(number);
    }
    return number;
}
console.log(factorialize(5));

//To truncate string
function truncateString(str, num) {
    //var string = str;
    if (str.length > num) {
        var stringLength = str[0];
        for (var x = 1; x < num; x++) {
            stringLength += str[x];
        }
        return stringLength + "...";
    } else {
        return str;
    }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//quiz Anonymous function
var laugh = function (num) {
    var laughte = "";
    for (var x = 1; x <= num; x++) {
        laughte += "ha";
    }
    return laughte + "!";
};
console.log(laugh(10));
//quiz named function
var cry = function cry() {

}
