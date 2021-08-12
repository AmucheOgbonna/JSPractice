/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */
const fruits = [];

function sockMerchant(n, ar) {
    let result = 0;
    var array = fruits.concat(ar);

    //console.log(array);
    // if (n === ar.length) {
    for (var i = 0; i < ar.length; i++) {
        console.log(ar);
        for (var k = 0; k < ar.length; k++) {
            console.log(ar);
            if (ar[i] == ar[k]) {
                //array.splice(k, 1);
                result += 1;
            } else {
                result += 0;
            } return result;

        }
    }
}
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
var r = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
    let result = 0;
    if (n === ar.length) {
        for (let i = 0; i < ar.length; i++) {
            for (let k = 0; k < ar.length; k++) {
                if (ar[i] == ar[k]) {
                    result += 1;

                } else {
                    result += 0;

                }
            } return result;
        }
    }
}


function getDuplicateArrayElements(arr) {
    var sorted_arr = arr.slice().sort();
    var results = [];
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    return results;
}

var colors = ["red", "orange", "blue", "green", "red", "blue"];
var duplicateColors = getDuplicateArrayElements(colors);//["blue", "red"]