/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */



function call_me(params) {
    for (i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
}
var x = ['p0'];
call_me(x);


function gradingStudents(grades) {
    var gradeArray = [];
    var result = [];
    for (var x = 0; x < grades.length; x++) {
        for (var y = 1; y < 6; y++) {
            gradeArray.push(y + grades[x]);

        }
    }
    //console.log(gradeArray);
    //return gradeArray;
    function filterNum(num) {
        return num % 5 == 0;
    }
    var filterNumber = gradeArray.filter(filterNum);
    //return filterNumber;

    var graX = 0;
    while (graX < filterNumber.length) {
        if (((filterNumber[graX] - grades[graX]) < 3) && (filterNumber[graX] < 40)) {
            result.push(grades[graX]);
        }
        else if (((filterNumber[graX] - grades[graX]) < 3)) {
            result.push(filterNumber[graX]);
        }
        else {
            result.push(grades[graX]);
        }
        graX = graX + 1;
    }
    //console.log(result);
    return result;
}
console.log(gradingStudents([4, 73, 67, 38, 33]));