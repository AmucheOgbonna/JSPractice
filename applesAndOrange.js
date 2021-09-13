function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let numA = 0;
    let numO = 0;
    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            numA++;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        if (b + oranges[i] >= s && b + oranges[i] <= t) {
            numO++;
        }
    }

    console.log(numA);
    console.log(numO);

}
console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));