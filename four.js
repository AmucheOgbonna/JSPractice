function countingValleys(steps, path) {
    // Write your code here
    let str = path;

    let noValley = 0;
    let strArr = str.split("");

    if ((strArr[strArr.length - steps]) == "U" && (strArr[strArr.length - steps]) == (strArr[strArr.length - 1])) {
        noValley += 1;
    } else if ((strArr[strArr.length - steps]) == "D" && (strArr[strArr.length - steps]) == (strArr[strArr.length - 1])) {
        noValley += 2;
    } else {
        noValley += 1;
    }
    return noValley;
}

function countingValleys(steps, path) {
    let counter = 0;
    let level = 0;
    for (let index = 0; index < steps; index++) {
        if (path[index] == 'U') {
            level++;
            if (level == 0) {
                counter++;
            }
        } else {
            level--;
        }
    }
    return counter;
}

console.log(countingValleys(8, 'UDDDUDUU'));