/* 
Lily likes to play games with integers. She has created a new game 
where she determines the difference between a number and its reverse.
For instance, given the number 12 , its reverse is 21 . Their difference 
9 is . The number 120 reversed is 21, and their difference is 99.
She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days, [i...j] and a number k, determine the number 
of days in the range that are beautiful. Beautiful numbers are defined
as numbers where |i-reversed(i)| is evenly divisible by k. If a day's value is a 
beautiful number, it is a beautiful day. Return the number of 
beautiful days in the range.
*/

function beautifulDays(i, j, k) {
    let days = [];
    let stringDays = [];
    let difference = [];
    let beautifulDayCounter = 0;

    //First create an array starting from i, ending j
    for (let counter = i; counter <= j; counter++) {
        days.push(counter);
    }

    //Then reverse element in the created array, creating another arry
    for (let m = 0; m < days.length; m++) {
        stringDays.push(parseInt(days[m].toString().split('').reverse().join('')));
    }

    //Check each elements in the array, return intergers divisible by k, by adding 1 to beautifulDayCOunter
    for (let i = 0; i < days.length; i++) {
        const answer = Math.abs(days[i] - stringDays[i]);
        difference.push(answer);
        if (answer % k === 0) {
            beautifulDayCounter++;
        }
    }
    return beautifulDayCounter;
}
console.log(beautifulDays(20, 23, 6));