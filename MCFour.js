/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let str = path;
    let patternU = 0;
    let patternD = 0;
    let noValley = 0;
    let strArr = str.split("");
    console.log(strArr.length);
    for (var x = 0; x < strArr.length; x++) {
        console.log(strArr[x]);
        if (strArr[x] == "U") {
            patternU += 1;
        } else {
            patternD += 1;
        }
        //return pattern;
    } //console.log(pattern);
    // if (patternD <= patternU) {
    //     noValley += 1;
    // } else {
    //     noValley += 2;
    // }
    if ((strArr[strArr.length - steps]) == "U" && (strArr[strArr.length - steps]) == (strArr[strArr.length - 1])) {
        noValley += 1;
    } else if ((strArr[strArr.length - steps]) == "D" && (strArr[strArr.length - steps]) == (strArr[strArr.length - 1])) {
        noValley += 2;
    } else {
        noValley += 1;
    }
    return noValley;
}
var me = countingValleys(8, "UDDDUDUU");
console.log(me);