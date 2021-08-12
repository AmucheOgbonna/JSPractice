function socks(n, ar) {
    var result = 0;
    var storeAr = [];
    for (let x = 0; x < ar.length; x++) {
        if (ar[x] === ar[x + 1]) {
            result += 1;
            // ar.splice(x, 0);
            // ar.splice(x + 1, 0);
        }
        else if (ar[x] === ar[x + 2]) {
            result += 1;
            storeAr.push(ar[x]);
            storeAr.push(ar[x + 2]);
            // ar.splice(x, 0);
            // ar.splice(x + 1, 0);

        }
    }
    //console.log(storeAr);
    //console.log(result);
    return result;
}
console.log(socks(7, [1, 2, 1, 2, 1, 3, 2]));


function sockMerchant(n, ar) {
    var sorted_arr = ar.slice().sort();
    var results = [];
    if (n === ar.length) {
        for (var i = 0; i < sorted_arr.length - 1; i++) {
            if (sorted_arr[i + 1] === sorted_arr[i]) {
                console.log(sorted_arr);
                // console.log(sorted_arr[i + 1] + "===" + sorted_arr[i]);
                // console.log([i + 1] + "*******" + [i]);
                results.push(sorted_arr[i]);
                //results.push(sorted_arr[i + 1]);
            }
            console.log(results);
        } if (results.length % 2 != 0) {
            return (results.length + 1) / 2;
        } else {
            return (results.length + 2) / 2;
        }
    }
    //return results.length / 2;
    //return results;
}


//var colors = [1, 2, 1, 2, 1, 3, 2];
var duplicateColors = sockMerchant(10, [1, 1, 3, 3, 2, 5, 3, 3, 3, 3]);//["blue", "red"]
console.log(duplicateColors);