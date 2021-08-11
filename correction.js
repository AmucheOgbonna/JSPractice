function gradingStudents(grades) {
    var gradeArray = [];
    for (var x = 1; x < 6; x++) {
        gradeArray.push(x);
        //console.log(gradeArray);
    }
    function addNum(num) {
        return num + grades;
    }
    var addNumber = gradeArray.map(addNum);

    //return addNumber;
    function filterNum(num) {
        return num % 5 == 0;
    }
    var filterNumber = addNumber.filter(filterNum);
    //    console.log(filterNumber);
    var filteredNum = filterNumber[0];

    if (((filteredNum - grades) < 3) && (filteredNum < 40)) {
        return grades;
    } else if ((filteredNum - grades) < 3) {
        return filteredNum;
    } else {
        return grades;
    }
}
console.log(gradingStudents(74));