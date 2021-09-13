function minimumDistances(a) {
    // Write your code here
    let result = 0;
    for (let i of Array.from({ length: a.length }, (value, index) => index)) {
        for (let j of Array.from(
            { length: a.length },
            (value, index) => index + i + 1)) {
            ((a[i] == a[j] && !result) ||
                (a[i] == a[j] && Math.abs(i - j) < result)) &&
                (result = Math.abs(i - j));

        }

    }
    return !result ? -1 : result;

}