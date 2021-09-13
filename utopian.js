function utopianTree(n) {
    // Write your code here
    var height = 1;
    if (n == 0) {
        height = 1;
    } else {
        for (var i = 1; i <= n; i++) {
            if (!(i % 2 == 0)) {//spring
                height = height * 2;
            } else {//summer
                height += 1;
            }
        }
    }
    return height;
}
console.log(utopianTree(5));