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



function sockMerchant(n, ar) {
    var sorted = ar.sort();
    var result = 0;

    sorted.forEach(function (element, index) {
        if (element[index] === element[index + 1]) {
            sorted.splice([index], 2);
            result += 1;

        } return result;
    });
}
// console.log(sockMerchant(7, [1, 2, 2, 1, 1, 3, 2]));
// console.log(sockMerchant(9, [10, 20, 20, 11, 11, 30, 50, 10, 20]));

function getDuplicateArrayElements(arr) {
    var sorted_arr = arr.slice().sort();
    console.log(sorted_arr);
    // ['blue', 'blue', 'blue', 'blue', 'green', 'orange', 'red', 'red', 'red']
    var results = [];
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i] && sorted_arr[i + 2] === sorted_arr[i]) {
            results.push(sorted_arr[i], sorted_arr[i + 1]);
            sorted_arr.splice(i, 2);
            console.log("===" + sorted_arr);
            //results.push(sorted_arr[i + 1]);
        } //else if (sorted_arr[i + 1] === sorted_arr[i] || sorted_arr[i + 2] === sorted_arr[i]) {
        // results.push(sorted_arr[i], sorted_arr[i + 1] || sorted_arr[i + 2], sorted_arr[i]);
        // sorted_arr.splice(i, 1);
        else if (sorted_arr[i + 1] === sorted_arr[i]) {
            results.push(sorted_arr[i], sorted_arr[i + 1]);
            sorted_arr.splice(i, 2);
        }
        else if (sorted_arr[i + 2] === sorted_arr[i]) {
            results.push(sorted_arr[i + 2], sorted_arr[i]);
            sorted_arr.splice(i, 1);
            sorted_arr.splice(i + 1, 1);
        }
        console.log(sorted_arr);
    }

    console.log(results);
    return results.length;

}


var colors = [10, 20, 20, 11, 11, 30, 50, 10, 20];
var duplicateColors = getDuplicateArrayElements(colors);//["blue", "red"]