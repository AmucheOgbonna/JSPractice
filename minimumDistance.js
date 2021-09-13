/*
The distance between two array values is the number of indices between them. Given , 
find the minimum distance between any pair of equal elements in the array. If no such 
value exists, return 

Example
a =[3,2,1,2,3]
There are two matching pairs of value 3 and 2. The indices of the 3's are i=0 and j=4, so their distance is 
d[i,j] = |j - i|=4. The indices of the 2's are i = 1 and j=3, so their distance is d[i,j]=|j-i|=2.
The minimum distance is 2.
*/

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
