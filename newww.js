function getDuplicateArrayElements(arr) {
    var sorted_arr = arr.slice().sort();
    // ['blue', 'blue', 'blue', 'blue', 'green', 'orange', 'red', 'red', 'red']
    var results = [];
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i] && sorted_arr[i + 2] === sorted_arr[i]) {
            results.push(sorted_arr[i], sorted_arr[i + 1]);
            sorted_arr.splice(i, 2);
            console.log(sorted_arr);
            //results.push(sorted_arr[i + 1]);
        } else if (sorted_arr[i + 1] === sorted_arr[i]) {
            results.push(sorted_arr[i], sorted_arr[i + 1]);
            sorted_arr.splice(i, 2);
            console.log("...." + sorted_arr);
        }

    } console.log(results.length);
    return results.length;
}
function sockMerchant(n, ar) {
    var nnn = ar;
    nnn.forEach(getDuplicateArrayElements(ar));

}
console.log(sockMerchant(9, [10, 20, 20, 11, 11, 30, 50, 10, 20]));