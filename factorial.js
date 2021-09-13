
function extraLongFactorials(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        if (Number.isSafeInteger(factorial * i)) {
            factorial *= i;
        } else {
            let extraFactorial = "0";
            for (let j = 0; j < i; j++) {
                extraFactorial = add(extraFactorial, factorial.toString());
            }
            factorial = extraFactorial;
        }
    }

    return factorial;

}
console.log(extraLongFactorials(25));


/* function extraLongFactorials(n) {
    var bigIntNum = BigInt(n);
    var factorial = 1n;
    for(var i = 0n; i <= bigIntNum, i++){
        factorial *= bigIntNum -1;
    }
} */


/* const num = 45;
const longFactorial = (num) => {
    var bigInt = BigInt(num);
    var factorial = 1n;
    for (let i = 0n; i < bigInt; i++) {
        factorial *= bigInt − i;
    }
    return String(factorial);
}
console.log(longFactorial(45)); */