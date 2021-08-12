// function sockMerchants(n, ar) {
//     var result = 0;
//     for (var nn = 0; nn <= n; nn++) {
//         if (ar[nn] === ar[nn + 2]) {
//             result += 1;
//             console.log("=" + [nn] + " , " + [nn + 2]);
//             console.log(ar[nn] + " , " + ar[nn + 2]);
//         }
//     }


// }
// console.log(sockMerchants(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));

function sockMerchant(n, ar) {
    let result = 0;
    if (n === ar.length) {
        //    for (let i = 0; i < ar.length; i++) {
        var toDelete = [];
        var toStore = [];
        var newAr = toStore.concat(ar);
        for (let k = 0; k < ar.length; k++) {

            if (ar[k] == ar[k + 1]) {
                console.log(ar[k] + "==" + ar[k + 1]);
                toDelete.push(ar[k]);
                toDelete.push(ar[k + 1]);
                console.log(toDelete);
                console.log(k + "====" + (k + 1));
                result += 1;
                //var newAr = toStore.concat(toDelete);

                newAr = newAr.filter(function (num) {
                    return toDelete.indexOf(num) < 0;
                });
                console.log(newAr);
            } else if (ar[k + 1] == ar[k + 2]) {
                result += 1;
                //console.log(ar[k] + "==" + ar[k + 2]);
                toDelete.push(ar[k]);
                toDelete.push(ar[k + 2]);
                console.log(toDelete);
                //console.log(k + "====" + (k + 2));

                newAr = newAr.filter(function (num) {
                    return toDelete.indexOf(num) < 0;
                });
                console.log(newAr);
            } else {
                result += 0;

            }

        }
        return result;
    }
    //  }
}
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));



var myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// and this one:
var toRemove = ['b', 'c', 'g'];
myArray = myArray.filter(function (el) {
    return toRemove.indexOf(el) < 0;
});
console.log(myArray);

