var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
var crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

var donuts = ["jelly", "chocolate", "glazed"];
//donuts.forEack(function (donut) {  doesn't change the original array not sure
var newArr = donuts.map(function (donut) {
    donut += " donut";
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
    return donut;
});

var word = ["cat", "in", "hat"];
word.forEach(function (word, num, all) {
    console.log("Word " + num + " in " + all + " is " + word + ".");
});

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37,
    4, 19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139];
test.map(function (num, index) {
    if (num % 3 === 0) {
        test[index] += 100;
    }
});
console.log(test);
console.log(newArr);

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function (num) {
    num += num * 0.15;
    num = num.toFixed(2);
    num = Number(num);//casting
    return num;

});
console.log(totals);

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
for (var row = 0; row < numbers.length; row++) {
    for (var col = 0; col < numbers[row].length; col++) {
        if (numbers[row][col] % 2 === 0) {
            numbers[row][col] = "even";
        } else {
            numbers[row][col] = "odd";
        }
    }
}
console.log(numbers);